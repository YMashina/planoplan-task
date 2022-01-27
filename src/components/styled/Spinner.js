import styled from 'styled-components';

const Spinner = styled.div`
  height: 3rem;
  width: 3rem;
  border: 2px solid #7e7e7e;
  border-radius: 50%;
  border-right-color: transparent;
  flex-shrink: 0;
  align-self: ${(props) => props.alignSelf};
  animation: spin 0.5s linear infinite;
  margin: 1rem;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
