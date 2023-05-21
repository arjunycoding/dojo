import React from "react"
import Quiz from "./quiz_lesson_three"
import vowels from "../vowels"
import consonants from "../consonants"
export default function LessonThree() {
    return (
        <div>
            <h1>Lesson 4: Quiz Time!!!</h1>
            <div>
                <p>Let's see how much sanskrit <i>you</i> know</p>
                <p>Unlike last item this time I will give you a letter and you will have to figure out what it means. Same rules as last time. We also advise you to get 1 question right and then move on</p>
                <p>Also, make sure you are carful. Hovering over an audio will play it!</p>
                <div className="quiz">
                    <Quiz array={consonants.concat(vowels)} key={1} />
                </div>
            </div>
        </div>
    )
}