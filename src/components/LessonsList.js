import React from "react";
import LessonItem from "./LessonItem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}


export default function LessonsList(props) {
  return (
      <ul style={styles.ul}>
        { props.lessons.map(lesson => {
          return <LessonItem lesson={lesson} key={lesson.name}/>
        }) }
      </ul>
  )
}
