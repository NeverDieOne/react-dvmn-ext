import React from 'react';
import LessonsList from "./components/LessonsList";

function App() {
  const lessons = [
    {title: 'Django', name: 'django', steps: []},
    {title: 'Чат боты', name: 'chat-bots', steps: []},
    {title: 'Асинхронный питон', name: 'async-python', steps: []}
  ]


  return (
    <div className="wrapper">
      <h1>Devman Lessons</h1>
      <hr/>
      <LessonsList lessons={lessons} />
      <hr/>
    </div>
  );
}

export default App;
