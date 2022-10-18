import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      text-align: right;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 6px;
  padding: 0.75rem 1rem;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-border']};
  outline: none;

  transition: border-color 0.2s;

  &:hover {
    border: 1px solid ${(props) => props.theme['brand-blue']};
  }

  &:not(:placeholder-shown) {
    border: 1px solid ${(props) => props.theme['brand-blue']};
  }
`;
