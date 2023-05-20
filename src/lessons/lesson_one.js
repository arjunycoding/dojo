import React from "react"
import LetterBtn from "./letter_button";
import consonants from "../consonants";
import vowels from "../vowels";
export default function LessonOne() {

    function end_of_line(letter) {
        const ending_letters = ["ङ", "ञ", "ण", "न", "म", "व", "ह", "त्र", "ऊ",]
        for (let i = 0; i < ending_letters.length; i++) {
            if (ending_letters[i] === letter) {
                return true
            }
        }

    }
    return (
        <div>
            <h1>Lesson 1: Vowels & Consonants</h1>
            <p>In this lesson you will learn how to write and say all of the vowels and consonants</p>
            <h3>Vowels:</h3>
            {vowels.map(letter => (
                <LetterBtn key={letter.letter} symbol={letter.letter} audio_file={letter.fileName} add_break={end_of_line(letter.letter)} />
            ))}
            <h3>Consonants:</h3>
            {consonants.map(letter => (
                <LetterBtn key={letter.letter} symbol={letter.letter} audio_file={letter.fileName} add_break={end_of_line(letter.letter)} />

            ))}
        </div>
    )
}