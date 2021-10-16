import { useContext, useState, useEffect } from "react"
import { popupContext } from "./context/PopupContext"

import '../styles/FeedbackPopup.scss'

export function Popup() {
    const { closePopup, closeAutomaticallyPopup, message } = useContext(popupContext)
    
    const timeToClosePopup = 6000
    const [ time, setTime ] = useState(timeToClosePopup)
    const [ progress, setProgress ] = useState(100)

    const stopProgressBar = setInterval(() => {
        setTime(time - 1)

    }, 1)

    useEffect(() => {
        const unsubscribe = () => setProgress((time * 100) / timeToClosePopup)

        return unsubscribe()
    }, [time])

    if(time === 0) {
        clearInterval(stopProgressBar)
        closePopup()
        setTime(timeToClosePopup)
    }

    // closeAutomaticallyPopup(timeToClosePopup)

    return (
        <div className="container">
            <div className="popup-feedback">
                <button onClick={closePopup}>
                    <span>x</span>
                </button>
               <p>{ message }</p>
               <div className="progressBar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}