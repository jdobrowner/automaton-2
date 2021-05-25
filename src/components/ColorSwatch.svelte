<script>
    export let colors;
</script>

<div class="container" onClick={()=>{}} >
    <div class="color-sample" style={{backgroundColor: colors[0]}}></div>
    <div class="color-sample" style={{backgroundColor: colors[1]}}></div>
    <div class="color-sample" style={{backgroundColor: colors[2]}}></div>
    <div class="color-sample" style={{backgroundColor: colors[3]}}></div>
</div>

  <style>
      .container {
          display: grid;
          cursor: pointer;
          grid-template-columns: 12px 12px;
          grid-template-rows: 12px 12px;
          
      }
      .color-sample {
          width: 100%;
          height: 100%;
      }
  </style>