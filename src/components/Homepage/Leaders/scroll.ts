import { StaticImageData } from "next/image";

function imagesContextLeft(): any {
  return (require as any).context(
    "../../../assets/homepage/leaders/left",
    false, // Whether to recursively search subdirectories
    /\.(jpg|jpeg|png|gif|svg)$/
  );
}

function imagesContextRight(): any {
  return (require as any).context(
    "../../../assets/homepage/leaders/right",
    false, // Whether to recursively search subdirectories
    /\.(jpg|jpeg|png|gif|svg)$/
  );
}

const imagesContextLeftKeys = imagesContextLeft();
const imagesContextRightKeys = imagesContextRight();

const imagesLeft = imagesContextLeftKeys
  .keys()
  ?.filter((key: string) => key.includes("left"))
  .map((key: string) => imagesContextLeftKeys(key));

const imagesRight = imagesContextRightKeys
  .keys()
  ?.filter((key: string) => key.includes("right"))
  .map((key: string) => imagesContextRightKeys(key));

export const leftIcons: StaticImageData[] = [...imagesLeft];
export const rightIcons: StaticImageData[] = [...imagesRight];
