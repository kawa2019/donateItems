import React from 'react';
import { StepOneCheck } from './StepOneCheck';
import { CustomSelect } from './CustomSelect';

export const WhichSteps = ({ stepOneArr, handleChange, items, selectBags, setSelectBags, stepNum }) => {
    const handleSteps = () => {
        switch (stepNum) {
            case 0:
                return <StepOneCheck stepOneArr={stepOneArr} handleChange={handleChange} items={items} />;
            case 1:
                return <CustomSelect arrOption={[1, 2, 3, 4, 5]} description="Liczba 60l worków:"
                    selected={selectBags} setSelect={setSelectBags} />
        }
    }
    return (
        <>
            {handleSteps()}
        </>
    )
}