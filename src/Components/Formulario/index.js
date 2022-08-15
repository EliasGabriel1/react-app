import React, { useContext, useState, useRef } from "react";
import { Form, Container, Input } from "./style";
import { UserContext } from "../../Context/auth";
import { useNavigate } from 'react-router-dom';


const initialValue = {
    name: "",
};

function Formulario(props) {
    const [values, setValues] = useState(initialValue);
    const { text, setText } = useContext(UserContext);
    const inputEl = useRef(null);
    const navigate = useNavigate();

    console.log(values,text)
    const onButtonClick = () => {
        console.log(inputEl.current.value)
        setText(inputEl.current.value)
        setValues(inputEl.current.value)
        navigate('/Cards');
    };

    return (
        <Container>
            <Form>
                <div className="Group">
                    <label>Digite seu nome</label>
                    <Input ref={inputEl} type="text" id="name" autoComplete="off"/>
                </div>
                <button onClick={onButtonClick}> ver cartas</button>
            </Form>
        </Container>
    );
}

export default Formulario;