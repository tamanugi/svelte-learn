<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { TextField } from "svelte-materialify";

  let value;

  const dispatch = createEventDispatcher()

  const handleSubmit = () => dispatch('submit', {value});
</script>

<form on:submit|preventDefault={handleSubmit}>
  <TextField
    dense
    rounded
    outlined
    bind:value
    >type user name</TextField>
</form>