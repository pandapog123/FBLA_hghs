<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy, onMount } from "svelte";

  let screenWidth = $state(
    (() => {
      if (browser) return window.innerWidth;
      return 0;
    })(),
  );

  let items = new Array(5).fill("");

  let currentItem = $state(0);
  let interacting = $state(false);
  let animated = $state(true);
  let mouseTranslation = $state(0);
  let currentTimeout: number | undefined;

  function incrementItem() {
    currentItem++;
    scheduleLoop();
  }

  function decrementItem() {
    currentItem--;
    scheduleLoop();
  }

  function handleTransitionEnd() {
    if (currentItem < 0) {
      animated = false;
      currentItem = items.length - 1;
    } else if (currentItem >= items.length) {
      animated = false;
      currentItem = 0;
    }
    setTimeout(() => (animated = true), 0);
  }

  function scheduleLoop() {
    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => {
      if (!interacting) incrementItem();
    }, 4000);
  }

  function handleResize() {
    screenWidth = window.innerWidth;
  }

  function handleMousePressDown() {
    interacting = true;
    clearTimeout(currentTimeout);
  }

  function handleMouseRelease(e: MouseEvent) {
    interacting = false;

    if (e.movementX - mouseTranslation < -35) {
      decrementItem();
    } else if (e.movementX - mouseTranslation > 35) {
      incrementItem();
    } else {
      scheduleLoop();
    }

    mouseTranslation = 0;
  }

  function handleMouseMove(e: MouseEvent) {
    if (interacting) mouseTranslation += e.movementX;
  }

  onMount(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    scheduleLoop();
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);
    clearTimeout(currentTimeout);
  });
</script>

<section>
  <div class="relative h-100 overflow-hidden">
    <!-- Left clone -->
    <div
      class="absolute inset-0 flex cursor-grab active:cursor-grabbing"
      class:transition-transform={animated && !interacting}
      class:duration-500={animated && !interacting}
      style="transform: translateX(calc(-{items.length}00% + {-(
        currentItem * screenWidth
      ) + mouseTranslation}px))"
    >
      {#each items as _, index}
        <div class="bg-red-300 shrink-0 w-screen h-full">{index}</div>
      {/each}
    </div>

    <!-- Main strip -->
    <div
      onmousedown={handleMousePressDown}
      onmouseup={handleMouseRelease}
      ontransitionend={handleTransitionEnd}
      class="absolute inset-0 flex cursor-grab active:cursor-grabbing"
      class:transition-transform={animated && !interacting}
      class:duration-500={animated && !interacting}
      style="transform: translateX({-(currentItem * screenWidth) +
        mouseTranslation}px)"
    >
      {#each items as _, index}
        <div class="bg-red-300 shrink-0 w-screen h-full">{index}</div>
      {/each}
    </div>

    <!-- Right clone -->
    <div
      class="absolute inset-0 flex cursor-grab active:cursor-grabbing"
      class:transition-transform={animated && !interacting}
      class:duration-500={animated && !interacting}
      style="transform: translateX(calc({items.length}00% + {-(
        currentItem * screenWidth
      ) + mouseTranslation}px))"
    >
      {#each items as _, index}
        <div class="bg-red-300 shrink-0 w-screen h-full">{index}</div>
      {/each}
    </div>

    <!-- Left arrow -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={decrementItem}
      class="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full hover:bg-neutral-400/25 active:bg-neutral-700/25 transition cursor-pointer z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 stroke-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </button>

    <!-- Right arrow -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={incrementItem}
      class="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full hover:bg-neutral-400/25 active:bg-neutral-700/25 transition cursor-pointer z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 stroke-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </div>

  <!-- Dot indicators -->
  <div class="flex justify-center gap-2 mt-2">
    {#each items as _, index}
      <button
        onclick={() => {
          currentItem = index;
          scheduleLoop();
        }}
        class="w-2 h-2 rounded-full transition-all duration-400"
        class:bg-neutral-600={((currentItem % items.length) + items.length) %
          items.length ===
          index}
        class:w-6={((currentItem % items.length) + items.length) %
          items.length ===
          index}
        class:bg-neutral-300={((currentItem % items.length) + items.length) %
          items.length !==
          index}
      />
    {/each}
  </div>
</section>
