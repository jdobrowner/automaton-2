<script lang="ts">
  import { ColorThemeNames, InitialStateOptions, Rulesets } from 'src/constants';
  import { colors, cellStates, ruleset } from '../stores/SettingsStores';
  import ColorSwatch from './ColorSwatch.svelte';
  import InitialStateButton from './initialStateButton/InitialStateButton.svelte';
  import TextButton from './TextButton.svelte';
  import ColorThemes from '../colors';

  let minimized = false;
</script>

<div
  class="container transition"
  class:minimized
  style="background-color:{$colors[1]};color:{$colors[3]}"
>
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
        <TextButton text="4" onClick={() => cellStates.set(4)} selected={$cellStates === 4} />
        <TextButton text="5" onClick={() => cellStates.set(5)} selected={$cellStates === 5} />
        <TextButton text="6" onClick={() => cellStates.set(6)} selected={$cellStates === 6} />
        <TextButton text="7" onClick={() => cellStates.set(7)} selected={$cellStates === 7} />
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
      <div class="ruleset">
        <TextButton
          text="expander"
          onClick={() => ruleset.set(Rulesets.EXPANDER)}
          selected={$ruleset === Rulesets.EXPANDER}
        />
        <TextButton
          text="harmony"
          onClick={() => ruleset.set(Rulesets.HARMONY)}
          selected={$ruleset === Rulesets.HARMONY}
        />
        <TextButton
          text="mangler"
          onClick={() => ruleset.set(Rulesets.MANGLER)}
          selected={$ruleset === Rulesets.MANGLER}
        />
        <TextButton
          text="swirls"
          onClick={() => ruleset.set(Rulesets.SWIRLS)}
          selected={$ruleset === Rulesets.SWIRLS}
        />
        <TextButton
          text="birds"
          onClick={() => ruleset.set(Rulesets.BIRDS)}
          selected={$ruleset === Rulesets.BIRDS}
        />
        <TextButton
          text="horizons"
          onClick={() => ruleset.set(Rulesets.HORIZONS)}
          selected={$ruleset === Rulesets.HORIZONS}
        />
        <TextButton
          text="billow"
          onClick={() => ruleset.set(Rulesets.BILLOW)}
          selected={$ruleset === Rulesets.BILLOW}
        />
      </div>

      <!-- Color -->
      <h3>color</h3>
      <div class="color">
        <div class="color-row">
          <ColorSwatch theme={ColorThemeNames.SOUTHWEST} />
          <ColorSwatch theme={ColorThemeNames.BRIGHTS} />
        </div>
        <div class="color-row">
          <ColorSwatch theme={ColorThemeNames.OCEAN} />
          <ColorSwatch theme={ColorThemeNames.RED} />
        </div>
        <div class="color-row">
          <ColorSwatch theme={ColorThemeNames.GREEN} />
          <ColorSwatch theme={ColorThemeNames.PURPLE} />
        </div>
      </div>

      <!-- Speed -->
      <h3>speed</h3>

      <!-- Randomness -->
      <h3>randomness</h3>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    height: 100%;
    width: 220px;
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
    overflow-y: scroll;
    height: 100vh;
    max-height: 100vh;
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
  .initial-states,
  .cell-states,
  .ruleset,
  .color {
    display: grid;
    gap: 15px;
  }
  .initial-states {
    grid-template-columns: 30px 30px 30px;
  }
  .cell-states {
    grid-template-columns: 30px 30px 30px 30px;
  }
  .ruleset {
    grid-template-columns: 1fr 1fr;
  }
  .color {
    justify-content: flex-start;
    .color-row {
      display: flex;
    }
  }
</style>
