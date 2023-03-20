import { create } from 'zustand';
import immer from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { users } from './users';

const useStore = create(
  persist(
    set => ({
      users,
      toggleIsFollowing: updateUser =>
        set(
          immer(state => {
            state.users = state.users.map(user => {
              return user.id !== updateUser.id ? user : updateUser;
            });
          })
        ),
    }),
    {
      name: 'users',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useStore;
