import { title } from '@/components/primitives';

type TodoResponseItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function AboutPage() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => data as TodoResponseItem[]);

  return (
    <div>
      <h1 className={title()}>Test Server Components</h1>
      <ul>
        {todos.slice(0, 5).map(({ title }) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
}
