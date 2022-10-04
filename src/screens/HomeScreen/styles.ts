import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  max-width: ${theme.sizes.container};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1{
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    margin-bottom: 5rem;
  }
`

export const InfoContainer = styled.div`
  text-align: center;
  margin-bottom: 5rem;


  h1{
    font-size: 2.1rem;
    color: ${theme.colors.primary};
    font-weight: 700;

    margin-bottom: 2rem;
  }

  p{
    font-size: 0.87rem;
    color: ${theme.colors.tertiary};
  }
`

export const TranscriptionArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  h3{
    font-weight: 700;
    color: ${theme.colors.tertiary};

    margin-bottom: 1.5rem;
  }

  input{
    padding: 1.2rem 0 1rem 2rem;

    width: 100%;

    box-shadow: inset -8px -8px 16px rgba(255, 255, 255, 0.7), inset 8px 8px 16px rgba(189, 200, 223, 0.7);

    border-radius: 2.5rem;
    color: ${theme.colors.tertiary};
    background-color: ${theme.colors.bg};

    margin-bottom: 2.5rem;

    &::placeholder{
      color: ${theme.colors.tertiary};

      font-size: 1.25rem;
    }
  }
`