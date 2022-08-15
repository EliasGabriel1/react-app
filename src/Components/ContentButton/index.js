import React from 'react';
import Button from '../Button';
import {Container, GroupButton} from "./style";


function index(props) {

    return (
        <Container>
            <GroupButton>
                <Button onClick={() => props.random===1?props.setRandom(0):props.setRandom(1)} buttontext="Embaralhar"/>
                {/* <Button onClick={() => props.count===0?props.count:props.setCount(props.count +1)} buttontext="Outra Carta"/> */}
            </GroupButton>
        </Container>
    );
}

export default index;
