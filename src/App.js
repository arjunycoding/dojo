import React from "react"
import './App.css';
import LessonOne from "./lessons/lesson_one";
import LessonTwo from "./lessons/lesson_two";
import LessonThree from "./lessons/lesson_three";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import LessonFour from "./lessons/lesson_four";
import WelcomeMessage from "./welcome_message"
function App() {
  const [show_lesson_one, set_show_lesson_one] = React.useState(false)
  const [show_lesson_two, set_show_lesson_two] = React.useState(false)
  const [show_lesson_three, set_show_lesson_three] = React.useState(false)

  return (

    <div className="App">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="why" title="Why Sanskrit?">
          <WelcomeMessage />
        </Tab>
        <Tab eventKey="Vowels" title="Vowels">
          <LessonOne />
        </Tab>
        <Tab eventKey="Consonants" title="Consonants">
          <LessonOne />
        </Tab>
        <Tab eventKey="Guess The Letter" title="Guess The Letter">
          <LessonTwo />
        </Tab>
        <Tab eventKey="Guess The Audio" title="Guess The Audio">
          <LessonThree />
        </Tab>
      </Tabs>
      {/* <WelcomeMessage />
      <div className={show_lesson_one || show_lesson_two || show_lesson_three ? "hide" : "show"}>
        <button onClick={() => { set_show_lesson_one(true) }} className="lesson_button"> Lesson One</button>
        <button onClick={() => { set_show_lesson_two(true) }} className="lesson_button"> Lesson Two</button>
        <button onClick={() => { set_show_lesson_three(true) }} className="lesson_button"> Lesson Three</button>

      </div>
      <div className={"lesson " + (show_lesson_one ? "lesson_show" : "lesson_hide")}>
        <LessonOne />
        <button onClick={() => { set_show_lesson_one(!show_lesson_one) }}>Exit Lesson</button>
      </div>
      <div className={"lesson " + (show_lesson_two ? "lesson_show" : "lesson_hide")}>
        <LessonTwo />
        <button onClick={() => { set_show_lesson_two(!show_lesson_two) }}>Exit Lesson</button>
      </div>
      <div className={"lesson " + (show_lesson_three ? "lesson_show" : "lesson_hide")}>
        <LessonThree />
        <button onClick={() => { set_show_lesson_three(!show_lesson_three) }}>Exit Lesson</button>
      </div> */}
    </div>
  );
}

export default App;
