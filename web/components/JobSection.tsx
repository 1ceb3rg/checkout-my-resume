import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function JobSection(props: { section: Section }) {
  const { section } = props;
  console.log({ section });
  const { title, jobs } = section;
  console.log({ jobs });

  return (
    <>
      <SectionTitle>{title}</SectionTitle>

      {
        //Map out a list jobs with position, company and list of tasks
        jobs &&
          jobs.map((job: Job) => (
            <Section key={job.id}>
              <dl className="gap-y-1 md:gap-y-4 gap-x-2 grid grid-cols-1 sm:grid-cols-2">
                <dt className="sr-only">Company</dt>{" "}
                <dd className="font-semibold  col-span-2 sm:col-span-1 text-slate-700 text-lg md:text-xl">
                  {job.company}
                </dd>
                <dt className="sr-only">Position</dt>
                <dd className=" text-slate-800 col-span-2 sm:col-span-1 md:text-lg w-full flex sm:justify-end  ">
                  <div className="max-w-[65%%]">{job.position}</div>
                </dd>
                {job?.description && (
                  <>
                    <dt className="sr-only">Description</dt>
                    <dd className=" text-sm text-slate-600 px-2 md:px-4 col-span-2  ">
                      {job?.description}
                    </dd>
                  </>
                )}
                <dt className="sr-only">Highlights</dt>
                <dd className="col-span-2 text-sm text-slate-600 px-2 md:px-4">
                  <ul className=" md:pl-6  w-full pl-2 list-outside list-disc">
                    {job?.tasks &&
                      job.tasks.map((task) => (
                        <li key={task.id}>
                          {task.description}
                          <ul className="list-[circle] pl-4 md:pl-6 list-outside">
                            {task.subtask &&
                              task.subtask.map((subTask, index) => (
                                <li key={index.toString()}>{subTask}</li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </dd>
              </dl>
            </Section>
          ))
      }
    </>
  );
}
