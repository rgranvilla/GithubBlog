import styled from 'styled-components';

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`;

export const PostLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }
`;
