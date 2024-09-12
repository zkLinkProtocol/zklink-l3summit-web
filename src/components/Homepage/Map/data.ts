export type IntroduceTitle =
  | "EthDenver"
  | "Istanbul"
  | "Dubai"
  | "Brussels"
  | "Singapore";
export const introduceTitle = {
  EthDenver: "ETHDenver",
  Istanbul: "DevConnect Istanbul",
  Dubai: "Token2049 Dubai",
  Brussels: "EthCC Brussels",
  Singapore: "Singapore",
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
      textL: "400+",
      textR: "Particiants",
    },
    {
      textL: "15",
      textR: "Speakers",
    },
    {
      textL: "6",
      textR: "Media Partners",
    },
  ],
  Singapore: [
    // {
    //   textL: "400+",
    //   textR: "Particiants",
    // },
    {
      textL: "9",
      textR: "Speakers",
    },
    {
      textL: "8",
      textR: "Media Partners",
    },
  ],
};

export const placeData = [
  {
    type: "Istanbul",
    tText: "16 Nov 2023",
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
    tText: "16 Apr 2024",
    cText: "Token2049 Dubai",
    bText: "Dubai",
  },
  {
    type: "Brussels",
    tText: "10 Jul 2024",
    cText: "EthCC Brussels",
    bText: "Brussels",
  },
  {
    type: "Singapore",
    tText: "16 Sep 2024",
    cText: "Token2049 Singapore",
    bText: "Singapore",
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
    rotate: -150,
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
  {
    name: "Singapore",
    x: 232,
    y: 126,
    rotate: 25,
  },
];
