import styled from 'styled-components';

export const StyledUserList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-direction: row;
  }
`;
