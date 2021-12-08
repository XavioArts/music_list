import styled from "styled-components";
import { WHITE } from "./Styles";

const CardGrid = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 750px) {
        flex-direction: column;
        flex-wrap: none;
        justify-content: center;
        align-items: center;
    }
    `;
    
    export const MyCard = styled.div`
    border: 2px solid ${WHITE};
    border-radius: 15px;
    width: 150px;
    height: 150px;
    margin: 10px;

    @media (max-width: 750px) {
        background: rgba(255,255,255,0.1);
        width: 500px;
    }
`;

export default CardGrid;