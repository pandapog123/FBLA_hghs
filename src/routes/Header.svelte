<script lang="ts">
  import { menuShown } from "$lib/menu/store";

  const navMenuOptions = ["About", "Contact", "Events", "Support Us"] as const;
  let currentNavMenu = $state<(typeof navMenuOptions)[number] | undefined>(
    undefined,
  );

  const defaultMenuItemClass =
    "font-medium text-lg" +
    " hover:bg-neutral/10 active:bg-neutral/5 focus:bg-neutral/10 transition-[background]" +
    " p-2 rounded" +
    " outline-solid outline-neutral/30 outline-0 outline-offset-0 focus:outline-2 transition-[outline]";

  const navTriggerClass =
    defaultMenuItemClass + " leading-none flex gap-1 items-center pr-1";
</script>

<header class="px-12 py-6 flex justify-between items-center gap-16">
  <div>
    <a href="/" class="rounded-full">
      <img
        src="/brand/logo.png"
        alt="HGHS FBLA Logo"
        class="object-fill w-32 h-32"
      />
    </a>
  </div>

  <nav>
    <ul class="hidden hide-menu:flex gap-2 items-center">
      {#each navMenuOptions as menuOption}
        <li>
          <button
            class={navTriggerClass}
            onmouseenter={() => {
              currentNavMenu = menuOption;
            }}
            onmouseleave={() => {
              currentNavMenu = undefined;
            }}
            onclick={() => {
              if (currentNavMenu != menuOption) {
                currentNavMenu = menuOption;
              } else {
                currentNavMenu = undefined;
              }
            }}
          >
            <span> {menuOption} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4 transition-transform duration-200"
              class:rotate-180={currentNavMenu === menuOption}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </li>
      {/each}
      <!-- <li>
        <button class={navTriggerClass}>
          <span> About </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4 transition-transform duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </li>
      <li>
        <button class={navTriggerClass}>
          <span> Contact </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4 transition-transform duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </li>
      <li>
        <button class={navTriggerClass}>
          <span> Events </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4 transition-transform duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </li>
      <li>
        <button class={navTriggerClass}>
          <span class=""> Support Us </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4 transition-transform duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </li> -->
      <li>
        <a href="/officers" class={defaultMenuItemClass}> Our Leadership </a>
      </li>
      <li>
        <a
          href="/shop"
          class="ml-1 {defaultMenuItemClass} text-off-neutral bg-primary hover:bg-primary/90 focus:bg-primary/90 active:bg-primary/80 px-3"
        >
          Shop
        </a>
      </li>
    </ul>

    <button
      class="hide-menu:hidden p-4 rounded-xl hover:bg-neutral/10 active:bg-neutral/20 transition cursor-pointer"
      aria-label="Open Navigation Menu"
      inert={$menuShown}
      onclick={() => {
        $menuShown = true;
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 stroke-2 size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </nav>
</header>
