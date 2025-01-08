import clsx from "clsx";
import { SECONDARY_TEXT } from "./constants";
import SectionHeader from "./SectionHeader";

export default function FeatureList({
  title,
  features,
}: {
  title: React.ReactNode;
  features: React.ReactNode[];
}) {
  return (
    <div className="space-y-2">
      <SectionHeader>{title}</SectionHeader>
      <div className="space-y-2 pt-2">
        <p className={SECONDARY_TEXT}>Includes:</p>
        <ul className={clsx("list-none space-y-2", SECONDARY_TEXT)}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
