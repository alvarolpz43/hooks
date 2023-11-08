import React,{useState} from 'react';

const Color = () => {
    const [value, setValue] = useState({ background: '#FF0000' });

    return (
        <>
            <div style={value}>a</div>
            <button onClick={() => setValue({ background: '#0000FF' })}>blue</button>
            <button onClick={() => setValue({ background: '#FF0000' })}>red</button>
        </>
    );
};

export default Color;


