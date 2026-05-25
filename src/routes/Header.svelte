<script lang="ts">
  import { menuShown } from "$lib/menu/store";
  import NavMenuItem from "./NavMenuItem.svelte";

  const defaultMenuItemClass =
    "font-medium text-lg" +
    " hover:bg-neutral/5 active:bg-neutral/10 focus:bg-neutral/5 transition-[background,outline]" +
    " p-3 rounded-lg" +
    " outline-solid outline-neutral/30 outline-0 outline-offset-0 focus:outline-2 flex leading-none";
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
      {#snippet AboutContent()}
        <ul class="shrink-0 flex flex-col gap-1">
          <a
            href="/about"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            About Us
          </a>

          <a
            href="/competitions"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            Competitions
          </a>

          <a
            href="/education-blog"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            Education Blog
          </a>
        </ul>
      {/snippet}
      <NavMenuItem content={AboutContent}>About</NavMenuItem>

      {#snippet ContactContent()}
        <ul class="shrink-0 flex flex-col gap-1">
          <a
            href="/contact"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            Contact Us
          </a>

          <a
            href="https://www.instagram.com/hghsfbla"
            target="_blank"
            class="px-2 py-2 pr-4 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors flex justify-between items-center gap-4"
          >
            <div class="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class=""
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                  d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8"
                /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path
                  d="M16.5 7.5v.01"
                /></svg
              >

              <span> Instagram </span>
            </div>
          </a>
        </ul>
      {/snippet}
      <NavMenuItem content={ContactContent}>Contact</NavMenuItem>

      {#snippet EventsContent()}
        <ul class="shrink-0 flex flex-col gap-1">
          <a
            href="/events-calendar"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            Events Calendar
          </a>

          <a
            href="/events-blog"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            Events Blog
          </a>
        </ul>
      {/snippet}
      <NavMenuItem content={EventsContent}>Events</NavMenuItem>

      {#snippet SupportUsContent()}
        <ul class="shrink-0 flex w-full flex-col gap-1">
          <a
            href="/donations"
            class="px-2 py-2 hover:bg-neutral/5 active:bg-neutral-/10 font-medium w-full rounded-lg transition-colors"
          >
            Donations
          </a>
        </ul>
      {/snippet}
      <NavMenuItem content={SupportUsContent}>Support Us</NavMenuItem>

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
