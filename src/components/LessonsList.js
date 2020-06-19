import React from "react";
import LessonItem from "./LessonItem";

function LessonsList({lessons, token}) {
  if (token) {
  return (
      <div>
        {lessons.lessons.map(lesson => {
          return <LessonItem lesson={lesson} key={lesson[0]}/>
        })}
      </div>
  )}
  return (
      <div className="alert alert-warning" role="alert">
        Введите Token на странице Settings
      </div>
  )
}



export default LessonsList
