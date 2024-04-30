import Istanbul_1 from "@/assets/homepage/agenda/Istanbul_1.webp";
import Istanbul_2 from "@/assets/homepage/agenda/Istanbul_2.webp";
import Denver_1 from "@/assets/homepage/agenda/Denver_1.webp";
import Denver_2 from "@/assets/homepage/agenda/Denver_2.webp";
import Denver_3 from "@/assets/homepage/agenda/Denver_3.webp";
import Dubai_1 from "@/assets/homepage/agenda/Dubai_1.webp";
import Dubai_2 from "@/assets/homepage/agenda/Dubai_2.webp";
import Dubai_3 from "@/assets/homepage/agenda/Dubai_3.webp";

//Partners
import arpa from "@/assets/homepage/agenda/partners/ETHDenver/arpa.png";
import arrin from "@/assets/homepage/agenda/partners/ETHDenver/arrin.png";
import beat from "@/assets/homepage/agenda/partners/ETHDenver/beat.png";
import block from "@/assets/homepage/agenda/partners/ETHDenver/block.png";
import bscn from "@/assets/homepage/agenda/partners/ETHDenver/bscn.png";
import came from "@/assets/homepage/agenda/partners/ETHDenver/came.png";
import coin from "@/assets/homepage/agenda/partners/ETHDenver/coin.png";
import coinpost from "@/assets/homepage/agenda/partners/ETHDenver/coinpost.png";
import cryptorank from "@/assets/homepage/agenda/partners/ETHDenver/cryptorank.png";
import izu from "@/assets/homepage/agenda/partners/ETHDenver/izu.png";
import manta from "@/assets/homepage/agenda/partners/ETHDenver/manta.png";
import metav from "@/assets/homepage/agenda/partners/ETHDenver/metav.png";
import okx from "@/assets/homepage/agenda/partners/ETHDenver/okx.png";
import qed from "@/assets/homepage/agenda/partners/ETHDenver/qed.png";
import rollup from "@/assets/homepage/agenda/partners/ETHDenver/rollup.png";

import availIcon from "@/assets/homepage/agenda/partners/Dubai/avail.png";
import arpaIcon from "@/assets/homepage/agenda/partners/Dubai/arpa.png";
import layerbankIcon from "@/assets/homepage/agenda/partners/Dubai/layerbank.png";
import okweb3Icon from "@/assets/homepage/agenda/partners/Dubai/okweb3.png";
import brevisIcon from "@/assets/homepage/agenda/partners/Dubai/brevis.png";
import DWFIcon from "@/assets/homepage/agenda/partners/Dubai/DWF.png";
import particleIcon from "@/assets/homepage/agenda/partners/Dubai/particle.png";
import TaikoIcon from "@/assets/homepage/agenda/partners/Dubai/Taiko.png";
import zircuitIcon from "@/assets/homepage/agenda/partners/Dubai/zircuit.png";

import jscjIcon from "@/assets/homepage/agenda/partners/Dubai/jscj.png";
import beincryptoIcon from "@/assets/homepage/agenda/partners/Dubai/beincrypto.png";
import bitcoinistIcon from "@/assets/homepage/agenda/partners/Dubai/bitcoinist.png";
import blockheadIcon from "@/assets/homepage/agenda/partners/Dubai/blockhead.png";
import bscnIcon from "@/assets/homepage/agenda/partners/Dubai/bscn.png";
import coinpostIcon from "@/assets/homepage/agenda/partners/Dubai/coinpost.png";
import cointelegraphIcon from "@/assets/homepage/agenda/partners/Dubai/cointelegraph.png";
import cryptobriefingIcon from "@/assets/homepage/agenda/partners/Dubai/cryptobriefing.png";
import camerapotatoIcon from "@/assets/homepage/agenda/partners/Dubai/camerapotato.png";
import cryptorankIcon from "@/assets/homepage/agenda/partners/Dubai/cryptorank.png";
import l2beatIcon from "@/assets/homepage/agenda/partners/Dubai/l2beat.png";
import livebitcoinnewsIcon from "@/assets/homepage/agenda/partners/Dubai/livebitcoinnews.png";
import metaverseIcon from "@/assets/homepage/agenda/partners/Dubai/metaversepost.png";
import nenwsbtcIcon from "@/assets/homepage/agenda/partners/Dubai/nenwsbtc.png";
import odailyIcon from "@/assets/homepage/agenda/partners/Dubai/odaily.png";
import techflowIcon from "@/assets/homepage/agenda/partners/Dubai/techflow.png";
import therollupIcon from "@/assets/homepage/agenda/partners/Dubai/therollup.png";
import voiceIcon from "@/assets/homepage/agenda/partners/Dubai/voice.png";

import { StaticImageData } from "next/image";

export type StrokeItem = {
  time: string;
  infoTopText: string;
  infoCenterText: string;
  infoBottomLText: string;
  infoBottomRText?: string;
  infoClass: string;
  infoTopClass: string;
  infoCenterClass: string;
};
export const strokeList1: StrokeItem[] = [
  {
    time: "1:00 pm",
    infoTopText: "",
    infoCenterText: "Reception Coffee & Networking",
    infoBottomLText: "",
    infoClass: "bgBlack",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "1:55 pm",
    infoTopText: "",
    infoCenterText: "Welcome Note",
    infoBottomLText: "",
    infoClass: "adorn1 bgBlue",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "2:00 pm",
    infoTopText: "Panel",
    infoCenterText: "L3 Solutions - are they the future?",
    infoBottomLText: "zk.Link, Kakarot, Taiko, zkSync",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "2:45 pm",
    infoTopText: "David Weisiger",
    infoCenterText: "Just don’t do it: writing EVM on a zkVM",
    infoBottomLText: "Taiko",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "3:10 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Scaling Ethereum with L2s - when will L2s be ready for L3s?",
    infoBottomLText: "Manta, Linea, Scroll, Polygon",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "3:55 pm",
    infoTopText: "Vince Yang",
    infoCenterText: "Nexus: The First ZKP based, multi-rollup Layer 3",
    infoBottomLText: "zk.Link",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "4:20 pm",
    infoTopText: "Greg Edison",
    infoCenterText: "Deploying L3s with Taiko’s open source stack",
    infoBottomLText: "kakarot",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "4:45 pm",
    infoTopText: "Kalman Lajko",
    infoCenterText:
      "Hyperchains and Hyperbridges: How the ZK stack will power the internet of Value",
    infoBottomLText: "zkSync",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "5:10 pm",
    infoTopText: "Panel",
    infoCenterText: "Modular Solutions for L2/L3 Rollups",
    infoBottomLText: "BNB CHain, Eigen Layer, Mantle, Celestia",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "5:55 pm",
    infoTopText: "",
    infoCenterText: "Networking",
    infoBottomLText: "",
    infoClass: "bgOrange",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
];

export const strokeList2: StrokeItem[] = [
  {
    time: "12:00 pm",
    infoTopText: "",
    infoCenterText: "Reception & Networking",
    infoBottomLText: "",
    infoClass: "bgBlack",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "12:55 pm",
    infoTopText: "",
    infoCenterText: "Welcome Note",
    infoBottomLText: "",
    infoClass: "adorn1 bgBlue",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "13:00 pm",
    infoTopText: "Panel",
    infoCenterText:
      "What are the different approaches and purposes for building Layer 3 solutions?",
    infoBottomLText: "zkSync, Offchain Labs, Polygon Miden",
    infoBottomRText: "Moderated by: L2 Beat",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "13:45 pm",
    infoTopText: "Panel",
    infoCenterText:
      "DeFi on Layer 3: Overcoming Challenges and Seizing Opportunities",
    infoBottomLText: "Pyth, Metis, Izumi Finance",
    infoBottomRText: "Moderated by: The Rollup",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "14:30 pm",
    infoTopText: "DZ",
    infoCenterText:
      "The difference between General Purpose and App Specific Rollups in Layer 3 Protocol Architecture",
    infoBottomLText: "zkLink",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "14:55 pm",
    infoTopText: "",
    infoCenterText: "Break",
    infoBottomLText: "",
    infoClass: "bgGrey",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "15:15 pm",
    infoTopText: "Panel",
    infoCenterText: "L2O Consortium",
    infoBottomLText: "zkLink, QED Protocol, Starkware",
    infoBottomRText: "Moderated by: Arrington Capital",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "16:00 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Beyond Interoperability: The Next Frontiers in Layer 3 Evolution",
    infoBottomLText: "Polyhedra, Kakarot, Layer0, Mantle",
    infoBottomRText: "Moderated by: BSCNews",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "16:45 pm",
    infoTopText: "Panel",
    infoCenterText: "zkEVM vs zkVM - Use-cases, challenges and the future",
    infoBottomLText: "Manta, Linea, Scroll, Taiko",
    infoBottomRText: "Moderated by: Kroma Network",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "17:30 pm",
    infoTopText: "",
    infoCenterText: "Break",
    infoBottomLText: "",
    infoClass: "bgGrey",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "17:50 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Data Availability and Modular Blockchain in Layer 3 Networks",
    infoBottomLText: "Avail, Gelato, EigenLayer",
    infoBottomRText: "Moderated by: ARPA Network",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "18:35 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Developing Decentralized Applications on Layer 3: A Developer's Perspective",
    infoBottomLText: "zkcandy, LogX",
    infoBottomRText: "Moderated by: OKX",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "19:00 pm",
    infoTopText: "",
    infoCenterText: "Networking",
    infoBottomLText: "",
    infoClass: "bgOrange",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
];

export const strokeList3: StrokeItem[] = [
  {
    time: "11:00 pm",
    infoTopText: "",
    infoCenterText: "Reception & Networking",
    infoBottomLText: "",
    infoClass: "bgBlack",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "11:55 pm",
    infoTopText: "",
    infoCenterText: "Welcome Note",
    infoBottomLText: "",
    infoClass: "adorn1 bgBlue",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "12:00 pm",
    infoTopText: "Panel",
    infoCenterText: "ZK Season in 2024 : Hype VS. Reality",
    infoBottomLText: "Manta, Risc0, Taiko, Zircuit",
    infoBottomRText: "Moderated by: Consensys",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "12:50 pm",
    infoTopText: "Panel",
    infoCenterText:
      "From Frictions to Functions: Improving User Experiences To Onboard The Next Billion Users and Developers",
    infoBottomLText: "Arkham, Kroma Network, Particle Network, Protofire",
    infoBottomRText: "Moderated by: ARPA",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "13:35 pm",
    infoTopText: "Vince Yang",
    infoCenterText:
      "Aggregating Fragmented Liquidity in Ethereum for a Unified and Interoperable Rollup Ecosystem",
    infoBottomLText: "zkLink",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "14:05 pm",
    infoTopText: "Panel",
    infoCenterText: "DeFi’s Next Chapter: LST, LRT & The Power Of Layer 3",
    infoBottomLText: "KelpDAO, LogX, Metis",
    infoBottomRText: "Moderated by: Caladan",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "14:55 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Exploring The Approaches, Designs, & Technologies That Address Liquidity Fragmentation in DeFi",
    infoBottomLText: "Gelato, IOSG, Stakestone, Supra",
    infoBottomRText: "Moderated by: IOSG",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "15:40 pm",
    infoTopText: "Yoli",
    infoCenterText: "A Smart ZK Coprocessor",
    infoBottomLText: "Brevis",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "16:00 pm",
    infoTopText: "Vince Yang, Omar Azhar",
    infoCenterText: "zkSync x zkLink Fireside Chat",
    infoBottomLText: "zkLink, zkSync",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "16:35 pm",
    infoTopText: "Panel",
    infoCenterText:
      "The Highway to Interoperability: Improvements On VMs, EVMs, Bridges, Cross-Chain & Multi-Chain",
    infoBottomLText: "Avail, Polygon Labs, Polyhedra",
    infoBottomRText: "Moderated by: Hyperlane",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "17:25 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Are Layer3 Features Such As Customization, Scalability,  Development, & User Experience Meant For All dApps & Use Cases?",
    infoBottomLText: "Arbitrum, DWF Labs, Scroll",
    infoBottomRText: "",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "18:10 pm",
    infoTopText: "",
    infoCenterText: "Networking",
    infoBottomLText: "",
    infoClass: "bgOrange",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
];

const istanbulUrl =
  "https://www.google.com/maps/place/Nippon+Hotel/@41.0403927,28.9850207,17z/data=!3m1!4b1!4m9!3m8!1s0x14cab78c9ef8546b:0x90adf79b5bd868a9!5m2!4m1!1i2!8m2!3d41.0403927!4d28.9850207!16s%2Fg%2F1twzz0l_?hl=en&entry=ttu";
const denverUrl =
  "https://www.google.com/maps/place/Le+M%C3%A9ridien+Denver+Downtown/@39.7442615,-104.996413,17z/data=!3m1!4b1!4m9!3m8!1s0x876c78d1105dd85b:0x6758a27ced3b948b!5m2!4m1!1i2!8m2!3d39.7442615!4d-104.9938381!16s%2Fg%2F11cs9lrm8f?entry=ttu";
const DubaiUrl = "https://maps.app.goo.gl/qBJ8cesE44BQUJea6";

export const locationData = [
  {
    type: "Istanbul",
    left: [
      {
        title: "Nippon",
        text: `Inspired by Japanese Minimalist design, Nippon is a modern hotel
              located a short walk from Taksim Square and İstiklal Street in
              Istanbul - the most central and active areas of Istanbul.`,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: "",
        urlName: "Nippon Hotel - Istanbul",
        url: istanbulUrl,
      },
    ],
    right: [Istanbul_1, Istanbul_2],
  },
  {
    type: "EthDenver",
    left: [
      {
        title: "Le Méridien Denver Downtown",
        text: `Le Meridian is a modern, 
        cosmopolitan hotel in the heart of the Mile High City. 
        Chic and sophisticated, Le Meridian combines traditional 
        European influences with modern features to create one
         of the top hotels in Denver.`,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: `With its prime location near the Colorado Convention Center,
           Ball Arena, and the Arts District,
          Le Meridian is perfect for both business and leisure travelers. `,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: "",
        urlName: "Le Méridien - Denver Downtown",
        url: denverUrl,
      },
    ],
    right: [Denver_1, Denver_2, Denver_3],
  },
  {
    type: "Dubai",
    left: [
      {
        title: " Royal Ballroom - The Palace - One&Only Royal Mirage Dubai",
        text: `A majestic Arabesque setting. 
              The ballroom can be divided into three sections, each with a draw down screen.
              The private entrances are all large enough to drive in cars. 
              A large foyer also with private entrance, is excellent for receptions.`,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: `The venue has a capacity for 800 guests.`,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: "",
        urlName: "Royal Ballroom - The Palace",
        url: DubaiUrl,
      },
    ],
    right: [Dubai_1, Dubai_2, Dubai_3],
  },
];

export type Partner = {
  sponsorsIcons: {
    name: string;
    icons: StaticImageData[];
  }[];
  partnersIcons: StaticImageData[][];
};

export const partnerEthDenver: Partner = {
  sponsorsIcons: [
    {
      name: "Title",
      icons: [qed],
    },
    {
      name: "Diamond",
      icons: [arpa, manta, okx],
    },
    {
      name: "Gold",
      icons: [arrin, izu],
    },
  ],
  partnersIcons: [
    [block, bscn, coinpost, coin],
    [came, cryptorank, beat],
    [metav, rollup],
  ],
};

export const partnerDubai: Partner = {
  sponsorsIcons: [
    {
      name: "Diamond",
      icons: [availIcon, arpaIcon, layerbankIcon, okweb3Icon],
    },
    {
      name: "Gold",
      icons: [brevisIcon, DWFIcon, particleIcon, TaikoIcon, zircuitIcon],
    },
  ],
  partnersIcons: [
    [jscjIcon, beincryptoIcon, bitcoinistIcon, blockheadIcon, bscnIcon],
    [
      coinpostIcon,
      cointelegraphIcon,
      cryptobriefingIcon,
      camerapotatoIcon,
      cryptorankIcon,
    ],
    [l2beatIcon, livebitcoinnewsIcon, metaverseIcon, nenwsbtcIcon, odailyIcon],
    [techflowIcon, therollupIcon, voiceIcon],
  ],
};

export type Tab = "Istanbul" | "EthDenver" | "Dubai";

export const tabData: {
  tag: Tab;
  date: string;
  text: string;
}[] = [
  {
    tag: "Istanbul",
    date: "16.11.2023",
    text: "Istanbul",
  },
  {
    tag: "EthDenver",
    date: "02.03.2024",
    text: "Denver",
  },
  {
    tag: "Dubai",
    date: "16.04.2024",
    text: "Token2049 Dubai",
  },
];
