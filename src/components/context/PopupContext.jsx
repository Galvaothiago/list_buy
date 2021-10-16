import { useState, createContext } from "react"
import { Popup } from "../FeedbackPopup"

export const popupContext = createContext({})

export function PopupProvider({ children }) {
    const [ isClosePopup, setIsClosePopup ] = useState(true)
    const [ message, setMessage ] = useState('')

    const closePopup = () => {
        setIsClosePopup( oldState => !oldState )
    }

    const openPopupWithMessage = (content) => {
        if(!isClosePopup) {
            return
        }

        setIsClosePopup(false)
        setMessage(content)
    }

    const closeAutomaticallyPopup = (time) => {
        if(!isClosePopup) {
            setTimeout(() => {
                setIsClosePopup(true)
            }, time)
        }
    }

    return (
        <popupContext.Provider
            value={{
                closePopup,
                isClosePopup,
                openPopupWithMessage,
                message,
                closeAutomaticallyPopup
            }}
        >
            { !isClosePopup && <Popup /> }
            { children }
        </popupContext.Provider>
    )
}