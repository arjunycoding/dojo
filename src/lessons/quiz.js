import React from "react";
import LetterBtn from "./letter_button";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Quiz(props) {
    const [get_question_correct, set_get_question_correct] = React.useState("hide")

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {


            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    function Option(props) {
        function check_answer() {
            if (props.answer === props.correct_answer) {
                if (get_question_correct === true) {
                    set_get_question_correct("true")
                } else {
                    set_get_question_correct(true)
                }
                return true
            }
            if (get_question_correct === false) {
                set_get_question_correct("false")
            } else {
                set_get_question_correct(false)
            }
            return false
        }
        return (
            <button onClick={check_answer}>{props.answer}</button>
        )
    }
    function generate_random_question() {
        const question = []
        let copy_of_letters = [...props.array]
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * copy_of_letters.length)
            let value = copy_of_letters[index].letter
            question.push(value)
            copy_of_letters.filter(function (letter) {
                return letter !== copy_of_letters[index];
            })
        }
        const correct_answer = props.array.filter(function (letter) { return letter.letter === question[0] });
        return [
            correct_answer[0].fileName,
            correct_answer[0].letter,
            question[0],
            question[1],
            question[2],
            question[3]
        ]
    }
    let question = generate_random_question()
    function set_question() {
        question = generate_random_question()
    }
    const wrong_answers = shuffle([...question].slice(2))
    return (
        <div>
            <ProgressBar now={45} />
            <LetterBtn key={1} audio_file={question[0]} hidden={true} />
            {wrong_answers.map(answer => (
                <Option key={(Math.random() * 10000000000000000000000000)} answer={answer} correct_answer={question[1]} />
            ))}
            {(get_question_correct === true || get_question_correct === "true")
                ? <p>
                    <span>CORRECT!!!! Good Job</span>
                    <button onClick={set_question}>next question</button>
                </p>
                : (get_question_correct === "hide")
                    ? ""
                    :
                    <p>
                        <span>INCORRECT, the right answer was {question[1]}</span>
                        <button onClick={set_question}>next question</button>
                    </p>
            }
        </div >
    )
}