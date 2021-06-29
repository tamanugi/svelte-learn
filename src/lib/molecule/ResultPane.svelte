<script lang="ts">
  import ResultCount from '$lib/atoms/ResultCount.svelte';
  import SortSelector from '$lib/atoms/SortSelector.svelte';

  import { users, usersCount } from '$lib/store'

  let asc_desc: 'asc' | 'desc' = 'asc';

  const handleSortChange = () => { users.sort(asc_desc) }
</script>

<div class="d-flex justify-space-around align-center">
  <ResultCount count={$usersCount} />
  <SortSelector bind:value={asc_desc} on:change={handleSortChange}/>
</div>
