import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "Our Leadership",
  };
}) satisfies PageLoad;
