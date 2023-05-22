<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const dimmerClick = () => {
    dispatch("click", {});
  };

  const completeTask = () => {
    dispatch("task", {});
  };
</script>

<div class="dimmer" on:click={dimmerClick} on:keydown={dimmerClick} />
<div class="main">
  <h2>Prove that you're Human...</h2>
  <button on:click={completeTask}>Complete Task</button>
</div>

<style>
  .dimmer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--kanagawa-sumiInk1);
    filter: opacity(0.6);
    backdrop-filter: blur(20px) brightness(10%);
  }

  .main {
    position: absolute;
    width: 50%;
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: var(--kanagawa-sumiInk1);
    border: 0.2vw solid var(--kanagawa-fujiWhite);
    border-radius: 5%;
  }
</style>
