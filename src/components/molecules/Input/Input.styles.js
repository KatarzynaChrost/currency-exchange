import styled from "styled-components";

export const Wrapper = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  label,
  input {
    @media only screen and (max-width: 300px) {
      font-size: ${({ theme }) => theme.fontSize.s};
      max-width: 100%;
    }
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input[type=number] {
    margin: 10px 10px 10px 0;
    padding: 6px 10px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    width: 130px;
    max-width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    color:${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    :focus, :hover {
      outline: none !important;
      border: 1px solid ${({ theme }) => theme.colors.accent}
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    @media only screen and (max-width: 300px) {
      font-size: ${({ theme }) => theme.fontSize.s};
      width: 100%;
    }`;

export const SelectCurrency = styled.select`
  margin: 10px 10px 10px 0;
  padding: 6px 10px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: fit-content;
  font-family: "Montserrat", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  :focus,
  :hover {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
  @media only screen and (max-width: 300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 100%;
  }

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const SubmitButton = styled.input`
  margin: 20px 20px 20px 0;
  padding: 8px 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.accent};
  }
  @media only screen and (max-width: 300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
