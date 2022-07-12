import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";

import Header from "../../components/Header";
import Section from "../../components/Section";

import { sanityClient } from "../../utils/sanity.server";

const TextLink = ({ url, title }: { url: string; title: string }) => {
  return (
    <a
      className="before:red-600 relative before:absolute before:-left-1 before:-bottom-2 before:-z-10 before:block before:h-2  before:w-full before:origin-right before:-translate-y-1.5 before:translate-x-1 before:scale-x-0 before:rounded-sm before:bg-pink-600 before:bg-opacity-40 before:transition-transform before:duration-200 hover:before:origin-left hover:before:scale-x-100 print:underline"
      target={"_blank"}
      rel={"noreferrer"}
      href={url}
    >
      {title}
    </a>
  );
};

// const TextLink = ({ url, title }: { url: string; title: string }) => {
//   return (
//     <span className="relative inline-block before:absolute before:-inset-1 before:block before:w-0  before:-translate-y-1.5  before:translate-x-1 before:border-b-4 before:border-red-600 before:transition-[width] hover:before:w-[96%] md:pr-2">
//       <a className="relative" href={url}>
//         {title}
//       </a>
//     </span>
//   );
// };

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { resume } = props;
  const { person, sections } = resume;
  // console.log({ resume });
  return (
    <div>
      <Head>
        <title>{resume.person?.name}</title>
        <meta name="description" content={`${resume.person?.name} |  ${resume?.jobTitle}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-2">
        <Header />

        <h1 className="relative mx-auto mb-4 flex max-w-3xl flex-col  items-baseline print:flex-row print:justify-center   md:flex-row  md:justify-center ">
          {/* <div className="flex absolute -bottom-3 bg-origin-border -ml-2  mx-auto h-[2px] w-[100%]">
            <div className="w-full  flex-none bg-origin-border blur-sm bg-gradient-to-l from- to-transparent via-blue-200"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] bg-gradient-to-l from-transparent to-transparent via-blue-200"></div>
            <div className="-ml-[100%] w-full flex-none blur- bg-gradient-to-l from-transparent to-transparent via-blue-200"></div>
          </div> */}
          <div className=" relative z-10 flex flex-col gap-y-1  print:flex-row print:justify-center md:flex-row  md:justify-center">
            <span className="relative inline-block w-fit  before:absolute before:-inset-1 before:block before:-scale-y-105   before:bg-gradient-to-r before:from-blue-300 before:to-blue-300   print:before:skew-y-[2deg] print:before:scale-y-105  md:pr-2    lg:before:skew-y-[2deg]">
              <span className="relative whitespace-nowrap text-5xl font-semibold text-white ">
                {person?.name}
              </span>
            </span>
            <span className="lg:hover:before:bg- relative inline-block  before:absolute before:-inset-1 before:block before:bg-no-repeat   before:transition-[background-size]   before:duration-1000 print:translate-y-[.3rem] print:scale-y-[1.08] md:ml-3 md:pr-2 md:before:bg-blue-50  lg:before:translate-y-[.3rem]     lg:before:scale-y-[1.08] ">
              <span className=" relative bg-gradient-to-r from-slate-500 to-slate-400 bg-clip-text text-5xl  font-semibold text-transparent transition-[background-color]  print:text-slate-600  md:whitespace-nowrap md:pl-2 ">
                {resume?.jobTitle}
              </span>
            </span>
          </div>
        </h1>

        <div className="mx-auto mt-4 -mb-4 flex max-w-3xl flex-wrap gap-x-2 text-base md:-mb-2 md:mt-8  md:px-2">
          <TextLink url={`mailto:${person.email}`} title={person.email} />

          {person.links &&
            person.links.map((link: Link) => (
              <TextLink url={link.url} title={link.title} key={link.id} />
            ))}
        </div>

        {sections &&
          sections.map((section: Section) => <Section key={section.id} section={section} />)}
      </div>

      {/* <footer className="text-center text-slate-500">
        <svg
          aria-hidden="true"
          height="24"
          viewBox="0 0 16 16"
          version="1.1"
          width="24"
          data-view-component="true"
          className=""
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </footer> */}
      <footer className="mx-auto mt-8 h-20 w-full max-w-3xl border-t border-slate-300 md:mt-12">
        <div className="flex h-full flex-col items-center justify-center align-middle text-sm text-slate-500">
          {" "}
          <TextLink
            url="https://github.com/1ceb3rg/checkout-my-resume"
            title="Checkout this resume's source code"
          />{" "}
        </div>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, params } = context;

  // console.log({ query, params });
  const resume = await sanityClient.fetch(
    `*[_type == "resume" && name==$name  ]{..., sections[]->{...,items[]->{...}}  ,person->}`,
    { name: query.name ?? "Default" }
  );
  // console.log({ resume });
  return { props: { resume: resume[0] ?? null } };
  // ...
};

//Get static props from the sanityClient
// export const getStaticProps: GetStaticProps = async (context) => {
//   const resume = await sanityClient.fetch(
//     `*[_type == "resume" ]{...,  jobs[]->{...},person->}`
//   );

//   return { props: { resume: resume[0] ?? null } };
//   // ...
// };

export default Home;
