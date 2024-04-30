import { StaticImageData } from "next/image";

function imagesContext(): any {
  return (require as any).context(
    "../../../assets/gathering",
    true, // Whether to recursively search subdirectories
    /\.(jpg|jpeg|png|gif|svg)$/
  );
}

const imagesContextKeys = imagesContext();

const images = imagesContextKeys
  .keys()
  ?.filter((key: string) => key.includes("gathering"))
  .map((key: string) => imagesContextKeys(key));

export const imgs: StaticImageData[] = [...images].reverse();
