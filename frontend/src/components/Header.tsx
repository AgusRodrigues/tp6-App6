// components/Header.tsx

import Link from "next/link";

interface HeaderProps {
  onCartClick?: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between w-full mb-3 font-sans">
      <div className="flex-1 m-4">
        <Link href="/" className="text-xl">
          Animal Design
        </Link>
      </div>
      <div className="flex-none m-4">
        <button onClick={onCartClick} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
