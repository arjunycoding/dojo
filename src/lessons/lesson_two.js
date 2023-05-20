import React from "react"
import Quiz from "./quiz_lesson_two"
import vowels from "../vowels"
import consonants from "../consonants"
export default function LessonThree() {
    return (
        <div>
            <h1>Lesson 3: Quiz Time!!!</h1>
            <div>
                <p>Let's see how much sanskrit <i>you</i> know</p>
                <p>It's simple I will give you an audio and you have to use your ninja skills to decipher what letter it is</p>
                <p>You can check your score at the bottom of the quiz. However, we advice you to move on only after you have answered more than 20 question correctly. Feel free to come back here any time and review your sanskrit skills again!</p>
                <div className="quiz">
                    <Quiz array={consonants.concat(vowels)} key={1} />
                </div>
            </div>
        </div>
    )
}