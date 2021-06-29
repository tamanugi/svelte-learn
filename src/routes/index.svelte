<script lang="ts">
import { fetchUsers } from '$lib/api/users';

  import InputUserName from '$lib/atoms/InputUserName.svelte';
  import ResultPane from '$lib/molecule/ResultPane.svelte';
  import UserList from '$lib/molecule/UserList.svelte';

  import { users } from '$lib/store';

  const handleSubmit = async (event) => {
    const name = event.detail.value;
    users.set(await fetchUsers(name))
  }
</script>

<InputUserName on:submit={handleSubmit}></InputUserName>

<div class="mt-6">
  <ResultPane />
</div>

<div>
  <UserList items={$users} />
</div>

<style>
</style>
