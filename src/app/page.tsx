import FetchData from "@/components/FetchData";
import LoadingCard from "@/components/LoadingCard";
import { Button } from "@nextui-org/button";
import { Suspense } from "react";

const page = async () => {
  return (
    <>
      <div className="bg-[url('/bg-pic.jpg')] bg-no-repeat bg-cover bg-center h-dvh">
        <div className="w-full h-[10%] flex justify-around items-center bg-black/10 backdrop-blur-lg backdrop-filter">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 from-10% to-orange-200 to-60% bg-clip-text text-transparent">
            RandomUserGenerator
          </div>

          <div className="">
            <Button color="secondary" variant="bordered" size="lg" radius="lg">
              Refetch
            </Button>
          </div>
        </div>

        <div className="grid place-items-center h-[90%]">
          <Suspense fallback={<LoadingCard />}>
            <FetchData />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
