import { useState, createContext } from "react";

export const InputValueContext = createContext({})

export function InputValueProvider({ children }) {
    const [showInput, setShowInput] = useState(true)
    const [ input, setInput ] = useState({})
    const [ textareaInput, setTextareaInput ] = useState({})
    const [ newList, setNewList ] = useState([])
    const [ itemsChecked, setItemsChecked ] = useState([])

    const handleShowInput = () => {
        setShowInput(true)
    }  
    
    const handleShowTextarea = () => {
        setShowInput(false)
    }

    const handleSubmitInput = (e) => {
        e.preventDefault()
        
        if(input.text !== '') {
            setNewList(oldArray => [...oldArray, input])
        }
        setInput({
            text: ''
        })

    }

    const handleSubmitTextareaInput = (e) => {
        e.preventDefault()

        const textTransforted = { ...textareaInput, text: String(textareaInput.text.split('-'))}

        if(textTransforted.text !== '') {

            setNewList(oldArray => [...oldArray, textTransforted])
        }

        setTextareaInput({
            text: ''
        })
    }

    const deleteList = (id, arr, func) => {
        const arrayFiltered = arr.filter(item => id !== item.id )
    
        func(arrayFiltered)
      }
    


    return (
        <InputValueContext.Provider value={{
            showInput,
            newList,
            handleSubmitTextareaInput,
            handleSubmitInput,
            handleShowTextarea,
            handleShowInput,
            setTextareaInput,
            setShowInput,
            setInput,
            input,
            textareaInput,
            setNewList,
            deleteList,
            setItemsChecked,
            itemsChecked
        }}>
        { children }
        </InputValueContext.Provider>
    )
}

