<script lang="ts">
  import { colors } from '../stores/SettingsStores';
  export let text = '';
  export let selected: boolean;
  export let onClick: () => void;
</script>

<div
  on:click={onClick}
  class:selected
  style="background-color:{selected ? $colors[2] : $colors[0]}"
>
  <p style="color:{selected ? $colors[0] : $colors[3]}">{text}</p>
</div>

<style>
  div {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>
