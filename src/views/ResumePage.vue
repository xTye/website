<script lang="ts">
export default {
  name: "ResumePage",
};
</script>

<template>
  <div
    class="flex flex-col items-center w-full min-h-screen h-full bg-deepBlack"
  >
    <div class="w-full fixed z-[19] h-24 bg-deepBlack" />
    <div class="mt-24" />
    <div class="flex flex-col w-full md:w-11/12 gap-4 justify-center">
      <div class="bg-gradient-to-r from-blue to-green h-4"></div>
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-white font-noto"
      >
        <div class="flex flex-col text-right md:items-end md:w-[45%] gap-3">
          <div class="text-4xl lg:text-5xl">Robert "Tye" Riley</div>
          <div class="flex flex-col items-end text-xs lg:text-base">
            <div>Software Engineer | Game Developer |</div>
            <div>Embedded Systems Engineer</div>
          </div>
        </div>
        <div
          class="invisible border border-l border-green w-24 md:w-0 md:h-24 md:visible"
        ></div>
        <!-- Wrapper around socials -->
        <div
          class="flex flex-col md:flex-row justify-between w-9/12 md:w-[65%]"
        >
          <div class="flex p-2 md:p-0 md:flex-col gap-3 md:w-[20%]">
            <div class="flex flex-col gap-3 w-28">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <img
                    class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                    src="/icons/phone2.png"
                  />
                  <div class="text-xs">Phone</div>
                </div>
                <div class="pl-4 text-xs">(813)-215-9110</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <img
                    class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                    src="/icons/email2.png"
                  />
                  <div class="text-xs">Email</div>
                </div>
                <div class="pl-4 text-xs">roberttylerriley@gmail.com</div>
              </div>
            </div>
          </div>
          <div class="flex p-2 md:p-0 md:flex-col gap-3 md:w-[20%]">
            <div class="flex flex-col gap-3 w-28">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <a href="https://www.linkedin.com/in/xtye/" target="_blank"
                    ><img
                      class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                      src="/icons/linkedin2.png"
                  /></a>
                  <div class="text-xs">LinkedIn</div>
                </div>
                <div class="pl-4 text-xs">/in/xtye</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <a href="https://www.github.com/xtye" target="_blank">
                    <img
                      class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                      src="/icons/github2.png"
                    />
                  </a>
                  <div class="text-xs">GitHub</div>
                </div>
                <div class="pl-4 text-xs">/xtye</div>
              </div>
            </div>
          </div>
          <div class="flex p-2 md:p-0 md:flex-col gap-3 md:w-[20%]">
            <div class="flex flex-col gap-3 w-28">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <a href="https://www.instagram.com/tyleriley" target="_blank"
                    ><img
                      class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                      src="/icons/insta2.png"
                  /></a>

                  <div class="text-xs">Instagram</div>
                </div>
                <div class="pl-4 text-xs">@tyleriley</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <a href="https://www.youtube.com/@xtye" target="_blank">
                    <img
                      class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                      src="/icons/youtube2.png"
                    />
                  </a>

                  <div class="text-xs">YouTube</div>
                </div>
                <div class="pl-4 text-xs">Tye</div>
              </div>
            </div>
          </div>
          <div class="flex p-2 md:p-0 md:flex-col gap-3">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <div class="flex gap-2 items-center">
                  <a href="https://www.xtye.me/" target="_blank">
                    <img
                      class="bg-gradient-to-r from-blue to-green hover:animate-pulse rounded-full w-8 h-8"
                      src="/icons/www2.png"
                    />
                  </a>
                  <div class="text-xs">Website</div>
                </div>
                <div class="pl-4 text-xs">https://xtye.me</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 text-white">
        <div class="font-noto font-bold">RELEVANT SKILLS</div>
        <div class="border-t border-green w-full"></div>
        <div class="flex md:flex-col text-sm md:text-xs lg:text-sm text-center">
          <div
            class="flex flex-col md:flex-row gap-1 md:justify-between md:items-center w-[50%] md:w-[auto] font-roboto py-1"
          >
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              ReactJS | NextJS | VueJS
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              ExpressJS | PHP | Mongoose
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Linux | Windows | Mac
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              C | C++ | C#
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Xamarin
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              HTML5 | CSS3 | JavaScript
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row gap-1 md:justify-between md:items-center w-[50%] md:w-[auto] font-roboto py-1"
          >
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Bash | Shell
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Unity Game Engine
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Docker | Git
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Python | Anaconda | R
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              MySQL | NoSQL
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Java | Swift
            </div>
            <div
              class="flex items-center justify-center border border-green2 rounded-full px-6 py-1"
            >
              Ruby | Ruby on Rails
            </div>
          </div>
        </div>

        <div class="flex font-roboto py-1 gap-1">
          <div class="w-1/2">
            • Proficient with Microsoft Office and Adobe Creative Suite
          </div>
          <div class="w-1/2">
            • Certified Associate in Mechanical Design (SolidWorks)
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 font-roboto text-white">
        <div class="font-noto font-bold">WORK EXPERIENCE</div>
        <div class="border-t border-green w-full"></div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="font-bold">UCF WEAR Lab | Orlando, FL</div>
            <div>November 2020—December 2022</div>
          </div>
          <div class="italic">Lead Software Engineer</div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Led teams of three junior developers for two projects undertaking
            the mobile application development process while communicating with
            corresponding multidisciplinary teams.
          </div>
          <div>
            • Engineered Unity Game Engine infrastructure by providing skeleton
            classes for instance-based objects. Then attached those
            instance-based objects to real-time objects.
          </div>
          <div>
            • Communicated with hardware co-teams to illustrate the data flow
            between the microcontrollers and software applications.
          </div>
          <div>
            • Worked extensively with the NumPy library to perform tests on
            string vibrations using Fast Fourier Transform to gather data about
            the frequencies of a vibrating string on a cello.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="font-bold">Cox Media Group | St. Petersburg, FL</div>
            <div>August 2017—July 2018</div>
          </div>
          <div class="italic">Lead Software Engineer</div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Led teams of three junior developers for two projects undertaking
            the mobile application development process while communicating with
            corresponding multidisciplinary teams.
          </div>
          <div>
            • Engineered Unity Game Engine infrastructure by providing skeleton
            classes for instance-based objects. Then attached those
            instance-based objects to real-time objects.
          </div>
          <div>
            • Communicated with hardware co-teams to illustrate the data flow
            between the microcontrollers and software applications.
          </div>
          <div>
            • Worked extensively with the NumPy library to perform tests on
            string vibrations using Fast Fourier Transform to gather data about
            the frequencies of a vibrating string on a cello.
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 font-roboto text-white">
        <div class="font-noto font-bold">WEB DEVELOPMENT</div>
        <div class="border-t border-green w-full"></div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="flex flex-col md:flex-row md:gap-1 font-bold">
              <div>Exhibit Marker Uniform Resource Router (EMURR)</div>
              <div class="flex">
                <div>[</div>
                <a
                  href="https://github.com/emurr-ucf/emurr"
                  target="_blank"
                  class="text-green hover:text-blue"
                  >web</a
                >
                <div>/</div>
                <a
                  href="https://github.com/emurr-ucf/rpi"
                  target="_blank"
                  class="text-green hover:text-blue"
                  >pi</a
                >
                <div>]</div>
              </div>
            </div>
            <div class="text-right w-1/2 md:w-[auto]">
              TypeScript | NextJS | Prisma | MySQL
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Designed and built a WYSIWYG editor website to create websites for
            embedded systems built on top of the NextJS framework.
          </div>
          <div>
            • Performed standard DevOps operations to manage Git/GitHub
            repository workflows by reviewing, merging, and managing branches.
          </div>
          <div>
            • Organized asynchronous data flow by creating ReactJS/NextJS
            components to separate hook logic and states for code clarity.
          </div>
          <div>
            • Developed NextJS backend APIs to communicate with the Prisma ORM
            to store data in a MySQL database and custom server-side filesystem.
          </div>
          <div>
            • Setup production environment on the UCF CHDR Linux server.
          </div>
          <div>
            • Developed bash scripts to setup websites to be hosted on a
            Raspberry Pi local network, hosted on a TP Link router.
          </div>
          <div>
            • Communicated and documented project requirements and pipelines by
            participating in daily standups, weekly sprints, and biweekly
            sponsor meetings.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="flex flex-col md:flex-row md:gap-1 font-bold">
              <div>Hand Brain Chess</div>
              <div class="flex">
                <div>[</div>
                <a
                  href="https://github.com/jonathanhuydieu/hbchess-frontend"
                  target="_blank"
                  class="text-green hover:text-blue"
                  >frontend</a
                >
                <div>/</div>
                <a
                  href="https://github.com/jonathanhuydieu/hbchess-backend"
                  target="_blank"
                  class="text-green hover:text-blue"
                  >backend</a
                >
                <div>]</div>
              </div>
            </div>
            <div class="text-right w-1/2 md:w-[auto]">
              TypeScript | ReactJS | ExpressJS | Mongoose | MongoDB
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developed a functional CRUD backend using the ExpressJS framework
            that references a Mongoose ORM to store user data in a MongoDB
            database.
          </div>
          <div>
            • Designed a JWT authentication in a ExpressJS backend which stores
            user permissions and is managed by the middleware interface.
          </div>
          <div>
            • Designed and developed a chat system on a ReactJS frontend which
            communicates via Socket.io web-sockets for a real-time emoji chat.
          </div>
          <div>
            • Setup production environment hosted on a DigitalOcean VM based
            Linux server using the Nginx web server.
          </div>
          <div>
            • Developed NextJS backend APIs to communicate with the Prisma ORM
            to store data in a MySQL database and custom server-side filesystem.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="flex flex-col md:flex-row md:gap-1 font-bold">
              <div>Student Event Manager</div>
              <div class="flex">
                <div>[</div>
                <a
                  href="https://github.com/xTye/StudentEventManager"
                  target="_blank"
                  class="text-green hover:text-blue"
                  >frontend</a
                >
                <div>/</div>
                <a
                  href="https://github.com/xTye/StudentEventMangerBackend"
                  target="_blank"
                  class="text-green hover:text-blue"
                  >backend</a
                >
                <div>]</div>
              </div>
            </div>
            <div class="text-right w-1/2 md:w-[auto]">
              TypeScript | JavaScript | VueJS | ExpressJS | Sequelize | MySQL
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developed a website based on an entity-relationship model to
            design a VueJS frontend for the ExpressJS backend which uses
            Sequelize to read and write data to a MySQL database.
          </div>
          <div>
            • Performed standard DevOps operations to manage Git / GitHub
            repository workflows by reviewing, merging, and managing branches.
          </div>
          <div>
            • Wrote a clear and concise frontend by managing asynchronous data
            flow with Axios and the Vuex stores through mutators, callbacks,
            input validation, and carefully constructed models that match the
            backend model APIs.
          </div>
          <div>
            • Designed a JWT authentication in a ExpressJS backend which stores
            user permissions and is managed by the middleware interface.
          </div>
          <div>
            • Setup production environment hosted on a DigitalOcean VM based
            Linux server using the Nginx web server.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a href="https://github.com/xTye/flee" target="_blank"
              ><div class="font-bold text-green hover:text-blue">Flee</div></a
            >
            <div>TypeScript | SolidJS | Firebase</div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developing a website using a SolidJS frontend with scalable,
            flexible components and hooks.
          </div>
          <div>
            • Managed authentication states using Fire[base/store] database and
            Google authentication systems.
          </div>
          <div>
            • Built and designed custom context provider for SolidJS to support
            frontend authentication validation.
          </div>
          <div>
            • Performed standard DevOps operations to manage Git/GitHub
            repository workflows by reviewing, merging, and managing branches.
          </div>
          <div>
            • Setup production environment hosted on the Firebase hosting
            platform.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a href="https://github.com/xTye/website" target="_blank"
              ><div class="font-bold text-green hover:text-blue">
                Personal Website
              </div></a
            >
            <div class="text-right w-1/2 md:w-[auto]">
              TypeScript | VueJS | ThreeJS | Firebase
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developed a website using a VueJS frontend with custom CSS and
            ThreeJS animations.
          </div>
          <div>
            • Manages blog posts with read and write permissions to a
            Fire[base/store] backend and Google authentication systems.
          </div>
          <div>
            • Created assets using Dalle-2, Adobe Photoshop CC, and the ThreeJS
            framework.
          </div>
          <div>
            • Setup production environment hosted on the Firebase hosting
            platform.
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 font-roboto text-white">
        <div class="font-noto font-bold">GAME DEVELOPMENT</div>
        <div class="border-t border-green w-full"></div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a
              href="https://drive.google.com/file/d/1MzI2R6CvBrordYyU3HIVR0rLx4qVWb-W/view"
              target="_blank"
              ><div class="font-bold text-green hover:text-blue">
                Bitterblossom
              </div></a
            >
            <div class="text-right w-1/2 md:w-[auto]">
              Unity Game Engine | C# | Blender
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developed and designed a video game from scratch using the Unity
            Game Engine written in C#.
          </div>
          <div>
            • Performed standard DevOps operations to manage Git/GitHub
            repository workflows by reviewing, merging, and managing branches.
          </div>
          <div>
            • Composed original soundtrack with FL Studio and Loopcloud based on
            project thematical components and design.
          </div>
          <div>
            • Created special AI behaviors for idle, attacking and seeking
            states by using object-oriented inheritance for the control logic,
            and corresponding animations provided from third-party model asset
            packs found on the Unity Asset Store.
          </div>
          <div>
            • Wrote original story components based on initial game pitch.
          </div>
          <div>
            • Built architecture around ScriptableObjects to manage the event
            system and persist data.
          </div>
          <div>
            • Generated a unique 3D world for the AI and character to interact
            in using Gaia and GeNa, third-party procedural world building
            libraries found on the Unity Asset Store, by importing custom
            textures, building terrain from noise gathered from the Amazon
            forest, and populating the world with additional third-party
            GameObject assets also found on the Unity Asset Store.
          </div>
          <div>
            • Designed and implemented special attacks, animations,
            interactions, and sound effects based on player controller inputs by
            utilizing tools like Blender, the Unity Animator, Adobe Audition CC,
            third-party assets, and asynchronous event-based architecture.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a href="https://xtye.itch.io/sunflower-chess" target="_blank"
              ><div class="font-bold text-green hover:text-blue">
                Sunflower Chess
              </div></a
            >
            <div class="text-right w-1/2 md:w-[auto]">Lua | Playdate SDK</div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developed and managed a simple arcade game with a small,
            experienced developer team in a single week written in Lua and built
            with the Playdate SDK.
          </div>
          <div>
            • Orchestrated project management for a tightly scheduled group of
            developers, designers, and artists by communicating with team
            members and managing Kanban workflow.
          </div>
          <div>
            • Performed standard DevOps operations to manage Git/GitHub
            repository workflows by reviewing, merging, and managing branches.
          </div>
          <div>
            • Implemented game architecture and logic, by creating respective
            classes, sprite states, and user story design.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a
              href="https://github.com/xTye/discord-and-dragons"
              target="_blank"
              ><div class="font-bold text-green hover:text-blue">
                Discord and Dragons
              </div></a
            >
            <div class="text-right w-1/2 md:w-[auto]">
              TypeScript | DiscordJS
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Created asynchronous, non-singleton software architecture from
            scratch using classes, states, interfaces, and events by utilizing
            the DiscordJS API and TypeScript language.
          </div>
          <div>
            • Built a custom rendering method for Discord embeds to refresh
            player UI using a timer system.
          </div>
          <div>
            • Utilizes Discord bot, event, modal, input, role, emoji, embed, and
            button systems to provide users with an interactive Discord game
            experience.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a href="https://jacksonwebb.itch.io/5-more-minutes" target="_blank"
              ><div class="font-bold text-green hover:text-blue">
                5 More Minutes
              </div></a
            >
            <div>Lua | Playdate SDK</div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Developed a retro-arcade game with a small, experienced developer
            team written in Lua and built with the Playdate SDK.
          </div>
          <div>
            • Implemented frame timers and animations for sprite assets and
            transition logic to control flow of the game controller.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="font-bold">
              Mechatronic Musical Instrument: Performance Feedback (MMIPF)
            </div>
            <div class="text-right w-1/2 md:w-[auto]">
              Unity Game Engine | C# | Wwise
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Handled Bluetooth events to display, calculate, and emit sound
            sent from a microcontroller built on Unity Game Engine and C#.
          </div>
          <div>
            • Managed sound events and states with the Wwise sound engine and
            edited respective sound frequencies of a cello in FL Studio.
          </div>
          <div>
            • Created custom assets in Adobe Illustrator and Photoshop CC for
            the UI.
          </div>
          <div>
            • Built architecture around ScriptableObjects to manage the event
            system and persist data.
          </div>
          <div>
            • Managed a small team of software engineers by creating a Kanban
            workflow and hosting weekly meetings.
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 font-roboto text-white">
        <div class="font-noto font-bold">
          EMBEDDED SYSTEMS DEVELOPMENT | ALGORITHMS
        </div>
        <div class="border-t border-green w-full"></div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a href="https://github.com/xTye/tsp" target="_blank"
              ><div class="font-bold text-green hover:text-blue">
                Traveling Salesman Problem — Approximation
              </div></a
            >
            <div class="text-right w-1/2 md:w-[auto]">Python</div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Conceptualized ideas from theory to algorithm to find the shortest
            Hamiltonian cycle in a complete graph.
          </div>
          <div>
            • Evaluated theory by drawing out diagrams and writing rules.
          </div>
          <div>
            • Wrote, tested, and documented the algorithm in Python based on a
            discrete mathematical, and graphical theory.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <a href="https://github.com/xTye/Kernel" target="_blank"
              ><div class="font-bold text-green hover:text-blue">Kernel</div></a
            >
            <div class="text-right w-1/2 md:w-[auto]">C++</div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Wrote a kernel script that performs simple operating system tasks
            written in C++.
          </div>
          <div>
            • Managed up to 1000 processes consecutively by managing memory of
            PIDs and history.
          </div>
          <div>
            • Encompassed fault tolerance and user error by providing custom
            error messages and handlers.
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="font-bold">
              Mechatronic Musical Instrument: Performance Feedback (MMIPF)
            </div>
            <div class="text-right w-1/2 md:w-[auto]">
              Circuit Python | NumPy | Python | Anaconda
            </div>
          </div>
        </div>
        <div class="flex flex-col font-roboto py-1">
          <div>
            • Wrote scripts in Python to read input voltage files from a
            microcontroller.
          </div>
          <div>
            • Constructed graphs to formulate graphical and statistical analysis
            in Anaconda.
          </div>
          <div>
            • Validated Fast Fourier Transform algorithm with other third-party
            applications.
          </div>
          <div>
            • Implemented Fast Fourier Transform and Bluetooth Low Energy
            communication on a microcontroller using the Circuit Python and
            NumPy libraries to read real-time input voltage provided from a
            piezo sensor.
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 font-roboto text-white">
        <div class="font-noto font-bold">EDUCATION</div>
        <div class="border-t border-green w-full"></div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="font-bold">
              University of Central Florida | Orlando, FL
            </div>
            <div class="text-right w-1/2 md:w-[auto]">December 2022</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="italic">
              Bachelor of Science in Computer Science, BS
            </div>
            <div class="text-right w-1/2 md:w-[auto]">GPA: 3.762</div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-1 font-roboto">
            <div class="w-1/2">• T-L.E.A.R.N. alumni of the 2020 cohort</div>
            <div class="w-1/2">
              • Presenter at the Student Scholar Symposium
            </div>
          </div>
          <div class="flex items-center gap-1 font-roboto">
            <div class="w-1/2">• S.U.R.F. scholar of the 2021 cohort</div>
            <div class="w-1/2">
              • Dean’s List (x1); President’s Honor Roll (x3)
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="font-bold">
              State College of Florida, Manatee-Sarasota | Bradenton, FL
            </div>
            <div class="text-right w-1/2 md:w-[auto]">May 2020</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="italic">Associate in Arts, AA</div>
            <div class="text-right w-1/2 md:w-[auto]">GPA: 3.7</div>
          </div>
        </div>
        <div class="flex items-center gap-1 font-roboto">
          <div class="w-1/2">• Dean’s List (x2)</div>
        </div>
      </div>

      <div class="flex flex-col gap-1 font-roboto text-white">
        <div class="font-noto font-bold">NOTABLE ACHIEVEMENTS</div>
        <div class="border-t border-green w-full"></div>
        <div class="flex flex-col">
          <div>
            • Presented at the Senior Design Showcase UCF where the top 5% of
            students showcase their senior design projects.
          </div>
          <div>
            • Placed top 3 for best research poster in T-L.E.A.R.N. cohort.
          </div>
          <div>
            • Contributed to 5 More Minutes which has reached over 1k+ downloads
            and 12k+ views.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
