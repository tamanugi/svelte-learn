<script lang="ts">
  import { Select } from 'svelte-materialify';

  const items = [
    { name: 'asc', value: 'asc' },
    { name: 'desc', value: 'desc' }
  ];

  export let value: 'asc' | 'desc' = 'asc';
</script>

<Select {items} bind:value on:change>Sort By</Select>
