import React from "react"
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LessonOne from "./lessons/lesson_one";
import LessonTwo from "./lessons/lesson_two";
import LessonThree from "./lessons/lesson_three";
import WelcomeMessage from "./welcome_message"
function App() {
  const [show_lesson_one, set_show_lesson_one] = React.useState(false)
  const [show_lesson_two, set_show_lesson_two] = React.useState(false)
  const [show_lesson_three, set_show_lesson_three] = React.useState(false)

  return (
    <div className="App">
      <WelcomeMessage />
      <div className={show_lesson_one || show_lesson_two || show_lesson_three ? "hide" : "show"}>
        <button onClick={() => { set_show_lesson_one(true) }}>Start Lesson One</button>
        <button onClick={() => { set_show_lesson_two(true) }}>Start Lesson Two</button>
        <button onClick={() => { set_show_lesson_three(true) }}>Start Lesson Three</button>
      </div>
      <div className={show_lesson_one ? "show" : "hide"}>
        <LessonOne />
        <button onClick={() => { set_show_lesson_one(!show_lesson_one) }}>Exit Lesson</button>
      </div>
      <div className={show_lesson_two ? "show" : "hide"}>
        <LessonTwo />
        <button onClick={() => { set_show_lesson_two(!show_lesson_two) }}>Exit Lesson</button>
      </div>
      <div className={show_lesson_three ? "show" : "hide"}>
        <LessonThree />
        <button onClick={() => { set_show_lesson_three(!show_lesson_three) }}>Exit Lesson</button>
      </div>
    </div>
  );
}

export default App;
