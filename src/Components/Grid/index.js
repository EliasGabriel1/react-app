import React, { useContext, useState } from 'react';
import GridContent from '../GridContent';
import Header from '../Header';
import ContentButton from '../ContentButton';
import { UserContext } from "../../Context/auth";

function Cards() {
    const [random, setRandom] = useState(0);
    const [count, setCount] = useState(0);
    const value = useContext(UserContext);
    
    return (
        <>
            <Header nome={value.text}/>
            <ContentButton setCount={setCount} count={count} setRandom={setRandom} random={random}/>
            <GridContent count={count} random={random}/>
        </>
    );
}

export default Cards;
