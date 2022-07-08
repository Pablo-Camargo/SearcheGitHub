import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;

    padding-left: 24px;
    padding-right: 24px;
`;
export const RepoCard = styled.div`
    height: 130px;
    max-height: 100%;
    display: flex !important;
    justify-content: space-between !important;
    background-color: rgb(18, 18, 18) !important;
    margin-bottom: 20px !important;
    color: #c9d1d9 !important;
    box-shadow: 7px 4px 5px #0000004d;
    border: 1px solid #242121 !important;
    padding: 10px !important;
    border-radius: 16px !important;
    cursor: pointer !important;

    &:hover {
        transform: translate(0%, -5%) !important;
        background-color: #232323 !important;
    }
    a {
        text-decoration: none;
    }
    @media (max-width: 800px) {
        height: 100%;
        flex-direction: column;
    }
`;

export const BoxRepoCard = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: column;
    h2 {
        margin: 0;
    }
    span {
        margin-top: 10px;
    }
`;
export const TitleContent = styled.div`
    margin-top: 20px;
    h1 {
        color: #c9d1d9;
    }
`;
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5 {
        margin-top: 0px;
        font-size: 20px;
        margin-bottom: 15px;
    }

    @media (max-width: 800px) {
        h5 {
            font-size: 15px;
        }
        span {
            font-size: 12px;
        }
    }
`;
