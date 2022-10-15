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

  .header {
    display: flex;
    justify-content: space-between;

    font-weight: bold;
    font-size: 1.5rem;

    a {
      font-size: 0.75rem;
    }
  }

  .content {
  }

  .footer {
    display: flex;
    gap: 1.5rem;
  }
`;

export const WrapperItens = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
