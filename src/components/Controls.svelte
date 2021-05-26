<script lang="ts">
  import { InitialStateOptions } from 'src/constants';
  import { colors, cellStates } from '../stores/SettingsStores';
  import InitialStateButton from './initialStateButton/InitialStateButton.svelte';
  import TextButton from './TextButton.svelte';

  let minimized = false;
  const selectCellStates = (num: number) => cellStates.set(num);
</script>

<div class="container" class:minimized style="background-color:{$colors[1]};color:{$colors[3]}">
  <div
    class="triangle-container"
    on:click={() => (minimized = !minimized)}
    style="background-color:{$colors[0]}"
  >
    <svg height="20" width="20">
      <path d="M18 2 L2 10 L18 18 Z" fill={$colors[2]} />
    </svg>
  </div>
  <div class="overflow-hidden">
    <div class="subcontainer">
      <!-- Cell States -->
      <h3>cell states</h3>
      <div class="cell-states">
        <TextButton text="4" onClick={() => selectCellStates(4)} selected={$cellStates === 4} />
        <TextButton text="5" onClick={() => selectCellStates(5)} selected={$cellStates === 5} />
        <TextButton text="6" onClick={() => selectCellStates(6)} selected={$cellStates === 6} />
        <TextButton text="7" onClick={() => selectCellStates(7)} selected={$cellStates === 7} />
      </div>

      <!-- Initial State -->
      <h3>initial state</h3>
      <div class="initial-states">
        <InitialStateButton pattern={InitialStateOptions.LITTLE_TRIANGLE} />
        <InitialStateButton pattern={InitialStateOptions.NESTED_TRIANGLE} />
        <InitialStateButton pattern={InitialStateOptions.HEXAGON} />
        <InitialStateButton pattern={InitialStateOptions.BORDER} />
        <InitialStateButton pattern={InitialStateOptions.FACE} />
        <InitialStateButton pattern={InitialStateOptions.TRIFORCE} />
      </div>

      <!-- Ruleset -->
      <h3>ruleset</h3>

      <!-- Speed -->
      <h3>speed</h3>

      <!-- Randomness -->
      <h3>randomness</h3>

      <!-- Color -->
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
  .initial-states {
    display: grid;
    gap: 15px;
    grid-template-columns: 30px 30px 30px;
  }
  .cell-states {
    display: grid;
    gap: 15px;
    grid-template-columns: 30px 30px 30px 30px;
  }
</style>
