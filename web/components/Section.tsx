import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Container from "./Container";

import SectionTitle from "./SectionTitle";

const customComponents: Partial<PortableTextReactComponents> = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <>{children}</>,
  },
  hardBreak: () => <> </>,
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={(target === "_blank" && "noindex nofollow") as string}
        >
          {children}
        </a>
      );
    },
  },
};

export default function Section(props: { section: Section }) {
  const { section } = props;
  console.log({ section });
  const { title, items } = section;
  console.log({ items });

  return (
    <>
      <SectionTitle>{title}</SectionTitle>

      {
        //Map out a list items with position, company and list of tasks
        items &&
          items.map((item: Item) => (
            <Container key={item.id}>
              <dl className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-2 md:gap-y-2">
                <dt className="sr-only">Company</dt>{" "}
                <dd className="col-span-2  text-lg font-semibold text-slate-700 sm:col-span-1 md:text-xl">
                  {item.title}
                </dd>
                <dt className="sr-only">Position</dt>
                <dd className=" col-span-2 flex w-full text-slate-800 sm:col-span-1 sm:justify-end md:text-lg   ">
                  <div className="max-w-[65%%]">{item.subTitle}</div>
                </dd>
                {item?.description && (
                  <>
                    <dt className="sr-only">Description</dt>
                    <dd className=" prose  prose-slate col-span-2 max-w-full px-2   text-sm md:px-4  ">
                      <PortableText value={item?.description} components={customComponents} />
                    </dd>
                  </>
                )}
                <dt className="sr-only">Highlights</dt>
                <dd className="prose-p:not-prose prose   prose-sm prose-slate  col-span-2 max-w-full empty:hidden">
                  <ul className="  w-full  ">
                    {item?.tasks &&
                      item.tasks.map((task) => (
                        <li key={task.id}>
                          <PortableText components={customComponents} value={task.description} />

                          {task.subtask && (
                            <ul className="">
                              {task.subtask.map((subTask, index) => (
                                <li key={index.toString()}>{subTask}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </dd>
              </dl>
            </Container>
          ))
      }
    </>
  );
}
