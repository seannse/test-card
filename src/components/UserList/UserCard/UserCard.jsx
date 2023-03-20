import PropTypes from 'prop-types';
import logo from 'images/Logo-min.png';
import boy from 'images/Hansel.png';
import useStore from 'utils/store';
import { StyledButton, StyledUserCard } from './UserCard.styled';
import { operation } from 'utils/operations';

export const UserCard = ({ id, tweets, followers, isFollowing }) => {
  const toggleFollowing = useStore(state => state.toggleIsFollowing);

  const handleClick = () => () => {
    toggleFollowing({
      id,
      tweets,
      isFollowing: !isFollowing,
      followers: isFollowing
        ? operation.minus(followers, 1)
        : operation.plus(followers, 1),
    });
  };

  return (
    <StyledUserCard className="card">
      <div className="card-top">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="line" />
      <div className="avatar-wrapper">
        <img className="avatar" src={boy} alt="ava" />
      </div>
      <div className="card-bottom">
        <p className="text"> {tweets} Tweets </p>
        <p className="text text__followers">
          {followers.toLocaleString('en-En')} Followers
        </p>
        <StyledButton
          type="button"
          onClick={handleClick()}
          isFollowing={isFollowing}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </StyledButton>
      </div>
    </StyledUserCard>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
