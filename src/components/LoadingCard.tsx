import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";
import { AtSign, Phone, Calendar, MapPin } from "lucide-react";

const LoadingCard = () => {
  return (
    <>
      <Card className="lg:w-[400px]  bg-white/10  backdrop-blur-xl text-white">
        <CardHeader className="flex flex-col justify-center items-center gap-3">
          <div className="rounded-full">
            <Skeleton className="rounded-full">
              <Image
                src="/favicon.ico"
                width={250}
                height={250}
                radius="full"
              />
            </Skeleton>
          </div>

          <div className="text-center text-2xl font-bold">
            <Skeleton className="rounded-full ">Harry Potter</Skeleton>
          </div>
        </CardHeader>

        <Divider />

        <CardBody className="grid grid-cols-5 items-center gap-2">
          <div className="flex justify-center">
            <AtSign size={35} />
          </div>

          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">harrypotter@gmail.com</Skeleton>
          </div>

          <div className="flex justify-center">
            <Phone size={35} />
          </div>

          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">987654320</Skeleton>
          </div>

          <div className="flex justify-center">
            <Calendar size={35} />
          </div>

          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">25 years</Skeleton>
          </div>

          <div className="flex justify-center">
            <MapPin size={35} />
          </div>

          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">London, UK</Skeleton>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingCard;
