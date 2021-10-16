import { useContext, useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { InputValueContext } from './context/InputValueContext'

import { Checkbox } from '@idui/react-toggle-controls'

export function List({data, color}) {
    const { id, text, } = data

    const { deleteList, setItemsChecked, itemsChecked, newList, setNewList} = useContext(InputValueContext)
    const [ checked, setChecked ] = useState(false)

    const [ colorBorder, checkBorder ] = color

    const colorsChecked = {
        background: '#52b78881',
        borderLeft: '.3rem solid #52b78881',
        color: 'rgba(255, 255, 255, 0.479) !important'
    }

    const handleAditionalOrRemoveItems = (id, checked, array) => {
        if(!checked) {
            const allItemsFilteredWithoutCurrent = array.filter(item => id !== item.id)
            setItemsChecked([...allItemsFilteredWithoutCurrent])
        }

        if(!!checked) {
            const currentItem = {
                id,
                text,
                checked
            }

            setItemsChecked([...itemsChecked, currentItem])
        }
    }
    
    useEffect(() => {
        handleAditionalOrRemoveItems(id, checked, itemsChecked)
    }, [checked])
    
    return (
        <div style={ !checked ? colorBorder : colorsChecked } className="list" >
            <Checkbox 
                checked={checked} 
                onChange={setChecked}
                size="15px"
                icon={<span>{'✓'}</span> }
                colors={{ 
                    on: { background: '#37D2C5', border: '#37D2C5', icon: checkBorder.border }, 
                    off: { background: 'transparent', border: checkBorder.border, icon: 'transparent', }, 
                }}
            />
            <p>{text}</p>
            <MdDeleteForever onClick={ () => deleteList(id, newList, setNewList) }/>
        </div>
    )
}
