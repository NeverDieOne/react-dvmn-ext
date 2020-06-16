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
        {/*<div>*/}
        {/*  <div className="row">*/}
        {/*    <div className="col"/>*/}
        {/*    <div className="col-5">*/}
        {/*      <div className="input-group mb-3">*/}
        {/*        <input type="text" className="form-control" value={currentStepNumber}*/}
        {/*               aria-label="page" aria-describedby="page" onChange={event => changeLesson(event.target.value)}*/}
        {/*        />*/}
        {/*        <div className="input-group-append">*/}
        {/*          <span className="input-group-text" id="page"> из {lesson.steps.length} шагов</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col"/>*/}
        {/*  </div>*/}
        {/*</div>*/}

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