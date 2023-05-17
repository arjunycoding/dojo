import React from "react";

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
    } else if (props.hidden) {
        return (<button className="hidden_letter_button" onClick={() => { play_audio() }}></button>)
    } else if (props.audio_btn) {
        return (<button className="hidden_letter_button" onMouseOver={() => { play_audio() }} onClick={() => { props.on_click() }}></button>)
    }
    return (
        <button className="letter_button" onClick={() => { play_audio() }}>{props.symbol}</button>
    )
}
