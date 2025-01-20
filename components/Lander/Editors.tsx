import { SECONDARY_TEXT } from "./constants";
import SectionHeader from "./SectionHeader";
import PillButton from "./PillButton";

type Editor = {
  username: string;
  textColor: string;
  bgColor: string;
};

const EDITORS: Editor[] = [
  { username: "embryosophy", textColor: "#f448f2", bgColor: "#713a4f" },
  { username: "touchmoonflower", textColor: "#1588ad", bgColor: "#7d3819" },
  { username: "chelsea", textColor: "#8332db", bgColor: "#29a9ab" },
  { username: "SHL0MS", textColor: "black", bgColor: "#4f4f4f" },
  { username: "dmcgco", textColor: "#444444", bgColor: "#cccccc" },
  { username: "msfeldstein", textColor: "#83c01f", bgColor: "#713a4f" },
  { username: "keccers", textColor: "#00ff7b", bgColor: "#00bbbf" },
  { username: "KristyT", textColor: "#1ba686", bgColor: "#eda6b2" },
  { username: "cath_land", textColor: "#704819", bgColor: "#e8df8d" },
  { username: "deepfates", textColor: "#83ff1f", bgColor: "#6d41bf" },
  { username: "js_horne", textColor: "#7fb5f5", bgColor: "#293a4f" },
  { username: "GENICON", textColor: "#ff2c1c", bgColor: "#80ccaf" },
  { username: "VALENTI", textColor: "#ffffed", bgColor: "#456321" },
  { username: "round", textColor: "#808080", bgColor: "#ddd7d9" },
  { username: "ThouArtThat", textColor: "#adadad", bgColor: "#0e3b66" },
  { username: "planet_nerf", textColor: "black", bgColor: "#d4cd5b" },
  { username: "marty", textColor: "#77e3a1", bgColor: "#2e583e" },
  { username: "benjitaylor", textColor: "#99b6db", bgColor: "#83ffc2" },
  { username: "leashless", textColor: "#6994c9", bgColor: "#694532" },
  { username: "allanyu_", textColor: "#5e5e5e", bgColor: "#de6ab9" },
];

export default function Editors() {
  return (
    <section className="space-y-3">
      <SectionHeader className="text-left">Editors - First Squad</SectionHeader>
      <p className={SECONDARY_TEXT}>
        SVRF Editors are the face of SVRF and the best among us - the founders, the engineers, the writers, the artists, the anons and the community pillars who build the web we love. This group will grow slowly over time, by invitation only, and will never scale beyond a small handful of brilliant minds. 
 
      </p>
      <div className="flex flex-wrap gap-2">
        {EDITORS.map(({ username, textColor, bgColor }) => (
          <a
            key={username}
            href={`https://x.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PillButton
              colors={[bgColor, textColor]}
              size="sm"
            >
              @{username}
            </PillButton>
          </a>
        ))}
      </div>
    </section>
  );
} 