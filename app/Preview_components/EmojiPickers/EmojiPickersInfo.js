const EmojiPickersInfo = [
  {
    title: "Dev Emoji Picker",
    details: {
      description:
        "An interactive emoji picker component that enables users to search and select emojis from a categorized list, enhancing communication in applications with a wide range of emojis.",
      features: [
        "Categorized emoji list for easy navigation",
        "Search functionality to quickly find specific emojis",
        "Interactive selection of emojis with visual feedback",
        "Customizable categories for organizing emojis",
      ],
      props: [
        {
          propName: "setSelectedEmoji",
          propExample: "Function",
          propDetail:
            "A callback function passed from the parent component to update the selected emoji.",
        },
      ],
      packages: [
        {
          pckg_name: "search-array",
          pckg_link: "https://www.npmjs.com/package/search-array",
        },
      ],
      doc_links: ["https://github.com/github/gemoji/blob/master/db/emoji.json"],
    },

    usage_code: `
       import DevEmojiPicker from "@/app/dev_components/DevEmojiPicker";
          import React ,{useState} from "react";
          
          const page = () => {
          const [selectedEmoji, setSelectedEmoji] = useState(null);

        return (
              <div>
                <p className="text-cyan-400">Selected emoji: {selectedEmoji}</p>
                <DevEmojiPicker setSelectedEmoji={setSelectedEmoji} />
              </div>
            );
          };
          
          export default page;
              `,
    code: `
        import React, { useState, useEffect } from "react";
        import Emoji from "./Emoji.json";
        // Create Emoji.json file and get all emojis json from https://github.com/github/gemoji/blob/master/db/emoji.json
        import JsonSearch from "search-array";
        import { FiSearch } from "react-icons/fi";
        
        const DevEmojiPicker = ({ setSelectedEmoji }) => {
          const [uniqueCategories, setUniqueCategories] = useState([]);
          const [currentCategory, setCurrentCategory] = useState("Smileys & Emotion");
          const [filteredEmojis, setFilteredEmojis] = useState([]);
          const [hoveredEmoji, setHoveredEmoji] = useState(null);
        
        
          const getData = () => {
            const categories = new Map();
            Emoji.forEach((item) => {
              const { category, emoji } = item;
              if (!categories.has(category)) {
                categories.set(category, { ctgName: category, emoji: emoji });
              }
            });
            setUniqueCategories(Array.from(categories.values()));
          };
        
          const searcher = new JsonSearch(Emoji);
        
          const handleFindEmoji = (e) => {
            const { value } = e.target;
            setFilteredEmojis(searcher.query(value));
          };
          useEffect(() => {
            getData();
          }, []);
        
          return (
            <section className="w-fit  shadow-lg h-72 rounded-xl space-y-2 bg-slate-800 border-cyan-700/50 border p-2 flex flex-col">
              <div className="relative">
                <input
                  type="text"
                  onChange={handleFindEmoji}
                  value={hoveredEmoji && hoveredEmoji}
                  className="w-full p-1 px-2 pl-8 rounded-full bg-cyan-700/30 text-white border border-cyan-400/50 text-sm focus:border-cyan-400 focus:outline-none"
                  placeholder="Search by tag or alias"
                />
                <FiSearch className="absolute top-2 left-2 text-cyan-400" />
              </div>
              <div className="grid grid-cols-9 gap-1 text-cyan-400 bg-cyan-700/30 rounded-full  p-1 text-xl items-center justify-center">
                {uniqueCategories.map((elem, index) => (
                  <button
                    key={index}
                    className="cursor-pointer hover:bg-cyan-700 rounded-full transition-all"
                    onClick={() => {
                      setFilteredEmojis([]);
                      setCurrentCategory(elem.ctgName);
                    }}
                  >
                    {elem.emoji}
                  </button>
                ))}
              </div>
        
              <div className="w-full h-full [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden  items-start content-start justify-start overflow-y-scroll grid grid-cols-9 gap-1 text-xl">
                {!filteredEmojis.length > 0
                  ? Emoji.filter((e, i) => e.category === currentCategory).map(
                      (elem, index) => (
                        <button
                          onClick={() => setSelectedEmoji(elem.emoji)}
                          className="cursor-pointer text-white hover:scale-95 transition-all"
                          onMouseEnter={() =>
                            setHoveredEmoji(elem.emoji + elem.aliases[0])
                          }
                          onMouseLeave={() => setHoveredEmoji(null)}
                          key={index}
                        >
                          {elem.emoji}
                        </button>
                      )
                    )
                  : filteredEmojis.map((elem, index) => (
                      <button
                        onClick={() => setSelectedEmoji(elem.emoji)}
                        className="cursor-pointer text-white hover:scale-95 transition-all"
                        key={index}
                      >
                        {elem.emoji}
                      </button>
                    ))}
              </div>
            </section>
          );
        };
        
        export default DevEmojiPicker;
        `,
  },
];

export default EmojiPickersInfo;
