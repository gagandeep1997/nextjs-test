import { CourseList } from "../components/CourseList";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <CourseList />
    </main>
  );
}
