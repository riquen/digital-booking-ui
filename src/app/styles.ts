import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string
}

export const Container = styled.div<ContainerProps>`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background-color: ${({backgroundColor}) => backgroundColor};
    
    h1 {
        color: var(--amber);
    }

    p {
        color: var(--cornsilk);
    }
`

export const LogosContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
`