import type {
  GetStaticProps,
  GetServerSideProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Section from "../../components/Section";

import SectionTitle from "../../components/SectionTitle";
import { sanityClient } from "../../utils/sanity.server";
const Home: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { resume } = props;
  const { person, sections } = resume;
  console.log({ resume });
  return (
    <div>
      <Head>
        <title>{resume.person?.name}</title>
        <meta
          name="description"
          content={`${resume.person?.name} |  ${resume?.jobTitle}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-2">
        <Header />

        <h1 className="max-w-3xl mx-auto flex flex-col mb-4  relative  md:justify-center   md:flex-row   items-baseline ">
          {/* <div className="flex absolute -bottom-3 bg-origin-border -ml-2  mx-auto h-[2px] w-[100%]">
            <div className="w-full  flex-none bg-origin-border blur-sm bg-gradient-to-l from- to-transparent via-blue-200"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] bg-gradient-to-l from-transparent to-transparent via-blue-200"></div>
            <div className="-ml-[100%] w-full flex-none blur- bg-gradient-to-l from-transparent to-transparent via-blue-200"></div>
          </div> */}
          <div className=" flex flex-col relative   md:justify-center   md:flex-row  z-10">
            <span className="relative inline-block w-fit  before:bg-gradient-to-r before:-scale-y-105 before:from-blue-300 before:to-blue-300   before:absolute before:-inset-1 before:block lg:before:translate-y-.5   lg:before:skew-y-[.50deg]    md:pr-2 ">
              <span className="relative font-semibold whitespace-nowrap text-white text-5xl ">
                {" "}
                {person?.name}
              </span>
            </span>
            <span className="relative inline-block md:ml-3  lg:before:translate-y-0.5 lg:before:scale-y-105  md:before:bg-blue-50 transition-[translate] before:absolute before:-inset-1 before:block     md:pr-2 ">
              <span className=" relative md:whitespace-nowrap font-semibold text-5xl bg-clip-text bg-gradient-to-r from-slate-500 to-slate-400  text-transparent md:pl-2">
                {resume?.jobTitle}
              </span>
            </span>
          </div>
        </h1>

        {sections &&
          sections.map((section: Section) => (
            <Section key={section.id} section={section} />
          ))}
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, params } = context;

  console.log({ query, params });
  const resume = await sanityClient.fetch(
    `*[_type == "resume" && name==$name  ]{..., sections[]->{...,items[]->{...}}  ,person->}`,
    { name: query.name ?? "Default" }
  );
  console.log({ resume });
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
