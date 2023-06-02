import React from "react"
import Quiz from "./quiz_lesson_four"
import vowels from "../vowels"
import consonants from "../consonants"
export default function LessonThree() {
    const array = consonants.concat(vowels)
    return (
        <div className="lesson">
            <p>
                In this quiz, select an audio from the provided options which match the letter at the top.
            </p>
            <div className="quiz">
                <Quiz array={array} key={1} />
            </div>
        </div>
    )
}