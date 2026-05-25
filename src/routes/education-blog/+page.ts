import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "Education Blog",
  };
}) satisfies PageLoad;
