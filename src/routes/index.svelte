<script lang="ts">
  import InputUserName from '$lib/atoms/InputUserName.svelte';
  import ResultPane from '$lib/molecule/ResultPane.svelte';
  import UserList from '$lib/molecule/UserList.svelte';

  import { users } from '$lib/store';

  const handleSubmit = (event) => {
    const typeName = event.detail.value;

    // TODO: fetch users
    users.set([
      {id: 1, name: 'hoge'},
      {id: 2, name: 'hoge'},
    ])
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
