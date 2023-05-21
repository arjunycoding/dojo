import React from "react"
import LetterBtn from "./letter_button";
import consonants from "../consonants";
import vowels from "../vowels";
export default function LessonOne() {

    const [current_selected_section, set_current_selected_section] = React.useState("")
    const [current_selected_letter, set_current_selected_letter] = React.useState("")
    const [current_selection_info, set_current_selection_info] = React.useState("")
    function get_letter_info(letter, array) {
        let index_of_info = 0
        array.findIndex(function (item, i) {
            if (item.letter === letter) {
                index_of_info = i
            }
        });
        return array[index_of_info]

    }
    function handle_change(event) {
        const array = current_selected_section === "consonants" ? consonants : vowels
        set_current_selected_letter(event.target.value)
        set_current_selection_info(get_letter_info(event.target.value, array))

    }
    const all_consonants = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ळ", "क्ष", "ज्ञ", "त्र"]
    const all_vowels = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"]
    return (
        <div>
            <h1>Lesson 1: Vowels & Consonants</h1>
            <p>In this lesson you will learn how to write and say all of the vowels and consonants. Simply chose a letter in the dropdown and click the letter</p>
            <select value={current_selected_section} onChange={(event) => {
                set_current_selected_section(event.target.value)
            }} name="vowels" id="vowels">
                <option key="consonants" value="consonants">Consonants</option>
                <option key="vowels" value="vowels">Vowels</option>

            </select>

            {current_selected_section === "vowels" ?

                (<div>
                    <select value={current_selected_letter} onChange={handle_change} name="vowels" id="vowels">
                        <option key="none-selected" value="none-selected">Choose A Vowel</option>
                        {vowels.map(letter => (
                            <option key={letter.letter} value={letter.letter}>{letter.letter}</option>
                        ))}
                    </select>
                </div>)
                :
                <div>
                    <select value={current_selected_letter} onChange={handle_change} name="vowels" id="vowels">
                        <option key="none-selected" value="none-selected">Choose A Consonant</option>
                        {consonants.map(letter => (
                            <option key={letter.letter} value={letter.letter}>{letter.letter}</option>
                        ))}
                    </select>
                </div>

            }
            <LetterBtn symbol={current_selection_info.letter} audio_file={current_selection_info.fileName} />
        </div>
    )
}