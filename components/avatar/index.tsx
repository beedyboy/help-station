import Image from "next/image";
import clientAvatarOne from "@/public/images/help_station_clientAvatar.svg";

const ClientAvatars = () => {
  return (
    <div className="flex -space-x-3 overflow-hidden">
      <Image
        className="inline-block md:size-[40px] size-8 rounded-full ring-2 ring-white"
        src={clientAvatarOne}
        alt=""
        width={12}
        height={12}
      />
      <Image
        className="inline-block md:size-[40px] size-8 rounded-full ring-2 ring-white"
        src={clientAvatarOne}
        alt=""
        width={12}
        height={12}
      />
      <Image
        className="inline-block md:size-[40px] size-8 rounded-full ring-2 ring-white"
        src={clientAvatarOne}
        alt=""
        width={12}
        height={12}
      />
      <Image
        className="inline-block md:size-[40px] size-8 rounded-full ring-2 ring-white"
        src={clientAvatarOne}
        alt=""
        width={12}
        height={12}
      />
    </div>
  );
};

export default ClientAvatars;
