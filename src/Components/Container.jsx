import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constatnts";

const Container = () => {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    ins: INSTAGRAM_MAX_CHARACTERS - text.length,
    face: FACEBOOK_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
