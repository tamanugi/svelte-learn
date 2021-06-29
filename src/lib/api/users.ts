import type { User } from "$lib/types"
 
export const fetchUsers = (name): Promise<User[]> => {
  return fetch(`/api/users.json?name=${name}`).then(res => res.json());
}