import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text-phonetic">{props.phonetic.text}</span>
      <br />
      <audio controls className="audio-controls">
        <source src={props.phonetic.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
