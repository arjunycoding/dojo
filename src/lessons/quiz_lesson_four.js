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
            if (props.answer !== props.correct_answer) {
                if (get_question_correct === false) {
                    set_get_question_correct("false")
                } else {
                    set_get_question_correct(false)
                }
                return false
            }
        }
        const answer_file_name = props.array.filter(function (letter) { return letter.letter === props.answer })
        return (
            <LetterBtn symbol={props.answer} audio_file={answer_file_name[0].fileName} audio_btn={true} on_click={check_answer} />
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
                    : (get_question_correct === false || get_question_correct === "false")
                        ? < p >
                            < span > INCORRECT, the right answer was:<br /> <LetterBtn symbol={current_question[1]} audio_file={current_question[0]} /></span><br />
                            <button onClick={() => {
                                set_current_question(generate_random_question())
                                set_get_question_correct("hide")
                            }}>next question</button>
                        </p>
                        :
                        <div>
                            {current_question[1]}
                            {wrong_answers.map(answer => (
                                <Option key={(Math.random() * 10000000000000000000000000)} answer={answer} correct_answer={current_question[1]} array={props.array} />
                            ))}
                        </div>
                }
                score: {right_answers} /{total_questions}<br /> <br />
            </div >
        </div >
    )
}