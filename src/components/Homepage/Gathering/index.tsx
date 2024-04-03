import React, { FC, useState } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { FlexCenter } from "@/styles";
import { imgs } from "./data";
import { Dialog } from "@material-ui/core";
import Marquee from "react-fast-marquee";

const Wrap = styled(FlexCenter)`
  position: relative;
`;
const Img = styled(Image)`
  width: 400px;
  height: 300px;
  margin: 0 6px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
`;
const ImgDialog = styled(Image)`
  width: 100%;
  height: auto;
`;

interface DialogProps {
  img: StaticImageData;
  isOpen: boolean;
  close: (val: boolean) => void;
}

const AlertDialog: FC<DialogProps> = ({ isOpen, img, close }, ref) => {
  const handleClose = () => {
    close(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <ImgDialog priority src={img} alt={""} />
    </Dialog>
  );
};

const Index = () => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(imgs[0]);

  const props = {
    pauseOnHover: true,
  };
  return (
    <Wrap>
      <Marquee {...props}>
        {imgs.map((item, idx) => (
          <Img
            priority
            key={idx}
            src={item}
            alt={""}
            onClick={() => {
              setOpen(true);
              setImg(item);
            }}
          />
        ))}
      </Marquee>
      <AlertDialog
        isOpen={open}
        img={img}
        close={(e) => {
          setOpen(e);
        }}
      />
    </Wrap>
  );
};

export default Index;
