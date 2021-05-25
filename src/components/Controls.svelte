<script>
  import { colors } from '../stores/SettingsStores';

  let minimized = false;
</script>

<div class="container" class:minimized style="background-color:{$colors[1]};color:{$colors[3]}">
  <div class="triangle-container" on:click={() => (minimized = !minimized)} style="background-color:{$colors[0]}">
    <svg height="20" width="20">
      <path d="M18 2 L2 10 L18 18 Z" fill={$colors[2]} />
    </svg>
  </div>
  <div class="overflow-hidden">
    <div class="subcontainer">
      <h3>initial state</h3>
      <h3>ruleset</h3>
      <h3>speed</h3>
      <h3>randomness</h3>
      <h3>color</h3>
    </div>
</div>
</div>

<style lang="scss">
  .container {
    position: relative;
    height: 100%;
    width: 220px;
    transition: width 0.6s ease;
    // overflow: hidden;
  }
  .minimized {
    width: 0;
    .triangle-container {
      transform: rotate(180deg);
      right: -40px;
    }
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .subcontainer {
    width: 220px;
    padding: 20px;
    padding-top: 40px;
  }
  .triangle-container {
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(0deg);
    transition: 0.6s;
    cursor: pointer;
  }
</style>
