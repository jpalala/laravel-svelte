<script>
 let count = 0;
 
 function handleClick() {
  count += 1;
 }
</script>
<main>
  <button on:click={handleClick}>
   clicks: {count}
  </button>
</main>
