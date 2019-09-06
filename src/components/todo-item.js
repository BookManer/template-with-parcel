// React
import React, { useState } from 'react';

export default (props) => {
    const { content:text, categories } = props;
    const [ isDone, setDone ] = useState(false);
    const [ isRemove, setRemove ] = useState(false);

    const animate = (event, sec) => {
        const taskBlock = event.target.parentElement.parentElement;
        taskBlock.classList.add("animation-hide");

        setTimeout(() => {
            setRemove(true);
        }, sec*1000);
    }

    return (
        !isRemove && <div className={"ui segment stacked task-block " + (isDone? "done" : "")} >
            { text }
            <div class="icon-group">
                <i class="check icon" onClick = { (e) => { setDone(!isDone); } } />
                <i class="close icon" onClick = { (e) => { animate(e, 1.1) } } />
            </div>
            <div class="ui group">
                {categories.map(({ label, color })=>(
                    <span className={`ui ${color} tag label`}>{label}</span>
                ))}
            </div>
        </div>
    )
}