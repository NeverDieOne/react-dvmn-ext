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
              <i className="fa fa-arrow-circle-left fa-2x" aria-hidden="true"/>
            </button>
          </div>

          <div className="col-8">
            <h6 className="card-title" style={{textSize: "10px"}}>{currentStep.title}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Шаг {currentStepNumber}/{lesson.steps.length}</h6>
          </div>

          <div className="col ">
            <button className="btn btn-light btn-sm btn-block" onClick={next}
                    disabled={currentStepNumber === lesson.steps.length}>
              <i className="fa fa-arrow-circle-right fa-2x" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <hr style={{marginTop: "0px"}}/>

        <StepItem step={currentStep}/>
      </div>
  )
}

export default LessonDescription