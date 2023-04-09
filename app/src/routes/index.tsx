import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AboutSection } from "~/components/about";
import { ContactSection } from "~/components/conatct";
import { Hero } from "~/components/hero";
import { ConatctLogo } from "~/components/icons/contact";
import { ProjectLogo } from "~/components/icons/project";
import { ProjectSection } from "~/components/project";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col justify-start items-center font-mono bg-[#060522]">
        <Hero />
        <div class="relative w-full h-auto">
          
          <div class="fixed inset-x-0 top-0 z-[1] p-4 px-6 max-xl:bg-[#060522] max-lg:border-b border-white/5 md:px-12">
            <div class="flex flex-col gap-4 justify-end items-center max-h-fit font-sans origin-bottom md:flex-row-reverse md:gap-8 md:justify-between max-md:items-stretch">
              <div class="flex flex-1 gap-4 justify-end max-md:hidden">
                <button
                  class="flex w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 text-emerald-50 bg-emerald-900/20 hover:bg-emerald-900"
                  onClick$={() => {
                    const project = document.querySelector("#contact");
                    project?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ConatctLogo />
                  Contact
                </button>
              </div>
              <div class="flex flex-1 gap-4  max-md:hidden">
                <button
                  class="flex w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 text-rose-50 bg-rose-900/20 hover:bg-rose-900"
                  onClick$={() => {
                    const project = document.querySelector("#projects");
                    project?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ProjectLogo />
                  Projects
                </button>
              </div>
            </div>
          </div>


          <div id="about" class="flex overflow-hidden relative flex-col gap-16 p-8 mx-auto max-md:mt-16 w-full max-w-4xl leading-relaxed text-blue-100 md:p-16 md:pt-[4.25rem]">
            <AboutSection />
            <p id="projects" class="overflow-hidden max-w-full text-slate-800/50 whitespace-nowrap">========================================================================================================================================================================================================================================================================================================================================================================================================================================================================</p>
            <ProjectSection />
            <p class="overflow-hidden max-w-full text-slate-800/50 whitespace-nowrap">========================================================================================================================================================================================================================================================================================================================================================================================================================================================================</p>
            <ContactSection />
          </div>


        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
