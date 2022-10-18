import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.5rem;

  display: flex;

  margin-top: -5.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

export const Avatar = styled.img`
  padding: 2rem 0;
  padding-left: 2.5rem;

  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: bold;
    font-size: 1.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      text-decoration: none;
      color: ${(props) => props.theme['brand-blue']};

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
      }
    }
  }

  .content {
  }

  .footer {
    display: flex;
    gap: 1.5rem;

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
