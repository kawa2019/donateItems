import React, { useState } from 'react';
import { loremIpsum } from "react-lorem-ipsum";

export default function Help() {
    const lorem = (words) => { return loremIpsum({ p: 1, avgSentencesPerParagraph: 1, avgWordsPerSentence: words }) }
    const [helper, setHelper] = useState(1)
    const [foundations, setFoundations] = useState([{ f: "Fundacja “Dbam o Zdrowie”", aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", item: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" },
    { f: "Fundacja “Dla dzieci”", aim: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", item: "ubrania, meble, zabawki" }, { f: "Fundacja “Bez domu”", aim: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", item: "ubrania, jedzenie, ciepłe koce" },
    { f: "fD4", aim: `${lorem(6)}`, item: `${lorem(2)}` }, { f: "fD5", aim: `${lorem(5)}`, item: `${lorem(4)}` }, { f: "fD6", aim: `${lorem(7)}`, item: `${lorem(3)}` }, { f: "fD7", aim: `${lorem(6)}`, item: `${lorem(3)}` }, { f: "fD8", aim: `${lorem(4)}`, item: `${lorem(4)}` }, { f: "fD9", aim: `${lorem(5)}`, item: `${lorem(4)}` }])

    const [organization, setOrganization] = useState([{
        o: "Organizacja “Lorem Ipsum 1”", aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        item: "Egestas, sed, tempus"
    },
    { o: "Organizacja “Lorem Ipsum 2”", aim: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", item: "Ut, aliquam, purus, sit, amet" }, { o: "Organizacja “Lorem Ipsum 3”", aim: "Scelerisque in dictum non consectetur a erat nam.", item: "Mi, quis, hendrerit, dolor" },
    { o: "organizacja4", aim: `${lorem(6)}`, item: `${lorem(2)}` }, { o: "organizacja5", aim: `${lorem(5)}`, item: `${lorem(4)}` }, { o: "organizacja6", aim: `${lorem(7)}`, item: `${lorem(3)}` }])

    const [local, setLocal] = useState([{ l: "Zbiórka “Lorem Ipsum 1”", aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.", item: "Egestas, sed, tempus" },
    { l: "Zbiórka “Lorem Ipsum 2”", aim: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", item: "Ut, aliquam, purus, sit, amet" }, { l: "Zbiórka “Lorem Ipsum 3”", aim: "Scelerisque in dictum non consectetur a erat nam.", item: "Mi, quis, hendrerit, dolor" }])
    const [currentPage, setCurrentPage] = useState(1)
    const [foundationsPerPage, setFoundationsPerPage] = useState(3)

    const indexOfLastTodo = currentPage * foundationsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - foundationsPerPage;
    const currentTodos = foundations.slice(indexOfFirstTodo, indexOfLastTodo);
    const currentTodoOrganization = organization.slice(indexOfFirstTodo, indexOfLastTodo);
    const currentTodoLocal = local.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return (
            <div className="foundation" key="index">
                <div className="detailsOfFoundation">
                    <p className="nameFoundation">{todo.f}</p>
                    <p className="aimFoundation">{todo.aim}</p>
                </div>
                <p className="itmesForFoundation">{todo.item}</p>
            </div>
        )
    });

    const renderTodoOrganization = currentTodoOrganization.map((todo, index) => {
        return (
            <div className="foundation" key="index">
                <div className="detailsOfFoundation">
                    <p className="nameFoundation">{todo.o}</p>
                    <p className="aimFoundation">{todo.aim}</p>
                </div>
                <p className="itmesForFoundation">{todo.item}</p>
            </div>
        )
    });

    const renderTodoLocal = currentTodoLocal.map((todo, index) => {
        return (
            <div className="foundation" key="index">
                <div className="detailsOfFoundation">
                    <p className="nameFoundation">{todo.l}</p>
                    <p className="aimFoundation">{todo.aim}</p>
                </div>
                <p className="itmesForFoundation">{todo.item}</p>
            </div>
        )
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(foundations.length / foundationsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <span
                className="page"
                key={number}
                id={number}
                onClick={e => setCurrentPage(e.target.id)}
            >
                {number}
            </span>
        );
    });

    const pageNumbersO = [];
    for (let i = 1; i <= Math.ceil(organization.length / foundationsPerPage); i++) {
        pageNumbersO.push(i);
    }

    const renderPageNumbersO = pageNumbersO.map(number => {
        return (
            <span
                className="page"
                key={number}
                id={number}
                onClick={e => setCurrentPage(e.target.id)}
            >
                {number}
            </span>
        );
    });

    const pageNumbersL = [];
    for (let i = 1; i <= Math.ceil(local.length / foundationsPerPage); i++) {
        pageNumbersL.push(i);
    }

    const renderPageNumbersL = pageNumbersL.map(number => {
        if (pageNumbersL.length > 1) {
            return (
                <span
                    className="page"
                    key={number}
                    id={number}
                    onClick={e => setCurrentPage(e.target.id)}
                >
                    {number}
                </span>
            );
        }
    });

    const myBorder = (param) => {
        let style = {}
        if (helper == param) {
            return style = {
                border: "0.075rem solid #3c3c3c"
            }
        }
    }

    const kindOfHelper = () => {

        if (helper === 1) {
            return (
                <div className="helpInfo">
                    <p className="briefInfo">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    {renderTodos}
                    <div className="pagination">
                        {renderPageNumbers}
                    </div>
                </div>
            )
        } else if (helper === 2) {
            return (
                <div className="helpInfo">
                    <p className="briefInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    {renderTodoOrganization}
                    <div className="pagination">
                        {renderPageNumbersO}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="helpInfo">
                    <p className="briefInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    {renderTodoLocal}
                    <div className="pagination">
                        {renderPageNumbersL}
                    </div>
                </div>
            )
        }
    }
    return (
        <section id="toHelp">
            <div className="container-help">
                <div className="headerFoot">
                    <p>Komu pomagamy?</p>
                    <span className="main_dec">
                    </span>
                </div>
                <div className="whomSure">
                    <button onClick={() => {setHelper(1);setCurrentPage(1)}} style={myBorder(1)}>Fundacjom</button>
                    <button onClick={() => {setHelper(2);setCurrentPage(1)}} style={myBorder(2)}>Organizacjom pozarządowym</button>
                    <button onClick={() => {setHelper(3);setCurrentPage(1)}} style={myBorder(3)}>Lokalnym zbiórkom</button>
                </div>
                {kindOfHelper(helper)}
            </div>
        </section>
    )
}