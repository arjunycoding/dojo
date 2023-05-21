import React from "react"
import LetterBtn from "./letter_button";
import "../App.css"
import consonants from "../consonants";
export default function LessonOne() {
    const [current_letter, set_current_letter] = React.useState(false)
    return (
        <div>
            Similar to English Sanskrit also has vowels, and consonants. Click on a consonant to look at it more in detail. Click on the huge letter to here it! However, don't be overwhelmed by the amount of consonants. Don't worry! With constant practice and dedication you will learn them in no time!
            <div>

                {consonants.map((letter) => {
                    return (<button key={letter.letter} onClick={() => { set_current_letter(letter) }}>{letter.letter}</button>)
                })}
            </div>
            <div>
                {current_letter ?
                    <LetterBtn symbol={current_letter.letter} audio_file={current_letter.fileName} huge={true} /> :
                    <p>Please Select A Letter</p>
                }
            </div>
        </div >
    )
}