import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
export const FormWr = styled(Form)`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  width: 400px;
  min-height: 200px;
  border: 1px solid;
  padding: 15px;
  border-radius: 10px;
`;
export const Input = styled(Field)`
  height: 25px;
  margin-bottom: 12px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  padding: 0 10px;
  :focus {
    box-shadow: rgba(129, 177, 219, 0.48) 6px 2px 16px 0px,
      rgba(245, 218, 218, 0.8) -6px -2px 16px 0px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
`;
export const Button = styled.button`
  height: 25px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  :hover {
    background-color: #7e98df;
    color: #ffffff;
  }

  transition: background-color 0.4s, color 0.4s;
`;
export const Error = styled(ErrorMessage)`
  font-size: 15px;
`;
