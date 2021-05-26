<script>
  import { colors as colorsStore, cellStates } from '../stores/SettingsStores';
  import ColorThemes from '../colors';
  export let theme;
  let colors = ColorThemes[theme];
</script>

<div class="container" on:click={() => colorsStore.set(colors)}>
  <div class="color-sample" style="background-color:{colors[0]}" />
  <div class="color-sample" style="background-color:{colors[1]}" />
  <div class="color-sample" style="background-color:{colors[2]}" />
  <div class="color-sample" style="background-color:{colors[3]}" />
  {#if $cellStates > 4}<div class="color-sample" style="background-color:{colors[1]}" />{/if}
  {#if $cellStates > 5}<div class="color-sample" style="background-color:{colors[2]}" />{/if}
  {#if $cellStates > 6}<div class="color-sample" style="background-color:{colors[3]}" />{/if}
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }
  .color-sample {
    width: 11px;
    height: 30px;
  }
</style>
