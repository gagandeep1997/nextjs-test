import { CourseList } from "./CourseList";
import { Header } from "./Header";

export function Wrapper() {
  return (
    <main className="container mx-auto">
      <Header />
      <CourseList />
    </main>
  );
}
