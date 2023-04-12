import React from "react"
import Quiz from "./quiz"
import vowels from "../vowels"
export default function LessonThree() {
    return (
        <div>
            <h1>Lesson 3: Quiz Time!!!</h1>
            <div>
                <p>Let's see how much sanskrit <i>you</i> know</p>
                <p>It's simple I will give you an audio and you have to use your ninja skills to figure decipher what letter it is</p>
                <p>Answer 15 question and you are on your first step to becoming a black belt in sanskrit</p>
                <Quiz array={vowels} />
            </div>
        </div>
    )
}