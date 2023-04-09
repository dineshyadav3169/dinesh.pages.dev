import { component$ } from "@builder.io/qwik";
import { Header } from "~/components/header";

export const Hero = component$(() => {
  return (
    <div
      class="relative z-10 w-screen h-screen text-slate-300"
      style="background:linear-gradient(0deg, #060522  30%, #061434)"
    >
      <Header />
      <div class="flex flex-col overflow-hidden absolute justify-center items-center bg-[#061434] border-2 border-[#061434] rounded-3xl scanlines inset-4 sm:inset-6 lg:inset-12 !bottom-36 md:!bottom-24">
        {/* <img src="/image-avatar-croped.webp" height={150} width={150} /> */}
        <h1 class="mt-5 flex relative text-3xl leading-none text-white">
          Hey, I'm Dinesh Kumar.
        </h1>
        <h1 class="mt-5 flex relative text-4xl font-bold leading-none text-white">Developer, Student and Minimalist</h1>
      </div>
    </div>
  );
});
