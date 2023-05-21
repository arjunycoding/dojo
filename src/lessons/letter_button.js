import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
export default function LetterBtn(props) {
    function play_audio() {
        new Audio(props.audio_file).play()
    }
    if (props.add_break) {
        return (
            <span>
                <button className="letter_button" onClick={() => { play_audio() }}>{props.symbol}</button>
                <br />
            </span>
        )
    } else if (props.audio_btn) {
        return (<button className="hidden_letter_button" onMouseOver={() => { play_audio() }} onClick={() => { props.on_click() }}></button>)
    } else if (props.huge) {
        <button className="letter_button_huge" onClick={() => { play_audio() }}>{props.symbol}</button>
    }
    return (
        <button className="letter_button" onClick={() => { play_audio() }}>{props.symbol}</button>
    )
}
