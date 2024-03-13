import styled from "@emotion/styled";

export const Container = styled.div`
    background: #EEE1B6;
    margin-top: 5rem;
    padding: 2rem;
    border-radius: 5px;
    width: 300px;

    @media (min-width: 480px) {
        width: 450px;
    }
`;

export const Title = styled.h1`
    color: #000;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;

    @media (min-width: 480px) {
        font-size: 1.75rem;
    }
`;