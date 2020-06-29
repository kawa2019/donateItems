import React, { useState } from 'react'
export default function FormStepOne() {
    const [checked, setChecked] = useState({checbox1: false})
    console.log(checked)

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setChecked(prevState => {
            return {
                ...prevState,
                [name]: checked
            }
        });
    };

    return (
        <section>
            <div className="container">
                <header>
                    <h1>Ważne!</h1>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </header>
                <form className="oneOf4StepsForm">
                    <span>Krok:1/4</span>
                    <h1>Zaznacz co chcesz oddać:</h1>
                    <div className="allCheck">
                        <div className="oneOfCheck">
                            <input type="checkbox" id="checkbox_1" name="checbox1" checked={checked.checbox1} onChange={handleChange} />
                            <label for="checkbox_1">ubrania, które nadają się do ponownego użycia</label>

                        </div>
                        <div className="oneOfCheck">
                            <input type="checkbox" id="checkbox_2" />
                            <label for="checkbox_2">ubrania, do wyrzucenia</label>

                        </div>
                        <div className="oneOfCheck">
                            <input type="checkbox" id="checkbox_3" />
                            <label for="checkbox_3">zabawki</label>

                        </div>
                        <div className="oneOfCheck">
                            <input type="checkbox" id="checkbox_4" />
                            <label for="checkbox_4">książki</label>

                        </div>
                        <div className="oneOfCheck">
                            <input type="checkbox" id="checkbox_5" />
                            <label for="checkbox_5">Inne</label>

                        </div>
                    </div>
                    <input type="submit" value="Dalej" />
                </form>
            </div>
        </section>
    )
}