import React, { useState } from 'react';
import { ImportantInfo } from './ImportantInfo';
import { StepsToDo } from './StepsToDo';
import { WhichSteps } from './WhichSteps';
import { ApplyBtn } from './ApplyBtn';

export const FormSteps = () => {
    const [customBoxState, setCustomBoxState] = useState({
        items: false, orgName: "", kids: "",
        mothers: "", homeless: "", disabled: "", elderly: "", street: "", city: "", postCode: "", phone: "",
        date: "", time: "", comment: ""
    })
    const [stepNum, setStepNum] = useState(3);
    const [selectBags, setSelectBags] = useState("— wybierz —");
    const [selectLocation, setSelectLocation] = useState("— wybierz —");
    const [listOpen, setListOpen] = useState(false);
    const stepOneArr = [{ value: "goodClothes", text: "ubrania, które nadają się do ponownego użycia" },
    { value: "badClothes", text: "ubrania, do wyrzucenia" },
    { value: "toys", text: "zabawki" },
    { value: "books", text: "książki" }, { value: "other", text: "inne" }]
    const stepFourAddressData = [{ name: "street", text: "Ulica" }, { name: "city", text: "Miasto" },
    { name: "postCode", text: "Kod pocztowy" }, { name: "phone", text: "Numer telefonu" }];
    const stepFourPickUpDate = [{ name: "date", text: "Data" }, { name: "time", text: "Godzina" },
    { name: "comment", text: "Uwagi dla kuriera" }]
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
    }, {
        textImportant: "Podaj adres oraz termin odbioru rzeczy.",
        textToDO: "Podaj adres oraz termin odbioru rzecz przez kuriera"
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
                        listOpen={listOpen} setListOpen={setListOpen} stepThreeChooseArr={stepThreeChooseArr}
                        stepFourAddressData={stepFourAddressData} stepFourPickUpDate={stepFourPickUpDate} />
                    <ApplyBtn stepNum={stepNum} setStepNum={setStepNum} customBoxState={customBoxState} setListOpen={setListOpen}
                        stepThreeChooseArr={stepThreeChooseArr} selectLocation={selectLocation} />
                </form>
            </div>
        </section>
    )
}