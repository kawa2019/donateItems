import React, { useState } from 'react';
import { ImportantInfo } from './ImportantInfo';
import { StepsToDo } from './StepsToDo';
import { WhichSteps } from './WhichSteps';
import { ApplyBtn } from './ApplyBtn';

export const FormSteps = () => {
    const [customBoxState, setCustomBoxState] = useState({
        items: false, kids: "",
        mothers: "", homeless: "", disabled: "", elderly: ""
    })
    const [stepNum, setStepNum] = useState(2);
    const [selectBags, setSelectBags] = useState("— wybierz —");
    const [selectLocation, setSelectLocation] = useState("— wybierz —");
    const [listOpen, setListOpen] = useState(false);
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
    },
    {
        textImportant: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
        textToDO: "Lokalizacja:"
    }];
    const stepThreeChooseArr = [{ name: "kids", text: "dzieciom" }, { name: "mothers", text: "samotnym matkom" },
    { name: "homeless", text: "bezdomnym" }, { name: "disabled", text: "niepełnosprawnym" },
    { name: "elderly", text: "osobom starszym" }];
    const handleChange = (evt) => {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setCustomBoxState({
            ...customBoxState,
            [evt.target.name]: value
        });
    };
    return (
        <section id="formStepsSection">
            <div className="container">
                <ImportantInfo text={textStep[stepNum].textImportant} />
                <form className="formSteps">
                    <StepsToDo stepNum={stepNum} text={textStep[stepNum].textToDO} />
                    <WhichSteps stepOneArr={stepOneArr} handleChange={handleChange} customBoxState={customBoxState}
                        selectBags={selectBags} setSelectBags={setSelectBags} stepNum={stepNum}
                        selectLocation={selectLocation} setSelectLocation={setSelectLocation}
                        listOpen={listOpen} setListOpen={setListOpen} stepThreeChooseArr={stepThreeChooseArr} />
                    <ApplyBtn stepNum={stepNum} setStepNum={setStepNum} customBoxState={customBoxState} setListOpen={setListOpen}
                        stepThreeChooseArr={stepThreeChooseArr} selectLocation={selectLocation}/>
                </form>
            </div>
        </section>
    )
}