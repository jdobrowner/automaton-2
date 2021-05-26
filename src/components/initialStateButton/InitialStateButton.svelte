<script lang="ts">
  import { colors, initialState } from '../../stores/SettingsStores';
  import { InitialStateOptions } from 'src/constants';
  import InitialStatePaths from './initialStatePaths';
  export let pattern: InitialStateOptions;
  export let title: string;
  let patternPaths: string[] = InitialStatePaths[pattern];
  let isSelected: boolean;

  $: isSelected = pattern === $initialState;
</script>

<div
  {title}
  on:click={() => initialState.set(pattern)}
  style="background-color:{isSelected ? $colors[2] : $colors[0]}"
>
  <svg viewBox="0 0 35 35">
    {#each patternPaths as pPath}
      <path d={pPath} stroke={isSelected ? $colors[0] : $colors[3]} stroke-width="2" fill="none" />
    {/each}
  </svg>
</div>

<style>
  div {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
</style>
