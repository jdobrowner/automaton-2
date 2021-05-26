<script>
  import { colors as colorsStore } from '../stores/SettingsStores';
  import ColorThemes from '../colors';
  export let theme;
  let colors = ColorThemes[theme];
</script>

<div class="container" on:click={() => colorsStore.set(colors)}>
  <div class="color-sample" style="background-color:{colors[0]}" />
  <div class="color-sample" style="background-color:{colors[1]}" />
  <div class="color-sample" style="background-color:{colors[2]}" />
  <div class="color-sample" style="background-color:{colors[3]}" />
</div>

<style>
  .container {
    width: 100%;
    display: grid;
    cursor: pointer;
    grid-template-columns: 15px 15px;
    grid-template-rows: 15px 15px;
  }
  .color-sample {
    width: 100%;
    height: 100%;
  }
</style>
