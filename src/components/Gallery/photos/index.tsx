import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { FlexCenter } from "@/styles";
import { dubaiIcons, denverIcons, istanbulIcons, brusselsIcons } from "./data";
import { Dialog } from "@material-ui/core";
import { Tab } from "@/components/Homepage/Agenda/data";

const Wrap = styled(FlexCenter)`
  position: relative;
  max-width: 1200px;
  margin-top: 50px;

  ${(props) => props.theme.breakpoints.down("xs")} {
    margin-top: 100px;
  }
`;
const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => props.theme.breakpoints.down("xs")} {
    grid-template-columns: 1fr;
  }
`;

const Img = styled(Image)`
  max-width: 288px;
  max-height: 192px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.down("xs")} {
    padding: 0 16px;
    max-width: 100%;
  }
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

const Index: FC<{ type: Tab }> = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<StaticImageData | null>(null);
  const photoSource = useMemo(() => {
    if (type === "Istanbul") {
      return istanbulIcons;
    } else if (type === "EthDenver") {
      return denverIcons;
    } else if (type === "Dubai") {
      return dubaiIcons;
    } else {
      return brusselsIcons
    }
  }, [type]);
  return (
    <Wrap>
      <ImgWrap>
        {photoSource.map((item, idx) => (
          <Img
            key={idx}
            src={item}
            alt={"photo"}
            onClick={() => {
              setOpen(true);
              setImg(item);
            }}
            priority
          />
        ))}
      </ImgWrap>
      {img && (
        <AlertDialog
          isOpen={open}
          img={img}
          close={(e) => {
            setOpen(e);
          }}
        />
      )}
    </Wrap>
  );
};

export default Index;
