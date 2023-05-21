import React from "react"
import LetterBtn from "./letter_button";
import consonants from "../consonants";
import vowels from "../vowels";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function LessonOne() {
    const [current_letter, set_current_letter] = React.useState("No Letter Selected")
    return (
        <div>
            <div>
                <button onClick={() => { set_current_letter("letter") }}>letter.letter</button>

                {vowels.map((letter) => {
                    <button key={letter.letter} onClick={() => { set_current_letter(letter) }}>{letter.letter}</button>
                })}
            </div>
            <div><LetterBtn symbol={current_letter.letter} audio_file={current_letter.fileName} /></div>
        </div>
    )
}