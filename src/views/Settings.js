import React from "react";
import { Link } from "react-router-dom"
import Context from "../context";

export default function Settings() {
  const {token, setToken} = React.useContext(Context)
  const [saved, setSaved] = React.useState(false)

  function saveToken(event) {
    event.preventDefault();
    setToken(event.target.value)

    showSuccess()
  }

  function showSuccess() {
    setSaved(true);

    setInterval(() => {
      setSaved(false)
    }, 5000)
  }

  return (
      <div>
        <Link to="/home">Home</Link>
        <hr/>
        {saved &&
        <div className="alert alert-success" role="alert">
          Token успешно сохранен
        </div>}

        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="token">API Token</span>
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
