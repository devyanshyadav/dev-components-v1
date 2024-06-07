"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import DevEmojiPicker from "@/app/Preview_components/EmojiPickers/DevEmojiPicker";
import EmojiPickersInfo from "@/app/Preview_components/EmojiPickers/EmojiPickersInfo";

const page = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  return (
    <ComponentPreview
      component_name={EmojiPickersInfo[0].title}
      component_details={EmojiPickersInfo[0].details}
      component_usage_code={EmojiPickersInfo[0].usage_code}
      component_preview={
        <div>
          <p className="text-cyan-400">Selected emoji: {selectedEmoji}</p>
          <DevEmojiPicker setSelectedEmoji={setSelectedEmoji} />
        </div>
      }
      component_code={EmojiPickersInfo[0].code}
      component_packages={EmojiPickersInfo[0].packages}
    />
  );
};

export default page;
