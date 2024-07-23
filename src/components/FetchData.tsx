import { UserType } from "@/utils/usertype";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import ky from "ky";
import { AtSign, Calendar, MapPin, Phone } from "lucide-react";

const FetchData = async () => {
  const response = await ky
    .get("https://randomuser.me/api/", {
      cache: "no-cache",
      next: { tags: ["randomuser"] },
    })
    .json<any>();

  const data = (await response.results[0]) as UserType;

  // const myData = data.results[0] as UserType;

  return (
    <>
      <Card className="lg:w-[400px] bg-black/10 border border-blue-800 backdrop-blur-sm backdrop-filter text-white py-5">
        <CardHeader className="flex flex-col justify-center items-center gap-3">
          <div className="rounded-full">
            <Image
              src={data.picture.large}
              width={200}
              height={200}
              radius="full"
            />
          </div>

          <div className="text-center text-2xl font-bold">
            {data.name.first} {data.name.last}
          </div>
        </CardHeader>

        <Divider />

        <CardBody className="grid grid-cols-5 items-center gap-2">
          <div className="flex justify-center">
            <AtSign size={35} />
          </div>

          <div className="col-span-4 text-xl">{data.email}</div>

          <div className="flex justify-center">
            <Phone size={35} />
          </div>

          <div className="col-span-4 text-xl">{data.cell}</div>

          <div className="flex justify-center">
            <Calendar size={35} />
          </div>

          <div className="col-span-4 text-xl">{data.dob.age} years</div>

          <div className="flex justify-center">
            <MapPin size={35} />
          </div>

          <div className="col-span-4 text-xl">
            {data.location.city}, {data.location.country}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default FetchData;
