<script lang="ts">
  import type { Snippet } from "svelte";
  import { fade, fly } from "svelte/transition";

  const defaultMenuItemClass =
    "font-medium text-lg" +
    " hover:bg-neutral/5 active:bg-neutral/10 focus:bg-neutral/5 transition-[background,outline]" +
    " p-2 py-3 rounded-lg" +
    " outline-solid outline-neutral/30 outline-0 outline-offset-0 focus:outline-2";

  const navTriggerClass =
    defaultMenuItemClass +
    " leading-none flex gap-1 items-center pr-1 relative";

  const { children, content }: { children: Snippet; content: Snippet } =
    $props();

  let showContent = $state(false);
  let currentTimeout: number | undefined;
</script>

<li
  class="group relative"
  onmouseenter={() => {
    currentTimeout = setTimeout(() => {
      showContent = true;
    }, 150);
  }}
  onmouseleave={() => {
    clearTimeout(currentTimeout);
    showContent = false;
  }}
>
  <button
    class="{navTriggerClass} {showContent && 'bg-neutral/5'}"
    onclick={() => {
      clearTimeout(currentTimeout);
      showContent = !showContent;
    }}
  >
    <span> {@render children()} </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="size-4 transition-transform duration-200"
      class:rotate-180={showContent}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </button>

  {#if showContent}
    <div
      class="absolute top-full w-full left-0"
      in:fly={{ duration: 100, opacity: 0, y: -8 }}
      out:fade={{ duration: 100 }}
      onclick={() => {
        clearTimeout(currentTimeout);
        showContent = false;
      }}
    >
      <div
        class="bg-white border border-neutral/10 rounded-xl shadow p-1 mt-2 min-w-full w-max flex justify-start"
      >
        {@render content()}
      </div>
    </div>
  {/if}
</li>
