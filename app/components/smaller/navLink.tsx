import Link from "next/link";

type props = {
  text: string;
  link: string;
};

export default function NavLink({ text, link }: props) {
  return (
    <a
      className="inline-block bg-firstColorYellow p-2 my-2 text-white text-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-secondColorDarkerYellow"
      href={link}
    >
      {text}
    </a>
  );
}
