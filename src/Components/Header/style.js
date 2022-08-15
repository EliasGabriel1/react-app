import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 40px auto 35px auto;
    
    ${customMedia.lessThan("mobile")`
        padding: 12px 18px;
    `};
    p:last-child{
      font-weight: 600;
      font-size: 50px;
    }
`;
