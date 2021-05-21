<script>
  import Icon from "./icon/Icon.svelte";
  import Triangle from "./icon/paths/Triangle.svelte";

  let minimized = false;
</script>

<div class="container" class:minimized>
  <div class="triangle-container" on:click={() => (minimized = !minimized)}>
    <Icon><Triangle /></Icon>
  </div>
</div>

<style lang="scss">
  .container {
    height: 100%;
    width: 250px;
    background-color: black;
    transition: width 0.6s ease;
    display: flex;
    flex-direction: column;
  }
  .minimized {
    width: 45px;
    .triangle-container {
      transform: rotate(90deg);
    }
  }
  .triangle-container {
    align-self: flex-end;
    width: fit-content;
    margin: 10px;
    transform: rotate(270deg);
    transition: 0.6s;
    cursor: pointer;
  }
</style>
