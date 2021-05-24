<script lang="typescript">
    import { InitialStateOptions } from 'src/constants';
    import InitialStatePaths from './initialStatePaths';
    export let pattern: InitialStateOptions;
    export let title: string;
    export let colors: string[] = [];

    let patternPaths: string[] = InitialStatePaths[pattern];
</script>

<div {title} onClick={() => {}} style="background-color={colors[0]}">
    <svg viewBox="0 0 35 35">
      {#each patternPaths as pPath}
        <path d={pPath} stroke={colors[3]} stroke-width="2" fill="none" />
      {/each}
  </svg>
</div>

<style>
    div {
        width: 30px;
        height: 30px;
    }
</style>