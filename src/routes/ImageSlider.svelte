<script lang="ts">
  import { browser } from "$app/environment";

  import { onDestroy, onMount } from "svelte";

  let screenWidth = $state(
    (() => {
      if (browser) {
        return window.innerWidth;
      }
      return 0;
    })(),
  );

  let items = new Array(5).fill("");

  let currentItem = $state(0);
  let interacting = $state(false);

  let mouseTranslation = $state(0);

  $effect(() => {
    if (interacting) {
      clearInterval(currentTimeout);
    } else {
      startSliderLoop();
    }
  });

  function incrementItem() {
    startSliderLoop();

    if (currentItem == items.length - 1) {
      currentItem = 0;
      return;
    }
    currentItem++;
  }
  function decrementItem() {
    startSliderLoop();

    if (currentItem == 0) {
      currentItem = items.length - 1;
      return;
    }
    currentItem--;
  }

  let currentTimeout: number | undefined;

  function startSliderLoop() {
    clearTimeout(currentTimeout);

    currentTimeout = setTimeout(() => {
      if (interacting) {
        startSliderLoop();

        return;
      }

      incrementItem();
    }, 4000);
  }

  function handleResize(e: UIEvent) {
    screenWidth = window.innerWidth;
    console.log(screenWidth);
  }

  function handleMousePressDown() {
    interacting = true;
  }

  function handleMouseRelease(e: MouseEvent) {
    interacting = false;

    const swipeThreshold = 200;

    console.log(e.movementX - mouseTranslation);

    if (
      // mouseTranslation > swipeThreshold ||
      e.movementX - mouseTranslation <
      -35
    ) {
      decrementItem();
    } else if (
      // mouseTranslation < -swipeThreshold ||
      e.movementX - mouseTranslation >
      35
    ) {
      incrementItem();
    }

    mouseTranslation = 0;
  }

  function handleMouseMove(e: MouseEvent) {
    if (interacting) {
      mouseTranslation += e.movementX;
    }
  }

  onMount(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    startSliderLoop();
  });

  onDestroy(() => {
    if (!browser) return;

    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);
  });
</script>

<section>
  <div class="h-100 flex relative">
    <div
      onmousedown={handleMousePressDown}
      onmouseup={handleMouseRelease}
      class="w-screen flex overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <div
        class="bg-red-300 shrink-0 w-screen h-full"
        class:transition={!interacting}
        class:duration-500={!interacting}
        style="transform: translateX(-100%) translateX({-currentItem *
          screenWidth +
          mouseTranslation}px)"
      >
        last
      </div>
      {#each items as _, index}
        <div
          class="bg-red-300 shrink-0 w-screen h-full"
          class:transition={!interacting}
          class:duration-500={!interacting}
          style="transform: translateX(-100%) translateX({-(
            currentItem * screenWidth
          ) + mouseTranslation}px)"
        >
          {index}
        </div>
      {/each}
      <div
        class="bg-red-300 shrink-0 w-screen h-full"
        class:transition={!interacting}
        class:duration-500={!interacting}
        style="transform: translateX({items.length -
          1}00%) translateX({-currentItem * screenWidth + mouseTranslation}px)"
      >
        first
      </div>
    </div>

    <button
      onclick={decrementItem}
      class="p-4 rounded-full hover:bg-neutral-400/25 active:bg-neutral-700/25 transition cursor-pointer absolute ml-4 self-center"
      ><svg
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

    <button
      onclick={incrementItem}
      class="p-4 rounded-full hover:bg-neutral-400/25 active:bg-neutral-700/25 transition cursor-pointer absolute mr-4 self-center right-0"
      ><svg
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

  <div>
    {currentItem} - {interacting}
  </div>
</section>
