import useStore from '../../utils/store';
import { UserCard } from './UserCard/UserCard';
import { StyledUserList } from './UserList.styled';

export const UserList = () => {
  const users = useStore(state => state.users);

  return (
    <StyledUserList>
      {users.map(({ id, tweets, followers, isFollowing }) => (
        <UserCard
          key={id}
          id={id}
          tweets={tweets}
          followers={followers}
          isFollowing={isFollowing}
        />
      ))}
    </StyledUserList>
  );
};
