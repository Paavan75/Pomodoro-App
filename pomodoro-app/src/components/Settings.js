import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button";

const Settings = () => {

    const {updateExecute} = useContext(SettingsContext);

    const [newTime , SetnewTime] = useState({
        work:0.5,
        short:0.3,
        long:1,
        active:'work'
    });

    function handleChange(event) {
        const { name, value } = event.target;

        switch (name) {
            case 'work': SetnewTime({
                ...newTime,
                work: parseInt(value)
            });
                break;

            case 'shortBreak': SetnewTime({
                ...newTime,
                short: parseInt(value)
            });
                break;

            case 'longBreak': SetnewTime({
                ...newTime,
                long: parseInt(value)
            });
                break;

            default: break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateExecute(newTime);
    }

    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-container">
                    <input className="input" name="work" onChange={handleChange} value={newTime.work} />
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTime.short} />
                    <input className="input" name="longBreak" onChange={handleChange} value={newTime.long} />
                </div>
                <Button title="Set Timer" callback={handleSubmit} />
            </form>
        </div>
    );
}

export default Settings;