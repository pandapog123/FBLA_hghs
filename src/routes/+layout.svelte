<script lang="ts">
  import { page } from "$app/state";
  import type { LayoutProps } from "./$types";
  import Header from "./Header.svelte";
  import "./layout.css";

  let { children }: LayoutProps = $props();

  const title = $derived(page.data.title);
</script>

<svelte:head>
  <link rel="icon" href="/brand/logo.png" />
  <title>{title ? title + " | HGHS FBLA" : "HGHS FBLA"}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />

{@render children()}

<footer></footer>
