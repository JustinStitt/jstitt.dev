<script>
  import Navbar from "./lib/Navbar.svelte";
  import Modal from "./lib/Modal.svelte";
  console.log("loaded");

  let completed_task = false;
  let show_modal = false;
  const hideModal = () => {
    if (completed_task === true) show_modal = false;
  };
</script>

<main>
  <Navbar />
  {#if show_modal}
    <Modal
      on:click={hideModal}
      on:task={() => {
        completed_task = true;
      }}
    />
  {/if}
  <h2>🔧 In development 🔧<br /> Check back later.</h2>
  <button
    on:click={() => {
      show_modal = true;
    }}>Show Modal</button
  >
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }

  h2 {
    padding: 5px;
    border: 4px dashed yellow;
  }
</style>
