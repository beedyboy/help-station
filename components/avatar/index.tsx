import Image from "next/image";
import client1 from "@/public/images/help_station_hearse.svg";

const ClientAvatars = () => {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      <Image
        className="inline-block size-6 rounded-full ring-2 ring-white"
        src={client1}
        alt=""
        width={8}
        height={8}
      />
      <Image
        className="inline-block size-6 rounded-full ring-2 ring-white"
        src={client1}
        alt=""
        width={8}
        height={8}
      />
      <Image
        className="inline-block size-6 rounded-full ring-2 ring-white"
        src={client1}
        alt=""
        width={8}
        height={8}
      />
      <Image
        className="inline-block size-6 rounded-full ring-2 ring-white"
        src={client1}
        alt=""
        width={8}
        height={8}
      />
    </div>
  );
};

export default ClientAvatars;
