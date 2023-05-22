import React from "react"
import Quiz from "./quiz_lesson_three"
import vowels from "../vowels"
import consonants from "../consonants"
export default function LessonThree() {
    return (
        <div className="lesson">
            <p>Time to test your <span className="sanskrit">संस्कृत</span>(sanskrit) skills! Click the blue audio box to here the audio. Then figure out which letter matches the audio. You can answer as many questions as you want and check your score in the bottom.</p>

            <div className="quiz">
                <Quiz array={consonants.concat(vowels)} key={1} />
            </div>
        </div>
    )
}