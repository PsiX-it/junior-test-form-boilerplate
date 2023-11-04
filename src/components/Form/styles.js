import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 14px;
  border-radius: 7px;
  border: 1px solid #ccc;
  width: 100%;
  outline: none;

  &.hasError {
    border: 1px solid red;
    color: red;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

export const SubmitButton = styled.button`
  background-color: #005bff;
  color: #fff;
  border-radius: 7px;
  border: 1px solid #007bff;
  font-size: 13px;
  font-weight: bold;
  width: 150px;
  height: 30px;
  cursor: pointer;
`;

export const FieldsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: #005bff;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
