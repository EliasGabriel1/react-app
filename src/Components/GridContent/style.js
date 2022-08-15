import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});


export const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, 300px);
    grid-gap: 25px;
    justify-items: center;
    
    ${customMedia.lessThan("mobile")`
        
    `};
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    ${customMedia.lessThan("mobile")`
      display: flex;
      justify-content: center;
    `};
`;