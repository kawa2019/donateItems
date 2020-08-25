import React from 'react';

export const Message = () => {
    return (
        <div className="group_text" >
            <label>Wpisz swoją wiadomość</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} style={myBorder(errorText)}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laboris nisi ut aliquip ex ea commodo consequat." />
            {errorText && <p style={{ color: "red" }}>{errorText}</p>}
        </div>
    )
}