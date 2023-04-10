import { component$ } from "@builder.io/qwik";
import { Header } from "~/components/header";

export const Hero = component$(() => {
  return (
    <div
      class="relative z-10 w-screen h-screen text-slate-300"
      style="background:linear-gradient(0deg, #060522  30%, #061434)"
    >
      <Header />
      <div class="flex flex-col overflow-hidden absolute justify-center items-center sm:bg-[#061434] bg-transparent rounded-3xl scanlines inset-4 sm:inset-6 lg:inset-12 !bottom-36 md:!bottom-24">
        {/* <img src="/image-avatar-croped.webp" height={150} width={150} /> */}
        <h1 class="mb-5 flex relative text-3xl leading-none text-white text-center">
          Hey, I'm Dinesh Kumar.
        </h1>
        <h1
          class="mt-5 flex relative text-4xl font-bold leading-none text-white text-center"
          style="line-height:3rem"
        >
          Developer, Student and Minimalist
        </h1>
        <button
          title="Swap Header"
          class=" absolute bottom-1 animate-bounce flex md:hidden w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-indigo-800/20 hover:bg-indigo-800"
          onClick$={() => {
            const project = document.querySelector("#about");
            project?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            height="20"
            class="inline text-indigo-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
});
