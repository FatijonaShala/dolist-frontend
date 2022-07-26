import React, { useEffect, useContext } from "react";
import Button from "./Button";
import CountdownAnimation from "./CountdownAnimation";
import SetPomodoro from "./SetPomodoro";
import { SettingsContext } from "../../context/SettingsContext";
import { Container } from "react-bootstrap";

const Timer = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <Container className="container-timer resume py-5 text-center">
      <h3>Pomodoro</h3>
      <small>Be productive the right way.</small>
      {pomodoro !== 0 ? (
        <>
          <ul className="labels">
            <li>
              <Button
                className="timer-button"
                title="Work"
                activeClass={
                  executing.active === "work" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                className="timer-button"
                title="Short Break"
                activeClass={
                  executing.active === "short" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                className="timer-button"
                title="Long Break"
                activeClass={
                  executing.active === "long" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="timer-button-wrapper">
            <Button
              className="timer-button"
              title="Start"
              activeClass={!startAnimate ? "active" : undefined}
              _callback={startTimer}
            />
            <Button
              className="timer-button"
              title="Pause"
              activeClass={startAnimate ? "active" : undefined}
              _callback={pauseTimer}
            />
          </div>
        </>
      ) : (
        <SetPomodoro />
      )}
    </Container>
  );
};

export default Timer;
