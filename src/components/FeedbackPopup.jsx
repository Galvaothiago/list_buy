import { useContext, useState, useEffect } from "react"
import { popupContext } from "./context/PopupContext"

import '../styles/FeedbackPopup.scss'

export function Popup() {
    const { closePopup, message } = useContext(popupContext)
    
    const timeToClosePopup = 5000
    const [ time, setTime ] = useState(timeToClosePopup)
    const [ progress, setProgress ] = useState(100)

    const relativeProgressToTime = 100 - ((timeToClosePopup - 1) * 100) / timeToClosePopup
    
    const stopProgressBar = setInterval(() => {
        setTime(oldTime => oldTime - 1)
        setProgress(oldProgress => oldProgress - relativeProgressToTime)
    }, 500)

    if(time === 0) {
        clearInterval(stopProgressBar)
        closePopup()
        setTime(timeToClosePopup)
    }

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