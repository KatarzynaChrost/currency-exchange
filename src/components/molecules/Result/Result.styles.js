import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 200;
    margin-bottom: 0;
    @media only screen and (max-width: 300px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const ExchangeRate = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  padding-left: 20px;
  border-radius: 5px;
  box-shadow: 8px 8px 1px 0px #181818;
  max-width: 100vw;
  h3 {
    font-weight: 400;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 200;
  }
  @media only screen and (max-width: 300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding-left: 8px;
  }
`;

export const ResultWrapper = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 200;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 12px;
    span {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.accent};
    }
    @media only screen and (max-width: 300px) {
      font-size: 24px;
    }
  }
`;
