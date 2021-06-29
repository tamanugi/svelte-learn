<script>
  import { MaterialApp } from 'svelte-materialify';
</script>

<MaterialApp>
  <div class="container">
    <slot />
  </div>
</MaterialApp>

<style>
  .container {
    width: 80%;
    margin: 50px auto;
  }
</style>
