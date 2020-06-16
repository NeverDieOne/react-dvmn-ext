import React from 'react';
import LessonsList from "./components/LessonsList";
import LessonDescription from "./components/LessonDescription";
import Context from "./context";

function App() {
  const [lessons, setLessons] = React.useState()
  const [currentLesson, setCurrentLesson] = React.useState()

  React.useEffect(() => {
    fetch("http://127.0.0.1:5000/api/lessons")
        .then(response => response.json())
        .then(lessons => {
          setLessons(lessons)
        })
  })

  return (
      <Context.Provider value={{setCurrentLesson}}>
        <div className="wrapper">
          <h1>Devman Lessons</h1>
          <hr/>
          {lessons ? <LessonsList lessons={lessons}/> : <p>У вас нет доступных уроков</p>}
          <hr/>
          {currentLesson ? <LessonDescription lesson={currentLesson}/> : <p>Не выбран ни один урок</p>}
        </div>
      </Context.Provider>
  );
}

export default App;
