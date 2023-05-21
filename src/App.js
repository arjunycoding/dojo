import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LessonOne from "./lessons/lesson_one";
import LessonTwo from "./lessons/lesson_two";
import LessonThree from "./lessons/lesson_three";
import LessonFour from "./lessons/lesson_four";
import WelcomeMessage from "./welcome_message"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
          <LessonTwo />
        </Tab>
        <Tab eventKey="Guess The Letter" title="Guess The Letter">
          <LessonThree />
        </Tab>
        <Tab eventKey="Guess The Audio" title="Guess The Audio">
          <LessonFour />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
