import React from "react";
import LessonItem from "./LessonItem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}


function LessonsList({lessons}) {
  return (
      <ul style={styles.ul}>
        {lessons.lessons.map(lesson => {
          return <LessonItem lesson={lesson} key={lesson[0]}/>
        })}
      </ul>
  )
}



export default LessonsList
