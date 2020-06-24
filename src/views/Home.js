import React from 'react';
import LessonsList from "../components/LessonsList";
import LessonDescription from "../components/LessonDescription";
import Context from "../context";
import Loader from "../components/Loader";
import { Link } from "react-router-dom"

function Home() {
  const [lessons, setLessons] = React.useState()
  const [currentLesson, setCurrentLesson] = React.useState(
      JSON.parse(localStorage.getItem("dvmnCurrentLesson"))
  )
  const [loading, setLoading] = React.useState(true)
  const {token} = React.useContext(Context)

  React.useEffect(() => {
    fetch("http://127.0.0.1:5000/api/lessons")
        .then(response => response.json())
        .then(lessons => {
          setLessons(lessons)
          setLoading(false)
        })
        .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    localStorage.setItem("dvmnCurrentLesson", JSON.stringify(currentLesson))
  }, [currentLesson])

  return (
      <Context.Provider value={{setCurrentLesson}}>
        <div>
          <Link to="/settings">Settings</Link>
          <hr/>
          {loading ? <Loader/> : <LessonsList lessons={lessons} token={token}/>}
          <hr/>
          {currentLesson && <LessonDescription lesson={currentLesson}/>}
          {!token && <p>
            Добро пожаловать в расширение для уроков сайта Dvmn.
            Если Вы здесь первый раз и у Вас нет токена, зайдите на <a href="https://dvmn.org/modules/">сайт</a>.
            <br/>
            Если Вы найдете ошибку - отпишитесь в Telegram: @neverdieone
          </p>}
        </div>
      </Context.Provider>
  );
}

export default Home;
