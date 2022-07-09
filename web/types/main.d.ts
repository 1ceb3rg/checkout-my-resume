interface Item {
  subTitle: string;
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  description: PortableTextProps;
  tasks: Array<Task>;
}
interface Section {
  id: string;
  title: string;
  items: Array<Item>;
}
interface Task {
  description: PortableTextProps;
  id: string;
  subtask: Array<string>;
}
