import FetchData from "@/components/FetchData";
import LoadingCard from "@/components/LoadingCard";
import RefetchBtn from "@/components/RefetchBtn";
import { Suspense } from "react";

const page = async () => {
  return (
    <>
      <div className="bg-[url('/bg-pic.jpg')] bg-no-repeat bg-cover bg-center h-dvh">
        <div className="w-full h-[15%] lg:h-[10%] flex flex-col lg:flex-row justify-around items-center gap-1 bg-black/10 backdrop-blur-lg backdrop-filter p-2">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 from-10% to-orange-200 to-60% bg-clip-text text-transparent">
            RandomUserGenerator
          </div>

          <div className="">
            <RefetchBtn />
          </div>
        </div>

        <div className="grid place-items-center h-[85%] lg:[90%] p-3">
          <Suspense fallback={<LoadingCard />}>
            <FetchData />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
