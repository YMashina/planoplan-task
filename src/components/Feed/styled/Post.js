import styled from 'styled-components';

const Post = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  width: ${(props) => (props.width ? props.width : '10rem')};
  padding: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.24);
  }
`;

export default Post;
