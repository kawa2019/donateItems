import React, { useState } from 'react';

export const useWhomHelpLogic = () => {
    const allInstitutionArr = [{
        typeHelp: "Fundacjom", introText: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.", allInfo: [{ name: "Fundacja “Dbam o Zdrowie”", aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" },
        { name: "Fundacja “Dla dzieci”", aim: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" }, { name: "Fundacja “Bez domu”", aim: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce" },
        { name: "fD4", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "fD5", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "fD6", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "fD7", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "fD8", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "fD9", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }]
    }, {
        typeHelp: "Organizacjom pozarządowym", introText: "Lorem Ipsum Intro", allInfo: [{
            name: "Organizacja “Lorem Ipsum 1”", aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus"
        },
        { name: "Organizacja “Lorem Ipsum 2”", aim: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet" }, { name: "Organizacja “Lorem Ipsum 3”", aim: "Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor" },
        { name: "organizacja4", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "organizacja5", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }, { name: "organizacja6", aim: "Lorem Ipsum aim", items: "Lorem Ipsum items" }]
    }, {
        typeHelp: "Lokalnym zbiórkom", introText: "Lorem Ipsum Intro", allInfo: [{ name: "Zbiórka “Lorem Ipsum 1”", aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "Egestas, sed, tempus" },
        { name: "Zbiórka “Lorem Ipsum 2”", aim: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet" }, { name: "Zbiórka “Lorem Ipsum 3”", aim: "Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor" }]
    }]
    const [currentPage, setCurrentPage] = useState(1)
    const objectsPerPage = 3;
    const indexOfLastToShow = currentPage * objectsPerPage;
    const indexOfFirstToShow = indexOfLastToShow - objectsPerPage;
    const [type, setType] = useState(0);
    const currentToShowArr = allInstitutionArr[type].allInfo.slice(indexOfFirstToShow, indexOfLastToShow)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allInstitutionArr[type].allInfo.length / objectsPerPage); i++) {
        pageNumbers.push(i);
    }
    return {allInstitutionArr, setCurrentPage, type, setType, currentToShowArr, pageNumbers}
}