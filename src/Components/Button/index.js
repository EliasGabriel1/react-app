import {ButtonStyle} from "./style";

function Button(props){
    return(
        <ButtonStyle onClick={props.onClick}>{props.buttontext}</ButtonStyle>
    );
}

export default Button;