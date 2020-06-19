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

        <div className="row">
          <div className="col">
            <button className="btn btn-light btn-sm btn-block" onClick={prev}
                    disabled={currentStepNumber === 1}>
              <i className="fas fa-arrow-circle-left fa-2x"/>
            </button>
          </div>

          <div className="col">
            <h5 className="card-title" style={{textSize: "10px"}}>{currentStep.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Шаг {currentStepNumber}/{lesson.steps.length}</h6>
          </div>

          <div className="col">
            <button className="btn btn-light btn-sm btn-block" onClick={next}
                    disabled={currentStepNumber === lesson.steps.length}>
              <i className="fas fa-arrow-circle-right fa-2x"/>
            </button>

          </div>
        </div>
        <hr style={{marginTop: "0px"}}/>

        <StepItem step={currentStep}/>
      </div>
  )
}

export default LessonDescription