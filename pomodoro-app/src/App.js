import Settings from "./components/Settings";
import Animation from "./components/Animation";
import { useContext, useEffect } from "react";
import { SettingsContext } from "./context/SettingsContext";
import Button from "./components/Button";


function App() {

  const {clock , execute , setCurrentTimer , SettingsBtn , children , startAnimate , startTimer , pauseTimer , updateExecute} = useContext(SettingsContext);

  useEffect(()=> updateExecute(execute) , [execute , startAnimate])

  return (
    <div className="app">
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      {clock == 0 ? 
      <Settings /> : 
      <>
      <ul className="labels">
        <li>
          <Button
          title="Work"
          activeClass={execute.active === 'work' ? 'active-label' : undefined}
          callback={() => setCurrentTimer('work')}
          ></Button>
        </li>
        <li>
          <Button
          title="Short Break"
          activeClass={execute.active === 'short' ? 'active-label' : undefined}
          callback={() => setCurrentTimer('short')}
          ></Button>
        </li>
        <li>
          <Button
          title="Long Break"
          activeClass={execute.active === 'long' ? 'active-label' : undefined}
          callback={() => setCurrentTimer('long')}
          ></Button>
        </li>
      </ul>
      <Button title="Settings" callback = {SettingsBtn}></Button>
      <div className = "time-container">
        <div className="time-wrapper">
        <Animation
        key={clock}
        timer={clock}
        animate={startAnimate}
        >
          {children}
        </Animation>
        </div>
      </div>
      <div className="button-wrapper">
        <Button title="Start" className={!startAnimate && 'active'} callback={startTimer}/>
        <Button title="Pause" className={startAnimate && 'active'} callback={pauseTimer}/>
      </div>
      </>
    }   
    </div>
  );
}

export default App;
