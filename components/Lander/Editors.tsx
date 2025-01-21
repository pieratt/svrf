import { SECONDARY_TEXT } from "./constants";
import SectionHeader from "./SectionHeader";
import PillButton from "./PillButton";

type Editor = {
  username: string;
  textColor: string;
  bgColor: string;
  customUrl?: string;
};

const EDITORS: Editor[] = [
  { username: "abe1x", textColor: "#4f48f2", bgColor: "#173a4f" },
  { username: "allanyu_", textColor: "#5e5e5e", bgColor: "#de6ab9" },
  { username: "benjitaylor", textColor: "#99b6db", bgColor: "#83ffc2" },
  { username: "cath_land", textColor: "#704819", bgColor: "#e8df8d" },
  { username: "chelsea", textColor: "#8332db", bgColor: "#29a9ab" },
  { username: "default_friend", textColor: "#444444", bgColor: "#4aa8f2" },
  { username: "deepfates", textColor: "#83ff1f", bgColor: "#6d41bf" },
  { username: "dmcgco", textColor: "#444444", bgColor: "#cccccc" },
  { username: "dnlklr", textColor: "#00ff99", bgColor: "#2d3047" },
  { username: "elirousso", textColor: "#ffd700", bgColor: "#4b0082" },
  { username: "embryosophy", textColor: "#f448f2", bgColor: "#713a4f" },
  { username: "fictivecameron", textColor: "#1e1e1e", bgColor: "#cb97e7" },
  { username: "GENICON", textColor: "#ff2c1c", bgColor: "#80ccaf" },
  { username: "jameygannon", textColor: "#282828", bgColor: "#9a55f2" },
  { username: "js_horne", textColor: "#7fb5f5", bgColor: "#293a4f" },
  { username: "keccers", textColor: "#00ff7b", bgColor: "#00bbbf" },
  { username: "KristyT", textColor: "#1ba686", bgColor: "#eda6b2" },
  { username: "leashless", textColor: "#6994c9", bgColor: "#694532" },
  { username: "marty", textColor: "#77e3a1", bgColor: "#2e583e" },
  { username: "msfeldstein", textColor: "#83c01f", bgColor: "#713a4f" },
  { username: "planet_nerf", textColor: "black", bgColor: "#d4cd5b" },
  { username: "round", textColor: "#808080", bgColor: "#ddd7d9" },
  { username: "SHL0MS", textColor: "#8f8f8f", bgColor: "#000000" },
  { username: "smkiv", textColor: "#1a1a1a", bgColor: "#4562f9", customUrl: "https://listenpublic.com" },
  { username: "sterlingcrispin", textColor: "#1b5dcf", bgColor: "#de7d69" },
  { username: "ThouArtThat", textColor: "#adadad", bgColor: "#0e3b66" },
  { username: "touchmoonflower", textColor: "#1588ad", bgColor: "#7d3819" },
  { username: "wwwjim", textColor: "#ff3819", bgColor: "#8788ad" },
];

export default function Editors() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <SectionHeader className="text-left">Editors</SectionHeader>
        <p className={SECONDARY_TEXT}>
          SVRF Editors are an invitation-only selection of the best among us - the founders, the engineers, the writers, the artists, the anons and the community pillars who build the web we love. Editors will never scale beyond a small handful of brilliant minds. 
        </p>
      </div>

      <div className="flex flex-wrap">
        {EDITORS.map(({ username, textColor, bgColor, customUrl }) => (
          <a
            key={username}
            href={customUrl || `https://x.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-0 -mt-0 first:ml-0"
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