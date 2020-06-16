import React from "react";
import StepItem from "./StepItem";

function LessonDescription({lesson}) {
  const [currentStepNumber, setCurrentStepNumber] = React.useState(1)
  const [currentStep, setCurrentStep] = React.useState(
      lesson.steps[currentStepNumber - 1]
  )

  React.useEffect(() => {
    setCurrentStep(lesson.steps[currentStepNumber - 1])
  }, [currentStepNumber, lesson])

  React.useEffect(() => {
    setCurrentStepNumber(1)
  }, [lesson])

  function next() {
    setCurrentStepNumber(currentStepNumber + 1)
    setCurrentStep(lesson.steps[currentStepNumber])
  }

  function prev() {
    setCurrentStepNumber(currentStepNumber - 1)
    setCurrentStep(lesson.steps[currentStepNumber - 2])
  }


  return (
      <div>
        <h5>
          Текущий урок - {lesson.name}
        </h5>
        <hr/>
        <p>Вы на {currentStepNumber} шаге из {lesson.steps.length}</p>
        <hr/>

        <StepItem step={currentStep}/>

        <div className="row">
          <div className="col-3"/>
          <div className="col">
            <button className="btn btn-secondary btn-sm btn-block" onClick={prev}
                    disabled={currentStepNumber === 1}
            >Prev
            </button>
          </div>

          <div className="col">
            <button className="btn btn-secondary btn-sm btn-block" onClick={next}
                    disabled={currentStepNumber === lesson.steps.length}
            >Next
            </button>
          </div>
          <div className="col-3"/>
        </div>


      </div>
  )
}

export default LessonDescription