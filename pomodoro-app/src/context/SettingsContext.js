import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {

const [startAnimate , setStartAnimate] = useState(false);
const [clock , setClock] = useState(0);
const [execute , setExecute] = useState({});

function startTimer(){
    setStartAnimate(true);
}

function pauseTimer(){
    setStartAnimate(false);
}

function stopTimer(){
    setStartAnimate(false);
}

const SettingsBtn = () => {
    setExecute({});
    setClock(0);
}

function setCurrentTimer(activeState){
    updateExecute({
        ...execute,
        active: activeState
    });
    setTimerTime(execute);
}

const updateExecute = (updatedSettings) => {
    setExecute(updatedSettings);
    setTimerTime(updatedSettings);
}

const setTimerTime = evaluate => {
    switch(evaluate.active){
        case 'work':
            setClock(evaluate.work);
            break;

        case 'short':
            setClock(evaluate.short);
            break;

        case 'long':
            setClock(evaluate.long);
            break;

        default: 
            setClock(0);
            break;
    }
}

    const children = ({remainingTime}) => {
        const min = Math.floor(remainingTime/60);
        const sec = remainingTime%60;

        return `${min}:${sec}`;
    }

    return (
        <SettingsContext.Provider value={{
            stopTimer,
            updateExecute,
            startAnimate,
            clock,
            execute,
            startTimer,
            pauseTimer,
            SettingsBtn,
            setCurrentTimer,
            updateExecute,
            children
            }}>
            {props.children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;