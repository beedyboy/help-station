import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImageProps = {
  src: string | StaticImport;
};

const ImageTemplate = ({ src }: ImageProps) => {
  return (
    <Image
      src={src}
      alt=""
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  );
};

export default ImageTemplate;
