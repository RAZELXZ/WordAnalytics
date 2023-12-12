import { useState } from "react";
import { Warning } from "./Warning";

const Textarea = ({ text, setText }) => {
  const [warning, setWarning] = useState("");

  const handelChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarning("No <script> tag is allowed.");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarning("No @ tag is allowed.");
    } else {
      setWarning("");
    }
    setText(newText);
  };

  return (
    <>
      <textarea
        onChange={(e) => {
          handelChange(e);
        }}
        className="textarea"
        placeholder="Enter Your Text..."
        spellCheck="false"
        value={text}
      ></textarea>
      {warning && <Warning warningtext={warning} />}
    </>
  );
};

export default Textarea;
