import { component$ } from "@builder.io/qwik";
import { ConatctLogo } from "./icons/contact";
import { ProjectLogo } from "./icons/project";

export const Header = component$(() => {
  return (
    <div class="absolute inset-x-14 bottom-8">
      <div class="flex gap-4 justify-end items-center max-h-fit font-sans origin-bottom flex-row-reverse md:gap-8 md:justify-between">
        <div class="flex flex-1 gap-4 justify-end">
          <button
            class="flex gap-2 w-fit font-medium basis-1 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 text-emerald-50 bg-emerald-900/20 hover:bg-emerald-900"
            onClick$={() => {
              const project = document.querySelector("#contact");
              project?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ConatctLogo />
            Contact
          </button>
        </div>
        <button
          title="Swap Header"
          class=" animate-bounce flex w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 hidden bg-indigo-800/20 hover:bg-indigo-800 md:block"
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
        <div class="flex flex-1 gap-4 ">
          <button
            class="flex w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 text-orange-50 bg-orange-900/20 hover:bg-orange-900"
            onClick$={() => {
              const project = document.querySelector("#projects");
              project?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ProjectLogo />
            Project
          </button>
        </div>
      </div>
    </div>
  );
});
