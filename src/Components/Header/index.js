import {Header} from "./style";

function index(props){
    return(
        <Header>
            <p>Logo</p>
            <p>{props.nome}</p>
        </Header>
    );
}

export default index;