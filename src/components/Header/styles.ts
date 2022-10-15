import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 296px;

  display: flex;
  justify-content: space-between;

  background: rgba(11, 27, 43, 1);

  .left {
    background: linear-gradient(
      138deg,
      rgba(20, 88, 156, 0.25) 0%,
      rgba(11, 27, 43, 1) 58%,
      rgba(11, 27, 43, 1) 100%
    );
    img {
      margin-top: 4.375rem;
    }
  }

  .logo {
    margin-top: 4rem;
  }

  .right {
    background: linear-gradient(
      41deg,
      rgba(11, 27, 43, 1) 0%,
      rgba(11, 27, 43, 1) 58%,
      rgba(20, 88, 156, 0.25) 100%
    );
    img {
      margin-top: 1.875rem;
    }
  }
`;
