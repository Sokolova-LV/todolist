import styled from "@emotion/styled";

export const Container = styled.div`

`;

export const Form = styled.form`
    width: 100%;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    outline: none;
    background: none;
    border: 1px solid #FFF8DC;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 200px;
    color: #000;

    ::placeholder {
        color: gray;
    }

    @media (min-width: 480px) {
        width: 300px;
    }
`;

export const Btn = styled.button`
    background: #D3D3D3;
    color: #000;
    border: none;
    padding: 0.55rem;
    cursor: pointer;
`;