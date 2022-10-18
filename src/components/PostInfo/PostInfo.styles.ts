import styled from 'styled-components';

export const PostInfoContainer = styled.div`
  width: 100%;

  padding: 2rem;

  margin-top: -5.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);

  header {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      text-decoration: none;
      color: ${(props) => props.theme['brand-blue']};
      cursor: pointer;

      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .footer {
    margin-top: 0.5rem;
    display: flex;
    gap: 2rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const WrapperItens = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
