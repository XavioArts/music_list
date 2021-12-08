import styled from "styled-components";

export const PRIMARY_COLOR = "#318CE7";
export const SECONDARY_COLOR = "#367588";
export const TERTIARY_COLOR = "#1E2952";

export const WHITE = "#fafafa";

export const MainSeg = styled.div`
    background: rgba(30,28,43, 0.65) !important;
    margin: auto;
    padding: 10px;
    width: 80vw;
    text-align: center;
`;

export const FormSeg = styled.div`
    width: 50vw;
    margin: auto;
    background: ${TERTIARY_COLOR} !important;
    padding: 10px;
`

export const GridSeg = styled.div`
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:hover {
        background: rgba(0,0,0,0.15);
        box-shadow: rgba(99,99,99,0.2) 0px 8px 12px 0px;
    }
`;

export const ClearCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
`;

export const CenterDiv = styled.div`
    text-align: center;
`
    
export const HeaderText = styled.h1`
    color: ${WHITE} !important;
    text-align: center;
`;

export const Ptext = styled.p`
    color: ${WHITE} !important;
    text-align: center;
`;