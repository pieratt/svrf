import Link from "next/link";
import { SECONDARY_TEXT } from "@/components/Lander/constants";
import Gradient from "@/components/Lander/Gradient";
import Logo from "@/components/Lander/Logo";

export default function Success() {
  return (
    <>
      <Gradient />
      <main className="relative min-h-screen">
        <div className="flex flex-col max-w-[700px] mx-auto px-4 py-32 space-y-16">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="space-y-8">
            <p className={SECONDARY_TEXT}>
              Your membership has been confirmed, tysm.<br /> Editor applications will be sent out February 28th.
            </p>
            <Link 
              href="/"
              className="text-zinc-400 hover:text-white transition-colors duration-200 inline-block"
            >
              ← Return home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
} 