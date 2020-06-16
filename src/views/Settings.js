import React from "react";
import { Link } from "react-router-dom"
import Context from "../context";

export default function Settings() {
  const {token, setToken} = React.useContext(Context)

  function saveToken(event) {
    event.preventDefault();
    setToken(event.target.value)
  }


  return (
      <div>
        <Link to="/home">Home</Link>
        <hr/>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="token">API Token</span>
            </div>
              <input type="text" className="form-control" aria-label="Token" defaultValue={token}
                     aria-describedby="token" onChange={(event) => saveToken(event)}/>
          </div>
        </form>

      </div>
  )
}
