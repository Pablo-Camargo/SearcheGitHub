import styled from "styled-components";
export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;

    padding-left: 24px;
    padding-right: 24px;
`;
export const Container = styled.header`
    box-sizing: border-box;
    height: 90px;
    padding: 5px 0;
    color: #c9d1d9;
    background: #161b22 !important;
    @media (max-width: 800px) {
        height: auto;
    }
`;

export const LogoInner = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    min-height: 70px;

    width: auto;
    h1 {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #c9d1d9;
    }
`;
export const InnerBar = styled.div`
    display: flax;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;
        display: flex;
        justify-content: center;
    }
`;
export const SeacheInput = styled.input`
    display: table;
    width: 100%;
    max-width: 100%;
    padding: 0;
    font-size: inherit;
    font-weight: 400;
    color: #c9d1d9;
    vertical-align: middle;
    background-color: #0d1117;
    border: 1px solid #30363d;
    box-shadow: none;
    min-height: 22px;
    border-radius: 6px;
    padding: 4px;
`;
export const SeacheContainer = styled.div`
    display: flex;
    position: relative;
`;

export const SeacheButton = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 4px;
    border-radius: 50%;
    color: #c9d1d9;
    position: absolute;
    top: 0;
    right: 0;
`;
