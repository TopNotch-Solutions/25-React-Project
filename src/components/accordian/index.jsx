import { useState } from 'react';
import data from './data';
import './style.css';

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [isMultipleSelected, setIsMultipleSelected] =useState(false);

    function handleSelect(getId){
            setSelected(selected === getId ? null : getId );
    }

    function handleMultipleSelect(){
        if(isMultipleSelected){
            setSelected(null)
        }else{
            setMultiple([])
        }
        setIsMultipleSelected(!isMultipleSelected);
        
    }

    function handleMultipleSelection(getId){
        setSelected(null);
        let copyMultiple = [...multiple];

        const indexOfCurrentId = copyMultiple.indexOf(getId);
        if(indexOfCurrentId === -1) copyMultiple.push(getId);
        else copyMultiple.splice(indexOfCurrentId, 1);

        setMultiple(copyMultiple)
    }
    console.table(selected, multiple)
    return (
        <div className='acc-wrapper'>
            <button onClick={() => handleMultipleSelect()}>{isMultipleSelected ? "Disable Multiple Selection" :"Enable Multiple Selection"}</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ? <>
                    {
                        data.map((dataItem) => (
                            <div className='item'>
                                <div className='title' onClick={() => isMultipleSelected ? handleMultipleSelection(dataItem.id): handleSelect(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                </div>
                                {
                                    isMultipleSelected ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className='acc-content'>{dataItem.answer}</div>
                                    ) :
                                selected === dataItem.id && (
                                    <div className='acc-content'>{dataItem.answer}</div>
                                )
                            }
                            </div>
                           
                        ))
                    }
                    </> : <>No data</>
                }

            </div>
        </div>
    );
}

export default Accordian;
