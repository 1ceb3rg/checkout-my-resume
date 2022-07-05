interface Job {
  position: string;
  id: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tasks: Array<Task>;
}
interface Section {
  id:string
  title: string;
  jobs: Array<Job>;
}
interface Task {
  description: string;
  id: string;
  subtask: Array<string >;
}
