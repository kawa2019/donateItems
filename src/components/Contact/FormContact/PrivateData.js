import React from 'react';

export const PrivateData = ({ label, placeholder, value, error, setData, textarea, private_class=""}) => {
    return (
        <>
            <div className={!error ? `private_data ${private_class}` : `private_data private_dataError ${private_class}`} >
                <label>{label}</label>
                {!textarea ? <input spellCheck="false" type="text" placeholder={placeholder} value={value} onChange={(e) => setData(e.target.value)} />
                    : <textarea type="text" placeholder={placeholder} value={value} onChange={(e) => setData(e.target.value)} />}
                {error && <p className="errorText">{error}</p>}
            </div>
        </>
    )
}