import bcrypt from "bcryptjs";

export const products = [
  {
    id: 1,
    name: "iPhone 11 ",
    model: "Iphone 11 mini 128 Gb",
    categories: "phone",
    conditions: [
      {
        support: {
          title: "Warranty",
          sub: "18 month Apple Warranty",
          cat: "warranty",
        },
      },
      { support: { title: "Posted by", sub: "Apple Store", cat: "deliver" } },
      { support: { title: "the seller", sub: "Apple", cat: "seller" } },
    ],
    spec: [
      { system: { title: "A13 Bionic chip Bionic Chip", sub: "4-core GPU", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
      { system: { title: "6.1‑inch", sub: "Liquid Retina", cat: "Display" } },
    ],
    description: [
      {
        content: {
          title: "Product review",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
      {
        content: {
          title: "Design",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
      {
        content: {
          title: "Camera",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
    ],
    price: 900,
    offPrice: 0,
    discount: 20,
    image: [
      { path: "phone/iphone-11-finish-select-202207-purple.png" },
      { path: "phone/iphone-11-finish-select-202207-purple_AV1.png" },
      { path: "phone/iphone-11-finish-select-202207-purple_AV2.png" },
    ],
  },
  {
    id: 2,
    name: "iphone 12 mini",
    categories: "phone",
    conditions: [
      {
        support: {
          title: "Warranty",
          sub: "18 month Apple Warranty",
          cat: "warranty",
        },
      },
      { support: { title: "Posted by", sub: "Apple Store", cat: "deliver" } },
      { support: { title: "the seller", sub: "Apple", cat: "seller" } },
    ],
    spec: [
      { system: { title: "A13 Bionic chip Bionic Chip", sub: "4-core GPU", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
      { system: { title: "6.1‑inch", sub: "Liquid Retina", cat: "Display" } },
    ],
    description: [
      {
        content: {
          title: "Product review",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
      {
        content: {
          title: "Design",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
      {
        content: {
          title: "Camera",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
    ],
    price: 1000,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "phone/iphone-12-finish.png" },
      {
        path: "phone/iphone-12-finish-select-202207-5-4inch-purple_AV1_GEO_US.png",
      },
      { path: "phone/iphone-12-storage-select-202207-5-4inch-purple.png" },
    ],
  },
  {
    id: 3,
    name: "iphone 13 mini",
    categories: "phone",
    conditions: [
      {
        support: {
          title: "Warranty",
          sub: "18 month Apple Warranty",
          cat: "warranty",
        },
      },
      { support: { title: "Posted by", sub: "Apple Store", cat: "deliver" } },
      { support: { title: "the seller", sub: "Apple", cat: "seller" } },
    ],
    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    description: [
      {
        content: {
          title: "Product review",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
      {
        content: {
          title: "Design",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
      {
        content: {
          title: "Camera",
          body: "Excepteur culpa cillum cillum sit cupidatat. Eiusmod sit quis labore non labore laboris nulla nulla velit ea cupidatat. Commodo amet proident labore esse ex labore ipsum tempor mollit aliquip dolore id dolor nisi.",
        },
      },
    ],
    price: 1100,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "phone/iphone-13-finish-select-202207-6-1inch-green.png" },
      { path: "phone/iphone-13-finish-select-202207-6-1inch-midnight.png" },
      {
        path: "phone/iphone-13-finish-select-202207-6-1inch-midnight_AV1_GEO_US.png",
      },
      { path: "phone/iphone-13-model-select-202207-6-1inch_AV2_GEO_US.png" },
    ],
  },
  {
    id: 4,
    name: "iphone 13 pro Max",
    categories: "phone",
    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    price: 1200,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "phone/iphone-13-pro-max-finish-unselect-gallery-2-202207.png" },
      { path: "phone/iphone-13-pro-model-select-202207-6-7inch.png" },
      {
        path: "phone/iphone-13-pro-model-unselect-gallery-2-202207_GEO_US.png",
      },
    ],
  },
  {
    id: 5,
    name: "iphone SE 2022",
    categories: "phone",

    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    price: 800,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "phone/iphone-se-finish-select-202207-midnight_AV1.png" },
      { path: "phone/iphone-se-storage-select-202207-midnight.png" },
    ],
  },
  {
    id: 6,
    name: "apple watch series 3",
    categories: "watch",
   
    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    price: 400,
    offPrice: 0,
    discount: 0,
    image: [
      {
        path: "watch/42-alu-silver-sport-white-nc-s3-grid-removebg-preview.png",
      },
      {
        path: "watch/42-alu-space-sport-black-nc-s3-grid-removebg-preview.png",
      },
    ],
  },
  {
    id: 7,
    name: "apple watch series SE",
    categories: "watch",
   
    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    price: 250,
    offPrice: 0,
    discount: 0,
    image: [
      {
        path: "watch/MN2D3_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/MN5R3_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/MKUQ3_VW_34FR+watch-44-alum-spacegray-nc-se_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/MN473ref_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO-removebg-preview.png",
      },
    ],
  },
  {
    id: 8,
    name: "apple watch series 7",
    categories: "watch",
   
    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    price: 250,
    offPrice: 0,
    discount: 0,
    image: [
      {
        path: "watch/ML6H3ref_VW_34FR+watch-44-alum-gold-nc-se_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/ML7Y3_VW_34FR+watch-45-alum-green-nc-7s_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/MMWK3ref_VW_34FR+watch-44-alum-spacegray-nc-se_VW_34FR_WF_CO+watch-face-45-braided-black-unity_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/MN5R3_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO-removebg-preview.png",
      },
      {
        path: "watch/MJX93ref_VW_34FR+watch-45-stainless-silver-cell-7s_VW_34FR_WF_CO+watch-face-45-braided-pride_VW_34FR_WF_CO-removebg-preview.png",
      },
    ],
  },
  {
    id: 9,
    name: "apple mac book Air 2021",
    categories: "Mac",
    
    spec: [
      { system: { title: "A15 Bionic Chip", sub: "5G-cores", cat: "chipSet" } },
      {
        system: {
          title: "Up to 28 hours video",
          sub: "playback2",
          cat: "battery",
        },
      },
      { system: { title: "Ios 15", sub: "5G support", cat: "os" } },
    ],
    price: 900,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "laptop/macbook-air-gold-select-201810-removebg-preview.png" },
    ],
  },
  {
    id: 10,
    name: "apple mac book pro 2021",
    categories: "Mac",
 
    price: 1200,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "laptop/mbp14-spacegray-select-202110__1_-removebg-preview.png" },
      { path: "laptop/mbp-spacegray-select-202206-removebg-preview.png" },
    ],
  },
  {
    id: 11,
    name: "apple mac Air pro 2021",
    categories: "Mac",
   
    price: 1200,
    offPrice: 0,
    discount: 0,
    image: [
      {
        path: "laptop/macbook-air-midnight-select-20220606-removebg-preview.png",
      },
    ],
  },
  {
    id: 12,
    name: "apple Air pod Generate 2.0",
    categories: "air pod",
    
    price: 120,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "airpod/MV7N2_AV2-removebg-preview.png" },
      { path: "airpod/MME73_AV3-removebg-preview.png" },
      { path: "airpod/MV7N2_AV3-removebg-preview.png" },
    ],
  },
  {
    id: 13,
    name: "apple Air pod Generate 3.0",
    categories: "air pod",
 
    price: 190,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "airpod/MME73-removebg-preview.png" },
      { path: "airpod/MME73_AV1-removebg-preview.png" },
      { path: "airpod/MME73_AV3-removebg-preview.png" },
    ],
  },
  {
    id: 14,
    name: "apple Air pod pro",
    categories: "air pod",
   
    price: 250,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "airpod/MWP22-removebg-preview.png" },
      { path: "airpod/MWP22_AV1-removebg-preview.png" },
      { path: "airpod/MWP22_AV3-removebg-preview.png" },
    ],
  },
  {
    id: 15,
    name: "apple ipad air 2021",
    categories: "ipad",
   
    price: 900,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "ipad/ipad-air-select-wifi-blue-202203.png" },
      { path: "ipad/ipad-air-select-wifi-spacegray-202203.png" },
    ],
  },
  {
    id: 16,
    name: "apple ipad mini ",
    categories: "ipad",
    
    price: 800,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "ipad/ipad-mini-select-wifi-space-gray-202109.png" },
      { path: "ipad/ipad-mini-select-wifi-starlight-202109.png" },
      { path: "ipad/ipad-mini-select-202109-removebg-preview.png" },
    ],
  },
  {
    id: 17,
    name: "apple ipad pro 2021",
    categories: "ipad",
    
    price: 1200,
    offPrice: 0,
    discount: 0,
    image: [
      { path: "ipad/ipad-pro-11-select-202104.png" },
      {
        path: "ipad/ipad-pro-11-select-cell-spacegray-202104-removebg-preview.png",
      },
    ],
  },
];

export const users = [
  {
    name: "Saheb mohamadi",
    email: "saheb.example@gmail.com",
    password: bcrypt.hashSync("12345", 8),
    phoneNumber: "09180000001",
    isAdmin: true,
  },
  {
    name: "John",
    email: "user2@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
    phoneNumber: "09181230002",
  },
];
