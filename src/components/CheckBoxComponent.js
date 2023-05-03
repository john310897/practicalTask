import React from 'react'
import '../App.css';
function CheckBoxComponent({ optionList, onChange, content }) {
    return (
        <React.Fragment className='checkbox_component'>
            {optionList?.map((option, index) => (
                <p key={index + 1}>
                    <input type='checkbox' checked={content[option?.name]} className='checkbox_buttons' onChange={onChange} name={option?.name} value={option?.value} />{option?.label}
                </p>
            ))}
        </React.Fragment>
    )
}

export default CheckBoxComponent