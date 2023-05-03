import React from 'react'
import FunctionalDescriptionComponent from '../components/FunctionalDescriptionComponent';
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'
import { addForm } from '../reducers/functionalDescriptionReducer';
import { useNavigate } from 'react-router-dom';
function Home() {
    const state = useSelector(state => state?.functionalDescriptionReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addPage = () => {
        dispatch(addForm())
    }
    const gotoSuummary = () => {
        navigate('/summary');
    }
    return (
        <>
            {state?.map((data, index) => (
                <Card>
                    <FunctionalDescriptionComponent
                        data={data}
                        index={index}
                    />
                </Card>
            ))}
            <button className='button' onClick={addPage}><b>+</b></button>
            <br /><br />
            <Row>
                <Col>
                    <button className='button'>Back</button>
                </Col>

                <Col>
                    <button className='button' onClick={gotoSuummary}>Next</button>
                </Col>
            </Row>
            <br />
        </>
    )
}

export default Home