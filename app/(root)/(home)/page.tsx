import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] rounded-[20px] w-full bg-cover bg-hero">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 md:max-lg:px-5 md:max-lg:py-8 lg:px-10 lg:py-8">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base text-normal">
            Upcoming Meeting at {time.toUpperCase()}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time.toUpperCase()}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl p-2">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
