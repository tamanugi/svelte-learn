/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({query}) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    body: users.filter(({name}) => name.toLowerCase().includes(query.get('name')) )
  }
}