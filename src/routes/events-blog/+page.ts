import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "Events Blog",
  };
}) satisfies PageLoad;
