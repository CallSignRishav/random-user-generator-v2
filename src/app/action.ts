"use server";

import { revalidateTag } from "next/cache";

export const reFetchActionFn = () => {
  revalidateTag("randomuser");
};
