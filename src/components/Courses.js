import { Card } from "./Card";

export function Courses({ Courses }) {
  const listitems = Courses.map((value) => (
    <Card
      key={value.id}
      name={value.name}
      description={value.description}
      author={value.author}
      publishDate={value.publishDate}
      duration={value.duration}
      image={value.image}
    />
  ));
  return <div className="ml-5 container flex flex-col">{listitems}</div>;
}
