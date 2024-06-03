import Image from "next/image";
import Nav from "../Components/nav";
import EventForm from "@/Components/EventForm";
import { useListContext } from "@/Components/Context";

// from-gray-600 to-gray-900

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 ">
      <h1 className="text-4xl font-bold pt-2 mb-6 md:mb-8 bg-gradient-to-r from-tangerine to-[#d73901] bg-clip-text text-transparent  ">
        Events
      </h1>
      <EventForm />
    </main>
  );
}
