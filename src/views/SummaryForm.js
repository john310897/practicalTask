import React from 'react'
import { useSelector } from 'react-redux';
import * as appConstants from '../AppConstants';
import '../App.css';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
export default function SummaryForm() {
    const navigate = useNavigate();
    const data = useSelector(state => state?.functionalDescriptionReducer)
    return (
        <React.Fragment>
            {data?.map((itemObj, i) => (
                <React.Fragment key={i + 2}>
                    <h3 align='left'>Form {i + 1}</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>question</th>
                                <th>Selected Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appConstants.summaryData.map((question, index) => (
                                <tr>
                                    <td align='left'>{question.question}</td>
                                    {index === 0 &&
                                        <td>{itemObj[question.name]}</td>
                                    }
                                    {((index > 0 && index <= 4) || index === 6) &&
                                        <td>{itemObj["q" + (index + 1 - 1)]}</td>
                                    }
                                    {index === 5 &&
                                        <section style={{ display: 'flex', flexDirection: 'column' }}>
                                            {question?.options?.map((option) => (
                                                <td>{itemObj[option?.name]}</td>
                                            ))}
                                        </section>
                                    }
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </React.Fragment>
            ))}
            <button className='button' onClick={() => navigate('/')}>back</button>

        </React.Fragment>
    )
}
