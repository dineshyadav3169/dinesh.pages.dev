export const ContactSection = () => {
  return (
    <section class="flex relative flex-col gap-8 text-slate-300">
      <div id="contact" class="absolute max-md:-top-16"></div>
      <div class="">
        <h1 class="flex relative text-3xl leading-none text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            height="32"
            class="right-full mr-2 text-amber-600 md:absolute"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Contact
        </h1>
        <br />
        <div class="">
          <p>
            Mail:{" "}
            <a
              href="mailto:dineshyadav3169@gmail.com"
              class="text-blue-400 underline hover:underline-offset-2"
            >
              dineshyadav3169@gmail.com
            </a>
          </p>
        </div>
        <br />
        <div class="">
          <h2 class="mb-2 text-xl text-slate-100 ">Online Presence</h2>
          <div class="grid grid-cols-4 gap-10 md:grid-cols-8">
            <a
              href="https://www.linkedin.com/in/thedineshyadav"
              class="text-blue-400 underline hover:underline-offset-2 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dineshyadav3169"
              class="text-blue-400 underline hover:underline-offset-2 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/dineshyadav3169/"
              class="text-blue-400 underline hover:underline-offset-2 transition-all"
            >
              LeetCode
            </a>
            <a
              href="https://twitter.com/_thedineshyadav"
              class="text-blue-400 underline hover:underline-offset-2 transition-all"
            >
              Twitter
            </a>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};
