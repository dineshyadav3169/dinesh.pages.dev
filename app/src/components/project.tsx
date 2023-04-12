import { component$ } from "@builder.io/qwik";

export const ProjectSection = component$(() => {
  return (
    <>
      <section class="flex relative flex-col gap-8 text-slate-300">
        <div class="absolute max-md:-top-16"></div>
        <div>
          <h1 class="flex relative text-3xl leading-none text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              height="32"
              class="right-full mr-2 text-rose-500 md:absolute"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Project
          </h1>
          <br />
          <div>
            <p>I like to stay busy and always have a project in the works.</p>
            <p>
              Take a look at some of the applications i've dedicated my time to.
            </p>

            <ul style="padding-bottom: 0.6rem;" class=" my-8">
              <li>
                <div>
                  <h2>Document Scanner</h2>
                  <p>
                    A full-stack web app that scans and analyzes documents using
                    OCR and NLP. It has processed over 2 million✨ documents
                    across different platforms.
                  </p>
                  <p class="details">React, Express, JS &amp; SQL</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <a href="https://temp-upload.web.app/" target="_blank" class="text-blue-400 underline hover:underline-offset-2 transition-all">
                      Temp Upload Files
                    </a>
                  </h2>
                  <p>
                    Developed TempUpload, a web app for secure and convenient
                    temporary file sharing. Implemented automatic file deletion
                    after a specified time and attracted thousands of users
                    worldwide.
                  </p>
                  <p class="details">
                    HTML, CSS, Firebase - function | firestore | db
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <a href="https://mathfinding.com/" target="_blank" class="text-blue-400 underline hover:underline-offset-2 transition-all">
                      Math Solver
                    </a>
                  </h2>
                  <p>MathSolver is a web app that uses AI to provide step-by-step solutions and explanations for math problem.</p>
                  <p class="details">
                    Open Source{" "}
                    <a
                      href="https://github.com/dineshyadav3169/Math"
                      target="_blank"
                      class="text-blue-400 underline hover:underline-offset-2 transition-all"
                    >
                      Project
                    </a>{" "}
                    (Python, Next.js, prisma, planetscale DB, Pupetter.js)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
});
