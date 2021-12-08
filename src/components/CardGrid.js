import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, WHITE } from "./Styles";

const CardGrid = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 750px) {
        flex-direction: column;
        flex-wrap: none;
        justify-content: center;
    }
    `;
    
    export const MyCard = styled.div`
    border: 2px solid ${WHITE};
    border-radius: 15px;
    background: ${PRIMARY_COLOR};
    width: 150px;
    height: 150px;
    margin: 10px;

    &:hover {
        background: ${SECONDARY_COLOR};
        width: 165px;
        height: 165px;
        border-color: ${TERTIARY_COLOR};
        margin: 2.5px;
    }

    @media (max-width: 750px) {
        background: rgba(255,255,255,0.1);
        width: 500px;
    }
`;

export default CardGrid;