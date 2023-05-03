export const optionConstant1 = [
    { label: "Not relevant", value: "Not relevant" },
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" }
]
export const optionConstant2 = [
    { label: "Not relevant", value: "Not relevant" },
    { label: "Daily", value: "Daily" },
    { label: "Several times/week", value: "Several times/week" },
    { label: "A few times/month", value: "A few times/month" },
    { label: "A few times/year", value: "A few times/year" }
]
export const optionConstant3 = [
    { label: "Not relevant", value: "Not relevant", name: 'q5_op1' },
    { label: "When lying down", value: "When lying down", name: 'q5_op2' },
    { label: "When sitting", value: "When sitting", name: 'q5_op3' },
    { label: "Under standing", value: "Under standing", name: 'q5_op4' },
    { label: "In walking", value: "In walking", name: 'q5_op5' }
]
export const optionConstant4 = [
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" }
]
export const optionType = {
    radio: 'radio',
    checkbox: 'checkbox'

}

export const questionsAndOptions = [
    { question: "Have you been diagnosed with this problem?", options: optionConstant1, optionNextLine: false, optionsBelowOther: false, optionType: optionType.radio },
    { question: "Did the problem start after a physical trauma ?", options: optionConstant1, optionNextLine: false, optionsBelowOther: false, optionType: optionType.radio },
    { question: "Did the problem start after a mental trauma ?", options: optionConstant1, optionNextLine: false, optionsBelowOther: false, optionType: optionType.radio },
    { question: "How often do you experience the problem?", options: optionConstant2, optionNextLine: true, optionsBelowOther: false, optionType: optionType.radio },
    { question: "When do you experience the problem?", options: optionConstant3, optionNextLine: true, optionsBelowOther: true, optionType: optionType.checkbox },
    { question: "How intense is the experience of the problem on average on a 0-10 scale?", options: optionConstant4, optionNextLine: true, optionsBelowOther: false, optionType: optionType.radio }
]
export const summaryData = [
    { question: 'If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)', name: "desc" },
    ...questionsAndOptions
]
