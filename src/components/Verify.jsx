import { useContext } from 'react'
import '../styles/Verify.scss'
import { InputValueContext } from './context/InputValueContext'
import { popupContext } from './context/PopupContext'
import { List } from './List'

export default function Verify() {
  const { newList, itemsChecked } = useContext(InputValueContext)
  const { isClosePopup, openPopupWithMessage } = useContext(popupContext)

  const colorsToBorder = [
    '#ffc300',
    '#8338ec',
    '#00afb9',
    '#fed9b7',
    '#d62828'
  ]
  const generateRandomIndex = (arrColors) => {
    const length = arrColors.length - 1
    const indexRandom = parseInt(Math.random() * length)
    
    return arrColors[indexRandom]
  } 

  
  const borderRandomColor =  () => {
    const color = generateRandomIndex(colorsToBorder)
    const style = [{
      borderLeft: `.3rem solid ${color}`
    }, {
      border: color
    }]

    return style
  }

  const handleSaveList = () => {
    const itemsForCheck = [...itemsChecked]
    const uncheckedItems = newList.filter((item, i) => item.id !== (itemsForCheck[i]?.id || 'id'))

    if(itemsChecked.length === 0) {
      openPopupWithMessage("No itens to finish at moment")
      return
    }

    if(itemsChecked.length !== newList.length) {
      openPopupWithMessage("You don`t remember to take all your products")
      return
    }


    const feedbackAboutItemsUnchecked = uncheckedItems.reduce((acc, item, _, array) => {
      acc += item.text
      return `You forgot ${array.length}, ${acc} `
  
    }, '')
    
    const compareIfAllItemsWasChecked = newList.length === itemsChecked.length ? 'All items was checked!' : uncheckedItems
    
    console.log(feedbackAboutItemsUnchecked)
  }




    return (
      <>
        <main className="containerVerify">
          { newList.map( item => (
            <List 
              key={item.id} 
              data={item}  
              color={borderRandomColor()}
            />
          )) }
        </main>
        <footer className="infoTotalPrice">
            <input  type="number" placeholder="valor total" />
            <button onClick={handleSaveList}>finalizar</button>
        </footer>
      </>
    )
}