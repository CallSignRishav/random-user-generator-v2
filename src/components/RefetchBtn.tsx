"use client";

import { reFetchActionFn } from "@/app/action";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const RefetchBtn = () => {
  const router = useRouter();

  const reFetchFn = async () => {
    await reFetchActionFn();
    router.refresh();
  };

  return (
    <>
      <Button
        color="secondary"
        variant="bordered"
        size="lg"
        radius="lg"
        onPress={reFetchFn}
      >
        Refetch
      </Button>
    </>
  );
};

export default RefetchBtn;
