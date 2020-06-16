import React from "react";
import Context from "../context";


function LessonItem({lesson}) {
  const {setCurrentLesson} = React.useContext(Context)

  function loadLesson(name) {
    fetch(`http://127.0.0.1:5000/api/lessons/${name}`)
        .then(response => response.json())
        .then(lesson => {
          setCurrentLesson(lesson)
        })
  }

  return (
      <button type="button" className="btn btn-secondary btn-sm mr-1" onClick={() => loadLesson(lesson[0])}>{lesson[1]}</button>
  )
}


export default LessonItem
