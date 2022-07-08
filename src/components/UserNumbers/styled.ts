import styled from "styled-components";

export const NumberContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: #fff;
`;
export const InnerNumberContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    cursor: pointer !important;
    padding: 6px;
    &:hover {
        transform: translate(0%, -5%) !important;
        border-radius: 8px !important;
        border: 1px solid #242121 !important;
        background-color: #232323 !important;
    }
`;
export const Margin = styled.h2`
    margin: 0;
`;

export const Span = styled.span`
    font-size: 15px;
`;
