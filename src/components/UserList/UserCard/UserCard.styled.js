import styled from 'styled-components';
import background from 'images/picture-min.png';

export const StyledUserCard = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 380px;
  height: 460px;

  background: ${({ theme }) => theme.colors.background};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${({ theme }) => theme.radii.small};

  .card-top {
    background: url(${background});
    background-position: top 20px center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }

  .logo {
    padding: 20px 0 0 20px;
  }

  .line {
    position: absolute;
    top: 214px;
    height: 8px;
    width: 100%;
    background: ${({ theme }) => theme.colors.light};
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  .avatar-wrapper {
    position: absolute;
    top: 178px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    border-radius: ${({ theme }) => theme.radii.round};
    background: ${({ theme }) => theme.colors.light};
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  .avatar {
    border-radius: ${({ theme }) => theme.radii.round};
    width: 62px;
    height: 62px;
    background: ${({ theme }) => theme.colors.background};
  }

  .card-bottom {
    text-align: center;
  }

  .text {
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.light};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  .text__followers {
    margin-top: 16px;
  }
`;

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  width: 196px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.tiny};
  background: ${props => {
    return props.isFollowing
      ? props.theme.colors.green
      : props.theme.colors.light;
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  margin-top: 26px;
  margin-bottom: 36px;
  transition: background ${({ theme }) => theme.transition};
`;
