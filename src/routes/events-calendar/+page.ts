import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "Events Calendar",
  };
}) satisfies PageLoad;
