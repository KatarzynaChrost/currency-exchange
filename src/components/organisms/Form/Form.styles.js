import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  max-width: 550px;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 10px 10px 1px 0px #181818;
  @media only screen and (max-width: 550px) {
    height: 100vh;
    width: 100vh;
    padding: 25px 15px;
    border-radius: 0;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 20px 0;
  h1 {
    margin: 0;
    text-align: center;
  }
  @media only screen and (max-width: 300px) {
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  }
`;
