<script lang="ts">
  import { ListItem, Avatar } from 'svelte-materialify';

  export let name: string;
  export let id: number;
</script>

<ListItem>
  <span slot="prepend">
    <Avatar>
      <img src="//picsum.photos/50?random={id}" alt="profile" /></Avatar
    >
  </span>
  {name}
  <span slot="subtitle">
    id: {id}
  </span>
</ListItem>
