import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  min-height: 100vh;
  max-width: 354px;

  border-radius: 1.5rem;
  box-shadow: 0px 2px 100px rgba(0, 0, 0, 0.1);

  position: relative;

  padding: 2rem;

  background-color: ${theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > div> h1{
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  & > div > h1 span{
    color: ${theme.colors.secondary};
  }

  & > div > p{
    font-weight: 400;
    color: ${theme.colors.tertiary};
    line-height: 1rem;
  }

  & > img{
    max-height: 2rem;
  }
`

export const NavigationContainer = styled.nav`
  margin-top: 3rem;
`

export const About = styled.div`
  padding: 1.5rem;
  margin-top: 4.75rem;

  box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.7),
  inset 2px 2px 4px rgba(189, 200, 223, 0.7);  border-radius: 1.5rem;

  p{
    color: ${theme.colors.tertiary};
    font-size: 0.87rem;

    span{
      font-weight: 700;
    }
  }
`