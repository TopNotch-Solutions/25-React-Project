import {FaMinus, FaPlus} from 'react-icons/fa'
import MenuList from './menu-list';
import { useState } from 'react';

function MenuItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]});
        console.log(displayCurrentChildren)
    }
    return (
     <li>
        <div className="menu-item">
        <h5>{item.label}</h5>
        {
            item && item.children && item.children.length ?(
                <span onClick={() => handleToggleChildren(item.label)}>{
                    displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />
                }</span>
            ) : null
        }
        {
            item && item.children && item.children.length && displayCurrentChildren[item.label] ? (
                <MenuList list={item.children}/>
            ) : null
        }
     </div>
     </li>
    );
  }
  
  export default MenuItem;
  