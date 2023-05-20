import React from "react";
import LetterBtn from "./letter_button";

export default function Quiz(props) {
    const [get_question_correct, set_get_question_correct] = React.useState("hide")
    const [total_questions, set_total_questions] = React.useState(0)
    const [right_answers, set_right_answers] = React.useState(0)
    const [current_question, set_current_question] = React.useState(generate_random_question())
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
            set_total_questions(total_questions + 1)
            if (props.answer === props.correct_answer) {
                if (get_question_correct === true) {
                    set_get_question_correct("true")
                } else {
                    set_get_question_correct(true)
                }
                set_right_answers(right_answers + 1)
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

    function set_question() {
        set_current_question(generate_random_question())
        set_get_question_correct("hide")
    }
    const wrong_answers = shuffle([...current_question].slice(2))
    return (
        <div>
            <div>
                {(get_question_correct === true || get_question_correct === "true")
                    ? <p>

                        <span>CORRECT!!!! Good Job</span>
                        <button onClick={set_question}>next question</button>
                    </p>
                    : (get_question_correct === "hide")
                        ? <div>
                            <LetterBtn key={1} audio_file={current_question[0]} hidden={true} />
                            {wrong_answers.map(answer => (
                                <Option key={(Math.random() * 10000000000000000000000000)} answer={answer} correct_answer={current_question[1]} />
                            ))}
                        </div>
                        :
                        <p>
                            <span>INCORRECT, the right answer was {current_question[1]}</span>
                            <button onClick={set_question}>next question</button>
                        </p>
                }
                score:{right_answers}/{total_questions}
            </div>
        </div >
    )
}