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

interface ExperienceEntryProps {
  title: string;
  company: string;
  href: string;
  period: string;
  bullets: string[];
}

function ExperienceEntry({ title, company, href, period, bullets }: ExperienceEntryProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-2">
        <p className="font-semibold">
          {title}&nbsp;&middot;&nbsp;
          <a href={href} target="_blank" className="font-normal hover:underline">{company}</a>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{period}</p>
      </div>
      <div className="flex flex-col gap-2">
        {bullets.map((b, i) => (
          <div key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-400">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
            <p>{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  status: "In Development" | "Complete";
  description: string;
  tech: string[];
  href: string;
}

function ProjectCard({ title, status, description, tech, href }: ProjectCardProps) {
  return (
    <a href={href} className="block group">
      <div className="flex flex-col gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-150">
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold text-sm group-hover:underline">{title}</p>
          <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
            status === "In Development"
              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          }`}>
            {status}
          </span>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="block h-fit mt-6 sm:w-4/5 w-full px-10">
        <div className="line text-4xl">Hi, I&apos;m Weston.</div>
        <div className="line sm:text-2xl text-xl mt-1">
          Software Engineer at Visa
        </div>
        <div className="line">
          <Location />
        </div>
      </div>
      <Hero />
      <div className="info grid grid-row-1 grid-col-3 gap-1 px-10 my-5 sm:w-4/5 w-full">

        <Dropdown icon="terminal" title="Experience">
          <div className="md:text-base sm:text-sm text-xs sm:max-w-md max-w-sm divide-y divide-gray-100 dark:divide-gray-800">
            <div className="pb-6">
              <ExperienceEntry
                title="Software Engineer"
                company="Visa"
                href="https://usa.visa.com/"
                period="September 2025 - Current"
                bullets={[
                  "Architected an AI-assisted migration system for Visa DPS — processing 25% of all VisaNet global authorizations and 10% of U.S. GDP — to convert 20M+ lines of TAL code to Java, compressing a multi-year timeline to months with a 30x gain in developer productivity.",
                  "Built MCP servers with dependency mapping databases, transpilation status tracking, a vector database of validated TAL-to-Java conversions, and tooling to surface proprietary ISO 8583 and TAL documentation — giving Claude the context needed to produce accurate Java output.",
                  "Introduced a Redis caching layer for low-volatility REST endpoints that reduced average API response latency by ~92% and cut read load on PostgreSQL-backed services.",
                  "Integrated Apache Kafka to support asynchronous processing of long-running and third-party workflows, enabling retry semantics and eventual consistency across distributed services.",
                  "Developed server-side OAuth 2.0 authentication and RBAC enforcement in Python, replacing frontend-managed auth via NextAuth and reducing auth-gated page load times by ~90%.",
                  "Owned backend design of an external-facing Early Career challenge platform built to support 100K+ users, with the execution recognized by the Visa CTO.",
                ]}
              />
            </div>
            <div className="py-6">
              <ExperienceEntry
                title="Orientation Leader"
                company="University of Michigan"
                href="https://onsp.umich.edu/"
                period="Apr 2023 - September 2025"
                bullets={[
                  "Coordinated daily orientations for 20,000+ attendees by organizing schedules, managing logistics, and delivering presentations.",
                  "Facilitated small group activities, breakout discussions, and Q&A sessions to create a welcoming environment that encouraged student participation.",
                ]}
              />
            </div>
          </div>
        </Dropdown>

        <Dropdown icon="graduation" title="Education">
          <div className="md:text-base sm:text-sm text-xs sm:max-w-md max-w-sm divide-y divide-gray-100 dark:divide-gray-800">
            <div className="pb-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                <p className="font-semibold">M.S. Computer Science</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 shrink-0">Aug 2026 – May 2028</p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Georgia Institute of Technology, Remote</p>
            </div>
            <div className="pt-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                <p className="font-semibold">B.S.E. Computer Science</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 shrink-0">Aug 2021 – May 2025</p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">University of Michigan, Ann Arbor</p>
              <div className="flex flex-col gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                <p><span className="font-medium text-gray-800 dark:text-gray-200">Tools & Technologies: </span>AWS, C/C++, C#, CSS, Docker, Flask, Git, GitHub, GitLab, Go, HTML, Java, JavaScript, JIRA, Python, Rust, Unity</p>
                <p><span className="font-medium text-gray-800 dark:text-gray-200">Coursework: </span>Data Structures & Algorithms, Computer Organization, Theory of Computation, Computer Security, Software Engineering, Advanced Operating Systems, Database Management Systems, Web Systems, Computer Networks, Distributed Systems, Computer Game Design & Development, Machine Learning</p>
              </div>
            </div>
          </div>
        </Dropdown>

        <Dropdown icon="code" title="Featured Projects">
          <div className="sm:max-w-md max-w-sm flex flex-col gap-3">
            <ProjectCard
              title="Real-Time Personalized Recommendation Engine"
              status="In Development"
              description="A distributed recommendation system in Go modeled after production architectures at Netflix and YouTube — featuring a real-time event pipeline, stateful stream processing, two-layer feature store, and vector-search-based re-ranking."
              tech={["Go", "Redpanda", "Redis", "PostgreSQL", "FAISS", "Docker"]}
              href="/posts/recommendation-engine"
            />
            <ProjectCard
              title="Pick It Up"
              status="Complete"
              description="A competitive 2-player party game built in Unity with a team of 5. Won 1st place out of 14 games at the EECS 494 showcase and reached 1,200+ downloads across itch.io and GameJolt."
              tech={["Unity", "C#", "Shader Graph", "Blender"]}
              href="/posts/eecs494"
            />
            <ProjectCard
              title="Sharded Key-Value Store with Paxos Consensus"
              status="Complete"
              description="Designed and implemented a fault-tolerant, sharded key/value storage system coordinated by a Paxos-replicated Shardmaster. This project extended the Paxos-based key/value infrastructure to support horizontal scalability, shard reconfiguration, and cross-group coordination; building on principles found in real-world systems like BigTable, Spanner, and HBase."
              tech={["Go"]}
              href="/posts/eecs491#project-4"
            />
          </div>
        </Dropdown>

      </div>
    </div>
  );
}