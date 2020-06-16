import React from "react";
import StepItem from "./StepItem";

function LessonDescription({lesson}) {
  const [currentStepNumber, setCurrentStepNumber] = React.useState(0)
  const [currentStep, setCurrentStep] = React.useState(
      lesson.steps[currentStepNumber]
  )

  function next() {
    setCurrentStepNumber(currentStepNumber + 1)
    setCurrentStep(lesson.steps[currentStepNumber + 1])
  }

  function prev() {
    setCurrentStepNumber(currentStepNumber - 1)
    setCurrentStep(lesson.steps[currentStepNumber - 1])
  }

  return(
      <div>
        <h2>
          {lesson.name}
        </h2>
        <div>
          Вы на {currentStepNumber + 1} шаге из {lesson.steps.length}
          {currentStepNumber === 0 ? <p>Назад низя</p> : <button onClick={prev}>Prev</button>}
          {currentStepNumber + 1 === lesson.steps.length ? <p>Дальше низя</p> : <button onClick={next}>Next</button>}
        </div>
        <StepItem step={currentStep}/>
      </div>
  )
}

export default LessonDescription