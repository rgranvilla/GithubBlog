import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 8rem;

  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  text-align: justify;

  .content {
    margin-top: 2.5rem;
    width: 100%;
  }

  p {
    padding-bottom: 0.75rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['brand-blue']};
  }

  img {
    max-width: 100%;
    max-height: auto;
  }
`;
