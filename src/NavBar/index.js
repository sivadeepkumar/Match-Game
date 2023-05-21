import './index.css'

const NavBar = props => {
  const {score, sixtySecond} = props

  return (
    <nav>
      <div className="nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="app-logo"
          />
        </div>
        <div className="nav-left">
          <p>Score : {score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p>{`${sixtySecond} sec`}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
