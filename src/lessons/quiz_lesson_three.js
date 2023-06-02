import React from "react";
import LetterBtn from "./letter_button";
import { Button } from "react-bootstrap";

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
            <button className="sanskrit medium_font option_quiz_lesson_three" onClick={check_answer}>{props.answer}</button>
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
                if (letter === copy_of_letters[index]) {
                    copy_of_letters.splice(index, 1)
                }
                return ""
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
                    ? <div className="quiz_lesson_four_question">


                        <span>CORRECT!!!! Good Job</span><br /><br />
                        <Button variant="primary" onClick={set_question} className="next_question">next question</Button>
                    </div>
                    : (get_question_correct === "hide")
                        ? <div className="quiz_lesson_four_question">
                            <h5>Click the Blue Box To Play Audio, Then Identify The Letter:</h5><br />
                            <LetterBtn key={1} audio_file={current_question[0]} large_audio_btn={true} />
                            <br />
                            <br />
                            {wrong_answers.map(answer => (
                                <Option key={answer} answer={answer} correct_answer={current_question[1]} />
                            ))}
                            <br />
                            <br />
                            Score: {total_questions ? (right_answers + "/" + total_questions) : <span className="none_selected small_font">No Questions Answered</span>}<br /> <br />
                        </div>
                        :
                        <div className="quiz_lesson_four_question">

                            INCORRECT, the right answer was:<br />
                            <button className="sanskrit medium_font option_quiz_lesson_three"> <LetterBtn symbol={current_question[1]} audio_file={current_question[0]} answer={true} /></button>
                            <br />
                            <Button variant="primary" className="next_question" onClick={() => {
                                set_current_question(generate_random_question())
                                set_get_question_correct("hide")
                            }}>next question</Button>
                        </div>
                }
            </div>
        </div >
    )
}