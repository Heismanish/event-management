import EventForm from "@/Components/EventForm";

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
