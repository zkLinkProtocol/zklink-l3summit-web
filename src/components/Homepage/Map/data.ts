export type IntroduceTitle = "EthDenver" | "Istanbul" | "Dubai" | "Brussels";
export const introduceTitle = {
  EthDenver: "ETHDenver",
  Istanbul: "DevConnect Istanbul",
  Dubai: "Token2049 Dubai",
  Brussels: "EthCC Brussels",
};
export const introduceData = {
  EthDenver: [
    {
      textL: "650+",
      textR: "Participants",
    },
    {
      textL: "32",
      textR: "Speakers",
    },
    {
      textL: "20+",
      textR: "Media Partners",
    },
  ],
  Istanbul: [
    {
      textL: "500+",
      textR: "Participants",
    },
    {
      textL: "17",
      textR: "Speakers",
    },
    {
      textL: "10",
      textR: "Media Partners",
    },
  ],
  Dubai: [
    {
      textL: "800+",
      textR: "Participants",
    },
    {
      textL: "28",
      textR: "Speakers",
    },
    {
      textL: "30+",
      textR: "Media Partners",
    },
  ],
  Brussels: [
    {
      textL: "",
      textR: "",
    },
    {
      textL: "",
      textR: "Coming Soon...",
    },
    {
      textL: "",
      textR: "",
    },
  ],
};

export const placeData = [
  {
    type: "Istanbul",
    tText: "16 NOV 2023",
    cText: "DevConnect Istanbul",
    bText: "Istanbul",
  },
  {
    type: "EthDenver",
    tText: "2 Mar 2024",
    cText: "ETHDenver",
    bText: "Denver",
  },
  {
    type: "Dubai",
    tText: "16 April 2024",
    cText: "Token2049 Dubai",
    bText: "Dubai",
  },
  {
    type: "Brussels",
    tText: "10 Jul 2024",
    cText: "EthCC Brussels",
    bText: "Brussels",
  },
];

export const locations: {
  name: IntroduceTitle;
  x: number;
  y: number;
  rotate: number;
}[] = [
  {
    name: "Istanbul",
    x: 0,
    y: 0,
    rotate: 20,
  },
  {
    name: "EthDenver",
    x: -512,
    y: -8,
    rotate: 180,
  },
  {
    name: "Dubai",
    x: 85,
    y: 63,
    rotate: 10,
  },
  {
    name: "Brussels",
    x: -105,
    y: -28,
    rotate: -145,
  },
];
