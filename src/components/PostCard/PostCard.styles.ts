import styled from 'styled-components';

export const PostCardContainer = styled.div`
  width: 100%;
  height: 15.5rem;
  border: 0;
  border-radius: 10px;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};

  header {
    display: flex;
    justify-content: space-between;
    align-items: top;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    span {
      line-height: 2rem;
      vertical-align: middle;
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  main {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};
  }
`;
