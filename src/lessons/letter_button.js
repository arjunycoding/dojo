import React from "react";

export default function LetterBtn(props) {
    function play_audio() {
        new Audio(props.audio_file).play()
    }
    return (
        <button className="letter_button" onClick={() => { play_audio() }}>{props.symbol}</button>
    )
}
