<script>
  //   export let fill = "#000000";
  let size = 30;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  width={size}
  viewBox="0 0 24 24"><g class="fill"><slot /></g></svg
>

<style lang="scss">
  .fill {
    fill: #ffffff;
  }
</style>
