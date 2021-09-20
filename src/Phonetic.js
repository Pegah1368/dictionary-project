import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span>
      <br />
      <audio controls className="audio-controls">
        <source src={props.phonetic.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
