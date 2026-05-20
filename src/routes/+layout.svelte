<script lang="ts">
  import "./layout.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/brand/logo.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class="px-12 py-6 flex justify-between items-center gap-16">
  <div>
    <a href="/">
      <img
        src="/brand/logo.png"
        alt="HGHS FBLA Logo"
        class="object-fill w-32 h-32"
      />
    </a>
  </div>

  <nav>
    <ul class="hidden md:flex gap-4">
      <li><a href="" class="font-medium text-lg">About Us</a></li>
      <li><a href="" class="font-medium text-lg">Support Us</a></li>
      <li><a href="" class="font-medium text-lg">Our Leadership</a></li>
      <li><a href="/contact" class="font-medium text-lg">Contact</a></li>
      <li><a href="/shop" class="font-medium text-lg">Shop</a></li>
    </ul>

    <button
      class="md:hidden p-4 rounded-xl hover:bg-neutral-200 active:bg-neutral-300 transition cursor-pointer"
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

{@render children()}

<footer></footer>
