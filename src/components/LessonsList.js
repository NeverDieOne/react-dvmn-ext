import React from "react";
import PropTypes from "prop-types";
import LessonItem from "./LessonItem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}


function LessonsList(props) {
  return (
      <ul style={styles.ul}>
        { props.lessons.map(lesson => {
          return <LessonItem lesson={lesson} key={lesson.name}/>
        }) }
      </ul>
  )
}


LessonsList.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default LessonsList
