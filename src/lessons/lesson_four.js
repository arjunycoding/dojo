import React from "react"
import Quiz from "./quiz_lesson_four"
import vowels from "../vowels"
import consonants from "../consonants"
export default function LessonThree() {
    const array = consonants.concat(vowels)
    return (
        <div className="lesson">
            <p>
                Now, in this quiz I am going give you an letter and you will have to figure out which audio it belongs to.
            </p>
            <div className="quiz">
                <Quiz array={array} key={1} />
            </div>
        </div>
    )
}