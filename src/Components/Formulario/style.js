import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  justify-content: center;
  color: white;
  background-color: #FFFFFF20;
  height: 300px;
  
  ${customMedia.lessThan("mobile")`
      padding: 12px 18px;
  `};
    >.Group{
      display: flex;
      flex-direction: column;
    }

    label{
      font-size: 16px;
      margin-bottom: 10px;
    }

    >button{
      color: white;
      border: 1px solid #808080;
      margin-top: 30px;
      padding: 14px 38px;
      cursor:pointer;

      &:hover{
        background-color: #808080;
      }
    }

  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0d1117;

  ${customMedia.lessThan("mobile")`
    padding: 12px 18px;
  `};
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding-left: 7px;
  border-radius: 3px;
`;
