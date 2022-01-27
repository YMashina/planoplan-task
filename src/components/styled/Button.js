import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 4px;
  padding: 0 0.5rem;
  font-size: 14px;
  align-self: ${(props) => props.alignSelf};
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  background: ${(props) => {
    if (props.active) {
      if (!props.background) {
        return '#3f76c9';
      } else {
        return props.background;
      }
    } else {
      return '#eee';
    }
  }};
  color: ${(props) => {
    if (props.active) {
      if (!props.color) {
        return '#FFFFFF';
      } else {
        return props.color;
      }
    } else {
      return '#656565';
    }
  }};
  cursor: ${(props) => (props.active ? 'pointer' : 'auto')};
  border: none;
  transition: 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${(props) =>
      props.active && props.background !== 'none' && '#5a91e3'};
  }
`;

export default Button;
