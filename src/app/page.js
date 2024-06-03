import { Index } from "../components/Courses/Index";
import { Header } from "@/components/Shared/Header/Header";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header headerName="E-Learning" />
      <Index />
    </main>
  );
}
