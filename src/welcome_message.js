import React from "react"

export default function WelcomeMessage() {
    const [hide, set_hide] = React.useState(false)
    const change_class = () => {
        set_hide(true)
    };
    return (
        <div className={hide ? "hide move_to_front" : "move_to_front"}>
            <h1>Welcome To Dojo!</h1>
            <p>Here, you will enter the training dojo and become a master at sanskrit!</p>
            <button onClick={change_class}>Enter The Dojo</button>
        </div>
    )
}