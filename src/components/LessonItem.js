import React from "react";
import PropTypes from "prop-types";


function LessonItem({lesson}) {
  return (
      <li>{lesson.title}</li>
  )
}

LessonItem.propTypes = {
  lesson: PropTypes.object.isRequired
}

export default LessonItem
