export const AboutSection = () => {
  return (
    <>
      <section class="flex flex-col gap-12 text-slate-300">
        <div class="absolute max-md:-top-16 top-0"></div>
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
              class="right-full mr-2 text-teal-500 md:absolute"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            About
          </h1>
          <br />
          <p class="">
            Hi there! I'm Dinesh. I am a passionate individual who enjoys
            building things with code.
          </p>
          <br />
          <p>
            My first experience with programming was when I was 14, but I didn't
            last long: I was a big fan of computer games like Minecraft, and I
            became curious about programming and started learning on my own.
          </p>
          <br />
          <p>
            Years later, I decided to try learning Python. It was a radically
            different experience. I distinctly remember the moment it clicked;
          </p>
          <p>
            I was reading <strong style="text-decoration: underline">"The Second World War"</strong>📚 book, and they
            were encrypting message using big enigma machines. And it made me
            wonder: how would it work with todays computing power?
          </p>
          <br />
          <p>
            It occurred to me: I had the skills to build a simulation! So I
            threw together a python script that would run thousands of
            simulations to work out what the right answer was. 15 minutes later,
            I had the answer.
          </p>
          <br />
          <p>
            Since then, I've been learning new skills and In my spare time I have developed web-app with <strong style="text-decoration: underline">Millions of users</strong>✨.
            I recently graduated. I'm seeking a full-time role where I can help
            a company achieve their goals.
          </p>
        </div>

        <div class="" id="research-engineering">
          <h2 class="mb-2 text-xl text-slate-100 ">Skills</h2>
          <div class="grid grid-cols-4 gap-4 md:grid-cols-8">
            <p>Python</p>
            <p>React</p>
            <p>CSS</p>
            <p>API</p>
            <p>SQL</p>
            <p>NoSQL</p>
            <p>Git</p>
            <p>Java</p>
            <p>HTML</p>
            <p>Flask</p>
            <p>TypeScript</p>
          </div>
        </div>
      </section>
    </>
  );
};
