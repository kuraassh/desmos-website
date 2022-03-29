import { DiscordIcon, TelegramIcon } from "@src/components/icons";

export const footerLinks = [
  {
    key: "documentation",
    url: "https://docs.desmos.network/",
    externalURL: true,
  },
  // {
  //   key: "profileManager",
  //   url: "https://dpm.desmos.network/",
  //   externalURL: true,
  // },
  {
    key: "solution",
    url: "#solution",
  },
  {
    key: "desmosProfile",
    url: "#profile",
  },
  {
    key: "dsmSupply",
    url: "#supply",
  },
  {
    key: "ourTeam",
    url: "#team",
  },
  {
    key: "roadMap",
    url: "#roadmap",
  },
  {
    key: "ecosystem",
    url: "#ecosystem",
  },
];

interface FooterProps {
  learn: {
    key: string;
    url: string;
    externalURL?: boolean;
  }[];
  build: {
    key: string;
    url: string;
    externalURL?: boolean;
  }[];
  explore: {
    key: string;
    url: string;
    externalURL?: boolean;
  }[];
  about: {
    key: string;
    url: string;
    externalURL?: boolean;
  }[];
  join: {
    icon: React.ReactNode;
    key: string;
    url: string;
    externalURL?: boolean;
  }[];
}

export const footer: FooterProps = {
  learn: [
    {
      key: "projectPlan",
      url: "",
    },
    {
      key: "dsmToken",
      url: "#supply",
    },
    {
      key: "roadMap",
      url: "#roadmap",
    },
    {
      key: "medium",
      url: "https://medium.com/desmosnetwork",
      externalURL: true,
    },
    {
      key: "forboleBlog",
      url: "https://www.forbole.com/blog",
      externalURL: true,
    },
  ],
  build: [
    {
      key: "documentation",
      url: "https://docs.desmos.network/",
      externalURL: true,
    },
    {
      key: "validator",
      url: "https://docs.desmos.network/validators/overview/",
      externalURL: true,
    },
    {
      key: "github",
      url: "https://github.com/desmos-labs",
      externalURL: true,
    },
  ],
  explore: [
    {
      key: "dpm",
      url: "https://dpm.desmos.network/",
      externalURL: true,
    },
    {
      key: "desmos explorer",
      url: "https://explorer.desmos.network/",
      externalURL: true,
    },
    {
      key: "forbole x wallet",
      url: "https://x.forbole.com/",
      externalURL: true,
    },
    {
      key: "forbole ventures",
      url: "https://ventures.forbole.com/",
      externalURL: true,
    },
    {
      key: "dsm airdrop",
      url: "https://airdrop.desmos.network/",
      externalURL: true,
    },
  ],
  about: [
    {
      key: "team",
      url: "https://www.forbole.com/about",
      externalURL: true,
    },
    {
      key: "airdrop faq",
      url: "https://medium.com/desmosnetwork/desmos-airdrop-faqs-d5107dd34f17",
      externalURL: true,
    },
    // {
    //   key: "brand asset",
    //   url: "/brand-asset"
    // }
  ],
  join: [
    {
      icon: <DiscordIcon />,
      key: "@Desmos",
      url: "https://discord.gg/gd7Mjz2a",
      externalURL: true,
    },
    {
      icon: <TelegramIcon />,
      key: "@Desmosnetwork",
      url: "https://t.me/desmosnetwork",
      externalURL: true,
    },
    {
      icon: <TelegramIcon />,
      key: "@Desmos Italia 🇮🇹",
      url: "https://t.me/DesmosITA",
      externalURL: true,
    },
    {
      icon: <TelegramIcon />,
      key: "@Desmos 中文社區",
      url: "https://t.me/DesmosChinese",
      externalURL: true,
    },
  ],
};
