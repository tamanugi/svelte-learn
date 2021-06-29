<script lang="ts">
  import { List } from 'svelte-materialify';
  import UserItem from '$lib/molecule/UserItem.svelte';
  import type { User } from '$lib/types';

  export let items: User[];
</script>

<List class="elevation-2 mt-5">
  {#each items as item, i}
    <UserItem name={item.name} id={item.id} />
  {/each}
</List>
