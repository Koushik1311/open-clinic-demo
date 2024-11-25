import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50">
      <div className="container">
        <nav className="nav-glass-effect">
          {/* Logo */}
          {/* Ycombinator */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
              quality={100}
              className="h-8 w-auto"
            />
            <p>
              <span>Y</span>
              <span>Combinator</span>
            </p>
          </div>

          {/* Navigation */}

          {/* Sign up / Sign in */}
          <div>
            <Link
              href="/sign-up"
              className="text-sm font-medium bg-orange-600 px-3 py-2 rounded-lg text-white hover:bg-orange-700 transition-all"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
