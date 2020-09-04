import { useState } from 'react';

export const useFormStepsLogic = () => {
    const [customBoxState, setCustomBoxState] = useState({
        items: "", orgName: "", kids: "",
        mothers: "", homeless: "", disabled: "", elderly: "", street: "", city: "", postCode: "", phone: "",
        date: "", time: "", comment: ""
    })
    const [stepNum, setStepNum] = useState(0);
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
    }, { textToDO: "Podsumowanie Twojej darowizny" }];
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
    const handleChangeErrors = (prop, error) => {
        const value = prop;
        const property = `error_${error}`;
        setCustomBoxState((prevState) => {
            const newState = { ...prevState, [property]: value }
            return newState
        })
    }
    return {
        stepNum, setStepNum, textStep, stepOneArr, handleChange, customBoxState, selectBags, setSelectBags, selectLocation, setSelectLocation,
        listOpen, setListOpen, stepThreeChooseArr, stepFourAddressData, stepFourPickUpDate, handleChangeErrors
    }
} 