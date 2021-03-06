import React from "react";
import { Link } from "react-router-dom"
import Context from "../context";

export default function Settings() {
  const {token, setToken} = React.useContext(Context)
  const [saved, setSaved] = React.useState(false)
  const [savedText, setSavedText] = React.useState('')

  function saveToken(event) {
    event.preventDefault();
    setToken(event.target.value)

    localStorage.setItem("dvmnToken", event.target.value)

    if (event.target.value) {
      setSavedText('Токен успешно сохранен')
    } else {
      setSavedText('Токен успешно удален')
      localStorage.removeItem("dvmnCurrentLesson")
      localStorage.removeItem("dvmnToken")
      localStorage.removeItem("dvmnCurrentStepNumber")
    }

    showSuccess(token, event.target.value)
  }

  function showSuccess(oldToken, newToken) {
    if (!(oldToken === newToken)) {
      setSaved(true);

      setInterval(() => {
        setSaved(false)
      }, 5000)
    }
  }

  return (
      <div>
        <Link to="/home">Home</Link>
        <hr/>
        {saved &&
        <div className="alert alert-success" role="alert">
          {savedText}
        </div>}

        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="token">Authorization: Token</span>
            </div>
              <input type="text" className="form-control" aria-label="Token" defaultValue={token}
                     aria-describedby="token" onBlur={(event) => saveToken(event)}/>
          </div>
        </form>
        <hr/>
        <p>Если Вы найдете ошибку - отпишитесь в Telegram: @neverdieone</p>
      </div>
  )
}
