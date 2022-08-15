import React from 'react';
import Card from "../../Components/Card";
import { useData } from '../../Context/context';
import { Grid, Container } from './style';

function GridContent(content) {
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    const { props } = useData();

    if (typeof props === 'undefined') return null;

    const data = [
        {
            "id": 1,
            "src": props["sprites"]["versions"]["generation-i"]["red-blue"]["back_default"],
            "alt": "back_default",
            "title": "back_default",
            "descricao": "back_default",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 2,
            "src": props["sprites"]["versions"]["generation-i"]["red-blue"]["back_gray"],
            "alt": "back_gray",
            "title": "back_gray",
            "descricao": "back_gray",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 3,
            "src": props["sprites"]["versions"]["generation-i"]["red-blue"]["back_transparent"],
            "alt": "back_transparent",
            "title": "back_transparent",
            "descricao": "back_transparent",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 4,
            "src": props["sprites"]["versions"]["generation-i"]["red-blue"]["front_default"],
            "alt": "front_default",
            "title": "front_default",
            "descricao": "front_default",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 5,
            "src": props["sprites"]["versions"]["generation-i"]["red-blue"]["front_gray"],
            "alt": "front_gray",
            "title": "front_gray",
            "descricao": "front_gray",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 6,
            "src": props["sprites"]["versions"]["generation-i"]["red-blue"]["front_transparent"],
            "alt": "front_transparent",
            "title": "front_transparent",
            "descricao": "front_transparent",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 7,
            "src": props["sprites"]["versions"]["generation-i"]["yellow"]["back_default"],
            "alt": "back_default",
            "title": "back_default",
            "descricao": "back_default",
            "score": Math.floor(Math.random() * 10),
        },
        {
            "id": 8,
            "src": props["sprites"]["versions"]["generation-i"]["yellow"]["back_transparent"],
            "alt": "back_transparent",
            "title": "back_transparent",
            "descricao": "back_transparent",
            "score": Math.floor(Math.random() * 10),
        },
    ];

    const datarandom = shuffleArray(data)


    return (
        <Container>
            <Grid>
                {datarandom.map((json, index) => <Card key={json.id} src={json.src} alt={json.alt} title={json.title} descricao={json.descricao} score={json.score} />)}
            </Grid>
        </Container>
    );
}

export default GridContent;
