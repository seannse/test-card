import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px;
  margin: 0 auto;
  width: 480px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 768px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 1280px;
  }
`;
