import React from "react";
import LessonItem from "./LessonItem";

function LessonsList({lessons}) {
  return (
      <div>
        {lessons.lessons.map(lesson => {
          return <LessonItem lesson={lesson} key={lesson[0]}/>
        })}
      </div>
  )
}



export default LessonsList
