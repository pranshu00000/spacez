import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
            <img
                src="https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png"
                alt="Spacez"
                className="h-16 w-auto"
            />
            <button className="p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#9A5632]"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </nav>
    );
}
