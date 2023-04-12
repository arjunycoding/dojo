import React from "react";

export default function Quiz(props) {
    function generate_random_question() {
        let question = []
        let copy_of_letters = [...props.array]
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * copy_of_letters.length)
            let value = copy_of_letters[index].letter
            question.push(value)
            copy_of_letters = copy_of_letters.filter(function (letter) {
                return letter !== copy_of_letters[index];
            })
            console.log(copy_of_letters)
        }
        return question
    }
    const question1 = generate_random_question()
    return (
        <div>
            {question1}
        </div>
    )
}