import Link from "next/link";
import { SECONDARY_TEXT } from "./constants";
import { useState } from "react";

type FootnoteParagraph = {
  text: string;
  isQuote?: boolean;
};

interface LinkData {
  url: string;
  title: string;
  displayUrl?: string; // Optional simplified URL for display
  favicon: string;
  note: FootnoteParagraph[];
  author: {
    name: string;
    url?: string; // Optional custom URL for the author
  };
}

export default function Content() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const links: LinkData[] = [
    { 
      url: "https://apparel.zzzn.jp/", 
      title: "ZZZN SLEEP APPAREL SYSTEM",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Ccircle cx='8' cy='8' r='4' fill='white'/%3E%3C/svg%3E",
      note: [
        { text: "all season jacket with smarts to let you sleep comfy anywhere. source https://warpcast.com/keccers.eth/0x5a31710c" }
      ],
      author: {
        name: "@sdv",
        url: "https://x.com/sdvim"
      }
    },
    { 
      url: "https://www.lesswrong.com/posts/DfrSZaf3JC8vJdbZL/how-to-make-superbabies", 
      title: "How to Make Superbabies - LessWrong",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Ccircle cx='8' cy='8' r='3' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
      note: [
        { text: "It's a less wrong about genetic engineering and the idea of creating superbabies to increase IQ, health, and lifespan." },
        { text: "It also criticized scientists for being hesitant about germline editing because of vague ethical worries." },
        { text: "I dont so much care about superbabies because it's less a potential future and more an inevitable one — for me it's the second part that's interesting because I think many ethical concerns today no longer authentic reasoned debates, but rather simulacrums — acting more like a comfortable justification for stagnation or avoiding risk rather than genuine moral reflection." },
        { text: "I think genuine ethical responsibility includes not just caution, but also courage to explore controversial ideas. If people continue questioning vague moral concerns it will show that innovation and ethical reflection aren't mutually exclusive. The main obstacles of many (not all) scientific breakthroughs are not technological or intellectual, but rather ethical." }
      ],
      author: {
        name: "@Artem G",
        url: ""
      }
    },
    { 
      url: "https://zero.rocicorp.dev/", 
      title: "Zero Docs - The official documentation for Zero by Rocicorp",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M4 4L12 12M4 12L12 4' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
      note: [
        { text: "new sync engine that really speaks to me. a lot of the web can feel so much snappier with tech like this" }
      ],
      author: {
        name: "dicky-the-benevolent-god",
        url: "https://x.com/dandankis"
      }
    },
    { 
      url: "https://www.lesswrong.com/posts/Hgj84BSitfSQnfwW6/so-you-want-to-make-marginal-progress", 
      title: "So You Want To Make Marginal Progress... — LessWrong",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M4 12L8 4L12 12H4Z' fill='white'/%3E%3C/svg%3E",
      note: [
        { text: "it's, well, less wrong, although this one is a short read. the synopsis is that in a given field there probably are big central bottlenecking problems that need to be solved, and those problems will be solved in super creative ways that you can't even conceive of." },
        { text: "because the ways are so crazy, fixing the bottleneck will probably upend the whole field. which the author uses to argue that making marginal progress on smaller subproblems is very hard, since the only way your marginal contributions are useful is if you figure out a contribution which robustly generalises to the new paradigm of your field once the big central problem is solved." },
        { text: "which is interesting i guess. i think id argue that those smaller subproblems you are generalisably solving are actually much more interesting. like you could argue the iphone robustly generalises to the future of computing, kinda interesting" }
      ],
      author: {
        name: "@Albert",
        url: "https://x.com/thebison505"
      }
    },
    { 
      url: "https://aftermath.site/log-off-cross-intro", 
      title: "Log Off: Why Posting And Politics (Almost) Never Mix - Aftermath",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M6 8H10M8 6V10' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
      note: [
        { text: "Social media's illusion of change. The article argues that social media creates an illusion of collective action, leading users to mistake online engagement for meaningful political change." }
      ],
      author: {
        name: "misha",
        url: "https://x.com/misha"
      }
    },
    { 
      url: "https://www.organism.earth/library/document/my-view-of-the-world", 
      title: "My View of the World - Erwin Schrödinger",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M4 8H12' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
      note: [
        { text: "a hanuman devotee mentioned this to me yesterday" },
        { text: "schrödingers view of the world he references the vedas" }
      ],
      author: {
        name: "misha",
        url: "https://x.com/mishaderidder"
      }
    },
    {
      url: "https://www.diggers.org/free_print_shop.htm",
      title: "Free Print Shop",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M4 8H12' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
      note: [
        { text: "the digger&apos;s free print shop and newspaper (kaliflower); og communal hippie stuff." }
      ],
      author: {
        name: "catherine",
        url: "https://x.com/cath_land"
      }
    },
    {
      url: "https://www.thecatholicthing.org/2025/02/16/spiritual-and-religious/",
      displayUrl: "thecatholicthing.org",
      title: "Spiritual AND Religious - The Catholic Thing",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M4 4H12V12H4V4Z' fill='white'/%3E%3C/svg%3E",
      note: [
        { text: "A link from a family friend who is an anglican priest who would love for me to become a Christian (it might happen tbh, I find the whole thing fascinating)." },
        { text: "Those who prefer their personal spirituality over religion are quick to identify the multiplicity of religions, and their sins, as signs that they are better off on their own. But critically, the individual is destined to reproduce these same problems on the micro level and will only, therefore, succeed in worshipping himself.", isQuote: true },
        { text: "I found this argument compelling." }
      ],
      author: {
        name: "@pieratt",
        url: "https://x.com/pieratt"
      }
    },
    {
      url: "https://en.wikipedia.org/wiki/Quine_(computing)",
      title: "Quine (computing) - Wikipedia",
      favicon: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='3' fill='%23171717'/%3E%3Cpath d='M4 8L8 4L12 8L8 12L4 8Z' fill='white'/%3E%3C/svg%3E",
      note: [
        { text: "For amusement, programmers sometimes attempt to develop the shortest possible quine in any given programming language.", isQuote: true },
        { text: "produces a copy of its own source code as its only output", isQuote: true },
        { text: "both elegant and slightly depressing?"},
        { text: "note that I got this from https://x.com/sdvim who built https://sdv.wtf/ which is &apos;a self-printing CSS page&apos; and who corrected me about the proper term when I suggested it was recursive." }
      ],
      author: {
        name: "@pieratt",
        url: "https://x.com/pieratt"
      }
    },
  ];

  const handleBlockClick = (index: number, e: React.MouseEvent) => {
    // Don't expand if clicking the URL link
    const target = e.target as HTMLElement;
    if (target.closest('a')) {
      return;
    }
    
    setOpenIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const parseTextWithUrls = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <Link 
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-[#cbc5a3] transition-colors duration-200 text-xs uppercase"
          >
            {part}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-4">
      <p className={SECONDARY_TEXT}>
        <span className="text-[#cbc5a3] font-dm-sans">Week Link I </span><br />
        <span className="text-[#cbc5a3] font-dm-sans">"What's the last tab you had open and what were you reading about?"</span>
      </p>

      <div className="font-inconsolata text-xs space-y-4">
        <div className="grid grid-cols-[100px,1fr] gap-x-4 gap-y-2 text-[#cbc5a3]/70">
          <span>question by</span>
          <Link href="https://x.com/chelsea" target="_blank" rel="noopener noreferrer" className="text-[#cbc5a3]/70 hover:text-[#cbc5a3] transition-colors duration-200">@chelsea</Link>

          <span>urls</span>
          <span className="text-[#cbc5a3]">{links.length}</span>

          <span>users</span>
          <span className="text-[#cbc5a3]">7</span>

          <span>date post</span>
          <span className="text-[#cbc5a3]">2/28-3/9/25</span>

          <span className="self-start">urls</span>
          <div className="space-y-1">
            {links.map((link, index) => (
              <div key={link.url} className="relative">
                <div 
                  onClick={(e) => handleBlockClick(index, e)}
                  className={`block bg-[#0b0713]/40 rounded px-3 py-2 transition-colors duration-200 cursor-pointer ${
                    hoveredIndex === index ? 'bg-[#0b0713] ring-1 ring-[#cbc5a3]/20' : ''
                  } ${
                    openIndices.includes(index) 
                      ? 'bg-[#0b0713] ring-1 ring-[#cbc5a3]/20' 
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center whitespace-nowrap overflow-hidden">
                    <span className={`font-inconsolata text-sm text-[#cbc5a3]/70 transition-colors duration-200 shrink-0 ${hoveredIndex === index ? 'text-[#cbc5a3]' : ''}`}>
                      {link.url.split('/')[2].replace('www.', '')}
                    </span>
                    <span className="font-inconsolata text-sm text-[#cbc5a3] truncate ml-3">
                      {link.title}
                    </span>
                  </div>

                  <div 
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndices.includes(index)
                        ? 'max-h-[500px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="mt-3 bg-[#0b0713]/40 rounded p-5 space-y-3 -mx-3">
                      <Link 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-white/90 hover:text-[#cbc5a3] transition-colors duration-200 font-inconsolata text-xs uppercase block"
                      >
                        {link.url}
                      </Link>
                      {link.note.map((paragraph, i) => (
                        <p 
                          key={i} 
                          className={`text-[#cbc5a3]/90 font-dm-sans text-[15px] leading-[1.4] ${paragraph.isQuote ? 'pl-4 border-l border-[#cbc5a3]/20' : ''}`}
                        >
                          {paragraph.isQuote ? `"${paragraph.text}"` : parseTextWithUrls(paragraph.text)}
                        </p>
                      ))}
                      <p className="text-[#cbc5a3]/90 font-dm-sans text-[15px] leading-[1.4]">
                        — {link.author.url ? (
                          <Link href={link.author.url} target="_blank" rel="noopener noreferrer" className="text-[#cbc5a3]/70 hover:text-[#cbc5a3] transition-colors duration-200">
                            {link.author.name}
                          </Link>
                        ) : (
                          <span className="text-[#cbc5a3]/90">{link.author.name}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 