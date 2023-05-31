import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
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
    } else if (props.large_audio_btn) {
        return (<span className="hidden_letter_button large_audio_btn" onClick={() => { play_audio() }}>
            <FontAwesomeIcon icon={faVolumeHigh} size="1x" />
        </span >)
    } else if (props.audio_btn) {
        return (<span className="hidden_letter_button" onClick={() => { play_audio() }}>
            <FontAwesomeIcon icon={faVolumeHigh} size="1x" />
        </span >)
    } else if (props.huge) {
        return (<button className="letter_button_huge" onClick={() => { play_audio() }}>{props.symbol}</button>)

    } else if (props.answer) {
        return (<button className="letter_button_select" onClick={() => { play_audio() }}>{props.symbol}</button>)
    }
    return (
        <button className="letter_button" onClick={() => { play_audio() }}>{props.symbol}</button>
    )
}