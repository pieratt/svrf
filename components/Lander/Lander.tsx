import Head from "next/head";
import Hero from "./Hero";
import HeroButton from "./HeroButton";
import FeatureList from "./FeatureList";
import SectionHeader from "./SectionHeader";
import { PRIMARY_TEXT, SECONDARY_TEXT } from "./constants";
import Link from "next/link";
import Gradient from "./Gradient";

export default function Lander() {
  return (
    <>
      <Head>
        <title>SVRF — Beautiful Internet</title>
        <meta
          name="description"
          content="A new social network from the founder of Svpply."
        />
      </Head>
      <Gradient />
      <main className="relative min-h-screen">
        <div className="flex flex-col items-center justify-center px-4 py-60 space-y-48">
          <Hero />

          <section className="flex flex-col items-center text-center space-y-4">
            <FeatureList
              title={
                <>
                  1st Generation
                  <br />
                  SVRF Membership
                </>
              }
              features={[
                "Editor Application",
                "1-year SVRF Membership",
                "Customizable Feed",
                "Personal Profile",
                "Collect & Post",
              ]}
            />
            <div className="flex flex-col items-center space-y-6 pt-6">
              <HeroButton>$99</HeroButton>
              <p className={PRIMARY_TEXT}>Limited to 1,000</p>
            </div>
          </section>

          <section className="flex flex-col items-center text-center space-y-4">
            <FeatureList
              title={
                <>
                  Lifetime
                  <br />
                  SVRF Membership
                </>
              }
              features={[
                "First-Look Editor Application",
                "Lifetime SVRF Membership",
                "+1 Gift Seed Membership",
                "Gradient Logo Crew",
                "Customizable Feed",
                "Personal Profile",
                "Collect & Post",
              ]}
            />
            <div className="pt-6">
              <HeroButton>$999</HeroButton>
            </div>
          </section>

          <section className="text-center space-y-10">
            <SectionHeader>Seed Launch Schedule:</SectionHeader>
            <div className="space-y-8">
              <p className={SECONDARY_TEXT}>
                Editors
                <br />
                Spring 2025
              </p>
              <p className={SECONDARY_TEXT}>
                1st Gen Members
                <br />
                Fall 2025
              </p>
              <p className={SECONDARY_TEXT}>
                General
                <br />
                Winter 2026
              </p>
            </div>
            <p className={SECONDARY_TEXT}>
              * Full refunds will be issued to
              <br />
              Members who are selected as Editors.
            </p>
            <p className={PRIMARY_TEXT}>
              Follow <Link href="https://svrf.co">@SVRFco</Link>
              <br />
              for updates.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
