import React from "react";

function Footer({isDark, setIsDark}){
    return(
        <header className="content"
        style={{
            backgroundColor : isDark ? 'black' : 'lightgray',
            color : isDark ? 'white' : 'black',
        }}>
            <h1>Welcome! 좋은 하루 되세요.</h1>
        </header>
    )
}

export default Content