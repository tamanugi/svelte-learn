import { writable, derived } from 'svelte/store';

export const users = createUsers();
export const usersCount = derived(users, $users => $users.length)
export const selectedSort = writable('asc');

function createUsers() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    set,
    sort: (asc_desc) => update(v => {
      const sortArray = [...v];
      sortArray.sort((a, b) => asc_desc === 'asc' ? a.id - b.id : b.id - a.id)
      return sortArray;
    })
  }
}
