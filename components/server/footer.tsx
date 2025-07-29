import Link from "next/link";
import Icon from "./icon";
import SocialMediaLink from "./social";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center gap-2 mt-auto p-10 text-gray-600 dark:text-gray-400 divide-x-2 divide-gray-400">
      <div className="flex flex-row justify-center items-center gap-2">
        <SocialMediaLink
          type="linkedin"
          link="https://www.linkedin.com/in/panglew/"
        />
        <SocialMediaLink type="envelope" link="mailto:pangle.weston@gmail.com" />
        <SocialMediaLink type="github" link="https://github.com/panglew" />
        <p style={{ display: 'none' }}>Credit to Sachchit Kunichetty for allowing me to recreate his site template.</p>
      </div>
    </footer>
  );
}
