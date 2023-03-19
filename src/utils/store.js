import { create } from 'zustand';
import immer from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { users } from './users';

const useStore = create(
  persist(
    set => ({
      users,
      increaseFollowers: id =>
        set(
          immer(state => {
            state.users[id].followers = state.users[id].followers + 1;
          })
        ),
      decreaseFollowers: id =>
        set(
          immer(state => {
            state.users[id].followers = state.users[id].followers - 1;
          })
        ),

      toggleIsFollowing: id =>
        set(
          immer(state => {
            state.users[id].isFollowing = !state.users[id].isFollowing;
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
