import React, { useState } from 'react';
import { ImportantInfo } from './ImportantInfo';
import { StepOne } from './StepOne';
import { BtnFormSteps } from './BtnFormSteps';
import { StepsToDo } from './StepsToDo';

export const FormSteps = () => {
    const [items, setItems] = useState(false)
    const [stepNum, setStepNum] = useState(1);
    const stepOneArr = [{ whatDonate: "goodClothes", text: "ubrania, które nadają się do ponownego użycia" },
    { whatDonate: "badClothes", text: "ubrania, do wyrzucenia" },
    { whatDonate: "toys", text: "zabawki" },
    { whatDonate: "books", text: "książki" }, { whatDonate: "other", text: "inne" }]
    const textStepOne = "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
    const handleChange = (event) => {
        setItems(event.target.value);

    };
    const handleStepOne = (e) => {
        e.preventDefault()
        if (items) {
            setStepNum(prevState => prevState + 1)
        }
    }
    return (
        <section id="formStepsSection">
            <div className="container">
                <ImportantInfo text={textStepOne} />
                <form className="formSteps">
                    <StepsToDo stepNum={stepNum} />
                    <StepOne stepOneArr={stepOneArr} handleChange={handleChange} items={items} />
                    <BtnFormSteps handleStepOne={handleStepOne} />
                </form>
            </div>
        </section>
    )
}