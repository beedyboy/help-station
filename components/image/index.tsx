import Image from "next/image";

type ImageProps = {
  src: string;
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
