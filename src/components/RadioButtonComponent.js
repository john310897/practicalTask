import React from 'react'
import '../App.css';
function RadioButtonComponent({ name, optionList, onChange, content }) {
    return (
        <>
            <div className='option_section'>
                {optionList?.map((item, index) => (
                    <React.Fragment key={index + 1}>
                        <input type='radio' name={name} checked={content === item?.value} onChange={onChange} className='option_buttons' value={item?.value} />
                        {item?.label}
                    </React.Fragment>
                ))}

            </div>
        </>
    )
}

export default RadioButtonComponent