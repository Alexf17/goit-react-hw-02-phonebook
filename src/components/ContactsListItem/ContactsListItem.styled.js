import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

export const Number = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

export const ButtonDelete = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: block;
  font-size: 15px;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover,
  &:focus {
    background-color:lightgray;
  }
`;