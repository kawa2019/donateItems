import React, { useState } from 'react';
import { ImportantInfo } from './ImportantInfo';
import { StepsToDo } from './StepsToDo';
import { WhichSteps } from './WhichSteps';
import { ApplyBtn } from './ApplyBtn';

export const FormSteps = () => {
    const [items, setItems] = useState(false)
    const [stepNum, setStepNum] = useState(0);
    const [selectBags, setSelectBags] = useState("")
    const stepOneArr = [{ whatDonate: "goodClothes", text: "ubrania, które nadają się do ponownego użycia" },
    { whatDonate: "badClothes", text: "ubrania, do wyrzucenia" },
    { whatDonate: "toys", text: "zabawki" },
    { whatDonate: "books", text: "książki" }, { whatDonate: "other", text: "inne" }]
    const textStep = [{
        textImportant: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
        textToDO: "Zaznacz co chcesz oddać:"
    },
    {
        textImportant: "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
        textToDO: "Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:"
    }];
    const handleChange = (event) => {
        setItems(event.target.value);

    };



    return (
        <section id="formStepsSection">
            <div className="container">
                <ImportantInfo text={textStep[stepNum].textImportant} />
                <form className="formSteps">
                    <StepsToDo stepNum={stepNum} text={textStep[stepNum].textToDO} />
                    <WhichSteps stepOneArr={stepOneArr} handleChange={handleChange} items={items}
                        selectBags={selectBags} setSelectBags={setSelectBags} stepNum={stepNum} />
                    <ApplyBtn stepNum={stepNum} setStepNum={setStepNum} items={items} />
                </form>
            </div>
        </section>
    )
}