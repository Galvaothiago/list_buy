import { useContext, useState } from 'react'
import '../styles/Input.scss'
import { v4 as uuid } from 'uuid'
import { InputValueContext } from './context/InputValueContext'

export function Input() {
    const { input,  setInput, handleSubmitInput, newList, deleteList, setNewList } = useContext(InputValueContext)
    const [showLastItem, setShowLastItem] = useState(true)

    const allItems = [...newList]
    const lastItem = allItems.pop()

    const handleShowLastItem = () => {

        if(lastItem.length === 0) {
            setShowLastItem(false)
            console.log('false')
            return
        }
        deleteList(lastItem?.id, newList, setNewList)
        setShowLastItem(true)
    }

    // console.log(lastItem.length === 0)
    return (
        <div className="containerInput">
                <form className="formInput" onSubmit={handleSubmitInput}>
                    <input onChange={ (e) => setInput({
                        id: uuid(),
                        text: e.target.value,
                        checked: false
                    })} value={input.text} type="text" />
                    <button>add</button>          
                </form>
            { showLastItem && (
                <div className="containerPreviewItem">
                    <header>
                        <span>Last item:</span>
                        <span>{newList.length === 1 ? `${newList.length} item` : `${newList.length} itens`}</span>
                    </header>
                    <div>
                        <p>{lastItem?.text}</p>
                        <i onClick={handleShowLastItem} >X</i>
                    </div>
                </div>
            ) }
        </div>
    )
}