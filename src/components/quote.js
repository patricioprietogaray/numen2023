import React from 'react';

const Quote = ({quote}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <p><i>{quote.text}</i></p>
            <p><small>{quote.author}</small></p>
        </div>
    );
}

export default Quote;
