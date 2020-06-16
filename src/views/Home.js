import React from 'react';
import LessonsList from "../components/LessonsList";
import LessonDescription from "../components/LessonDescription";
import Context from "../context";
import Loader from "../components/Loader";

import { Link } from "react-router-dom"

function Home() {
  const [lessons, setLessons] = React.useState()
  const [currentLesson, setCurrentLesson] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("http://127.0.0.1:5000/api/lessons")
        .then(response => response.json())
        .then(lessons => {
          setLessons(lessons)
          setLoading(false)
        })
        .catch(err => console.log(err))
  }, [])


  return (
      <Context.Provider value={{setCurrentLesson}}>
        <div>
          {loading ? <Loader/> : <LessonsList lessons={lessons}/>}
          <hr/>
          {currentLesson ? <LessonDescription lesson={currentLesson}/> : <p>Не выбран ни один урок</p>}

          <Link to="/settings">HUI</Link>

        </div>
      </Context.Provider>
  );
}

export default Home;
