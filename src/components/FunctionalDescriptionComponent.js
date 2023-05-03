import React, { useEffect, useState } from 'react'
import * as appConstants from '../AppConstants';
import RadioButtonComponent from './RadioButtonComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckBoxComponent from './CheckBoxComponent';
import { useDispatch } from 'react-redux'
import { addData } from '../reducers/functionalDescriptionReducer'
function FunctionalDescriptionComponent({ data, index }) {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        setFormData({ ...formData, ...data, index: index })
    }, [])
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(name, value)
        if (type === appConstants.optionType.checkbox) {
            formData[name] = checked ? value : null
            setFormData({ ...formData, [name]: checked ? value : null })
        } else {
            formData[name] = value
            setFormData({ ...formData, [name]: value })
        }
        dispatch(addData(formData))

        console.log(formData)
    }
    return (
        <div className='fdc_form'>
            <div className='header'>
                <h2>Pain & Functional Description</h2>
            </div>
            <div className='sub_header'>
                <p>The description of the current situation gives your Optimum
                    Trainer a picture of and clues to the underlying causes of your
                    problems</p>
            </div>
            <br />
            <form>
                <p>If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)</p>
                <textarea rows={5} className='text_area' name={'desc'} value={formData['desc']} onChange={handleChange} />

                {appConstants.questionsAndOptions.map((q, i) => (
                    <React.Fragment>
                        <Row key={i + 1} align='left'>
                            <Col>
                                {q?.question}
                            </Col>
                            {q.optionNextLine === false &&
                                <Col>
                                    <RadioButtonComponent
                                        name={"q" + (i + 1)}
                                        optionList={q.options}
                                        onChange={handleChange}
                                        content={formData["q" + (i + 1)]}
                                    />
                                </Col>
                            }
                        </Row>
                        {q.optionNextLine === true &&
                            <Row key={i + 1} align='left'>
                                <Col>
                                    {q.optionType === appConstants.optionType.radio &&
                                        <RadioButtonComponent
                                            name={"q" + (i + 1)}
                                            optionList={q.options}
                                            onChange={handleChange}
                                            content={formData["q" + (i + 1)]}
                                        />
                                    }
                                    {q.optionType === appConstants.optionType.checkbox &&
                                        <CheckBoxComponent
                                            optionList={q.options}
                                            onChange={handleChange}
                                            content={formData}
                                        />
                                    }
                                </Col>
                            </Row>
                        }
                    </React.Fragment>
                ))}

            </form>
        </div>

    )
}

export default FunctionalDescriptionComponent