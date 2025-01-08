import Link from "next/link";
import HeroButton from "./HeroButton";
import clsx from "clsx";
import { SECONDARY_TEXT } from "./constants";

export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <Link href="/">
        <HeroButton>SVRF</HeroButton>
      </Link>
      <h1 className="pt-3 font-serif uppercase text-5xl tracking-widest">
        Beautiful Internet
      </h1>
      <p className={clsx(SECONDARY_TEXT, "text-center")}>
        A new social network
        <br />
        from the founder of Svpply.
      </p>
    </div>
  );
}
