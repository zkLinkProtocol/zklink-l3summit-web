import { StaticImageData } from "next/image";

function imagesContextIstanbul(): any {
  return (require as any).context(
    "../../../assets/gallery/istanbul",
    false, // Whether to recursively search subdirectories
    /\.(jpg|jpeg|png|gif|svg)$/
  );
}

function imagesContextDenver(): any {
  return (require as any).context(
    "../../../assets/gallery/denver",
    false, // Whether to recursively search subdirectories
    /\.(jpg|jpeg|png|gif|svg)$/
  );
}

function imagesContextDubai(): any {
  return (require as any).context(
    "../../../assets/gallery/dubai",
    false, // Whether to recursively search subdirectories
    /\.(jpg|jpeg|png|gif|svg)$/
  );
}

const imagesContextIstanbulKeys = imagesContextIstanbul();
const imagesContextDenverKeys = imagesContextDenver();
const imagesContextDubaiKeys = imagesContextDubai();

const imagesIstanbul = imagesContextIstanbulKeys
  .keys()
  ?.filter((key: string) => key.includes("istanbul"))
  .map((key: string) => imagesContextIstanbulKeys(key));

const imagesDenver = imagesContextDenverKeys
  .keys()
  ?.filter((key: string) => key.includes("denver"))
  .map((key: string) => imagesContextDenverKeys(key));

const imagesDubai = imagesContextDubaiKeys
  .keys()
  ?.filter((key: string) => key.includes("dubai"))
  .map((key: string) => imagesContextDubaiKeys(key));

export const istanbulIcons: StaticImageData[] = [...imagesIstanbul];
export const denverIcons: StaticImageData[] = [...imagesDenver];
export const dubaiIcons: StaticImageData[] = [...imagesDubai];
