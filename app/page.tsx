import Dropdown from "@/components/client/dropdown";
import ExperienceList from "@/components/server/experience_list";
import Location from "@/components/client/location";
import Hero from "@/components/client/hero";

interface LineWithHeadingProps {
  heading: string;
  description: string;
}

function LineWithHeading({ heading, description }: LineWithHeadingProps) {
  return (
    <p>
      {heading}:&nbsp;&nbsp;
      <span className="text-gray-600 dark:text-gray-400">{description}</span>
    </p>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="block h-fit mt-6 sm:w-4/5 w-full px-10">
        <div className="line text-4xl">Hi, I&apos;m Weston.</div>
        <div className="line sm:text-2xl text-xl mt-1">
          Computer Science Engineering Graduate from the University of Michigan.
        </div>
        <div className="line">
          <Location />
        </div>
      </div>
      <Hero />
      <div className="info grid grid-row-1 grid-col-3 gap-1 px-10 my-5 sm:w-4/5 w-full">
        <Dropdown icon="terminal" title="Experience">
          {/* <ExperienceList /> */}
          <div className="md:text-base sm:text-sm text-xs sm:max-w-md max-w-sm ">
            <b>Orientation Leader | <a href="https://onsp.umich.edu/" target="_blank">University of Michigan</a></b>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <p>Apr 2023 - Current</p>
              </div>
            </div>
            <hr></hr>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <ul>
                  <li>
                    Coordinated daily orientations for 20,000+ attendees by organizing schedules, managing logistics, and delivering presentations, demonstrating strong organizational skills, public speaking ability, and clear communication of information
                  </li>
                  <br></br>
                  <li>
                    Facilitated small group activities, breakout discussions, and Q&A sessions, collaborating with team members to ensure smooth operations and create a comfortable, welcoming environment that encouraged student participation and engagement
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
              </p>
            </div>
            <br></br>

            <b>Founding Software Engineer | <a href="/posts/">Driver's Seat Studios</a></b>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <p>Oct 2024 - Current</p>
              </div>
            </div>
            <hr></hr>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <ul>
                  <li>
                    Spearheaded the design of dynamic, immersive level layouts and engaging gameplay systems that balanced challenge and pacing, directly contributing to the team's 1st place finish out of 14 competing games at a university game showcase event
                  </li>
                  <br></br>
                  <li>
                    Generated strong early traction with 1200+ web downloads by enhancing player engagement through polished mechanics and immersive environmental storytelling, while actively pursuing publishing deals to expand distribution and enhance gameplay
                  </li>
                  <br></br>
                  <li>
                    Integrated and optimized high-quality assets, including sophisticated particle effects, custom Shader Graph cel shading, and interactive environmental systems to elevate visual fidelity and maintain robust performance across multiple systems
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
              </p>
            </div>
            <br></br>

            <b>Machine Learning Engineer | <a href="https://mdst.club/" target="_blank">Michigan Data Science Team</a></b>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <p>Aug 2021 - May 2025</p>
              </div>
            </div>
            <hr></hr>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <ul>
                  <li>
                    Developed a Pokémon "auto-battler" using Python and supervised learning techniques, achieving 85% success in battle predictions and optimizing performance with a move recommendation algorithm based on Pokémon types, moves, and traits
                  </li>
                  <br></br>
                  <li>
                    Collaborated with a team to design, train, and refine machine learning models for strategic battle simulations, significantly enhancing the AI's ability to predict and adapt to battle scenarios, leading to improved gameplay dynamics and outcomes
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
              </p>
            </div>
          </div>
        </Dropdown>
        <Dropdown icon="graduation" title="Education">
          <div className="md:text-base sm:text-sm text-xs sm:max-w-md max-w-sm ">
            <p>Bachelor's of Science in Engineering, Computer Science</p>
            <div className="md:text-sm text-xs text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <p>University of Michigan, Ann Arbor</p>
                <p>Aug 2021 - May 2025</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                <br></br>
                <b>Coursework:</b> Data Structures & Algorithms, Computer Organization, Theory of Computation, Computer Security, Software Engineering, Advanced Operating Systems, Database Management Systems, Web Systems, Computer Networks, Distributed Systems, Computer Game Design & Development, Machine Learning Basics
              </p>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
