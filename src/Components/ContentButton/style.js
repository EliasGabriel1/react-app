import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

    ${customMedia.lessThan("mobile")`
      
    `};
`;

export const GroupButton = styled.div`
    display: flex;
    gap: 12px;
    justify-content: end;
    margin-bottom: 15px;

    ${customMedia.lessThan("mobile")`
        
    `};
`;