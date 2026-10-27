export interface InternalStudio {
  id: string;
  name: string;
  logo: string;
  work: {
    title: string;
    image: string;
    alt: string;
  }[];
}

export const SUBMISSION_STUDIOS: InternalStudio[] = [
  {
    id: "krash-nation",
    name: "Krash Nation",
    logo: "/submissions/assets/Krash Nation-BYu7ec5j.png",
    work: [
      {
        title: "Krash Nation",
        image: "/submissions/assets/KRASHanimation_shot01_MoblieFormatfinaledit-ezgif.com-video-to-gif-converter-DMWCIW4h.gif",
        alt: "Krash Nation studio work animation reel"
      }
    ]
  },
  {
    id: "kamo-vision",
    name: "Kamo Vision",
    logo: "/submissions/assets/Kamo Vision Comics-t8n3tkX4.png",
    work: [
      {
        title: "Khanya",
        image: "/submissions/assets/KHANYA_._S1.E4Artboard_1.jpg-CuPNjq6e.jpeg",
        alt: "Kamo Vision Khanya series artwork"
      }
    ]
  },
  {
    id: "dream-shards",
    name: "Dream Shards",
    logo: "/submissions/assets/Dream Shards-DveTcc3p.png",
    work: [
      {
        title: "The Traveller Game",
        image: "/submissions/assets/The Traveller Game--8xzy0Lf.jpg",
        alt: "Dream Shards The Traveller Game artwork"
      }
    ]
  },
  {
    id: "studio-n2k",
    name: "Studio N2K",
    logo: "/submissions/assets/Studio N2K-b5GNLmNu.png",
    work: [
      {
        title: "Studio Showcase",
        image: "/submissions/assets/nhlanhla-kumaloscreenshot-03-v8kOhqPr.jpg",
        alt: "Studio N2K creative showcase still"
      },
      {
        title: "Psycho Stars",
        image: "/submissions/assets/Psycho_Stars_Vol_01_Logo_Transparent-DrICGKeL.png",
        alt: "Studio N2K Psycho Stars volume one logo art"
      }
    ]
  },
  {
    id: "converge",
    name: "Converge",
    logo: "/submissions/assets/Converge-UuCJVzcW.png",
    work: [
      {
        title: "Sock Designs",
        image: "/submissions/assets/Sock_Designs_01_v1-BnoLy2Ph.png",
        alt: "Converge sock design artwork"
      }
    ]
  },
  {
    id: "studio-leviathan",
    name: "Studio Leviathan",
    logo: "/submissions/assets/Studio Leviathan-cCU2V-PC.png",
    work: [
      {
        title: "RRBA Cover",
        image: "/submissions/assets/25 RRBA Coverb-DYUkUQXO.jpg",
        alt: "Studio Leviathan RRBA cover artwork"
      }
    ]
  }
];

export const TEAM_SIZES = [
  { value: "solo", label: "Just me" },
  { value: "2-5", label: "2–5 people" },
  { value: "6-10", label: "6–10 people" },
  { value: "11-20", label: "11–20 people" },
  { value: "20+", label: "20+ people" }
];

export const SOFTWARE_OPTIONS = [
  { label: "Blender", logo: "/submissions/assets/1 B-BcjzvBPY.jpg" },
  { label: "Unity", logo: "" },
  { label: "Unreal Engine", logo: "" },
  { label: "Toon Boom", logo: "/submissions/assets/Toon Boom-J7_c2l8o.jpg" },
  { label: "Adobe Photoshop", logo: "" },
  { label: "Clip Studio Paint", logo: "/submissions/assets/Clip Studio Paint-B6WLyWVE.png" },
  { label: "Godot", logo: "" },
  { label: "Adobe After Effects", logo: "" }
];

export const LEARN_DISCIPLINES = [
  {
    key: "comics",
    title: "Comic books / manga",
    image: "/submissions/assets/comic-cover-bHy8dyFm.png",
    alt: "Example student comic or manga work on Sixzmic Learn",
    caption: "Explore sequential art, pacing, panel choreography, and dialogue composition."
  },
  {
    key: "games",
    title: "Game development",
    image: "/submissions/assets/The Traveller Game--8xzy0Lf.jpg",
    alt: "Example student game development work on Sixzmic Learn",
    caption: "Learn game loop fundamentals, 2D sprite mechanics, and interactive prototypes."
  },
  {
    key: "animation",
    title: "Animation",
    image: "/submissions/assets/Punchline_Echo_Final_Neutral-DouKeouR.gif",
    alt: "Example student animation showing motion and storytelling on Sixzmic Learn",
    caption: "Study movement, anticipation, keyframing, and 2D/3D cinematic short storytelling."
  }
];

export interface CreatorSubmissionForm {
  fullName: string;
  artistName: string;
  email: string;
  school: string;
  country: string;
  projectTitle: string;
  format: string;
  stage: string;
  pitch: string;
  portfolioUrl: string;
  socialUrl: string;
  creatorNote: string;
  studioPath: "own-studio" | "internal-studios" | "";
  studioType: "animation" | "gaming" | "comic" | "";
  teamSize: string;
  fundingNeeded: number;
  internalStudio: string;
  rightsConfirmed: boolean;
  updatesOptIn: boolean;
}

export const INITIAL_CREATOR_SUBMISSION: CreatorSubmissionForm = {
  fullName: "",
  artistName: "",
  email: "",
  school: "",
  country: "South Africa",
  projectTitle: "",
  format: "Comic / Manga",
  stage: "In Progress",
  pitch: "",
  portfolioUrl: "",
  socialUrl: "",
  creatorNote: "",
  studioPath: "own-studio",
  studioType: "comic",
  teamSize: "solo",
  fundingNeeded: 100000,
  internalStudio: "krash-nation",
  rightsConfirmed: false,
  updatesOptIn: true
};

export interface LearnEnrolmentForm {
  fullName: string;
  email: string;
  school: string;
  country: string;
  interest: string;
  software: string[];
  updatesOptIn: boolean;
}

export const INITIAL_LEARN_FORM: LearnEnrolmentForm = {
  fullName: "",
  email: "",
  school: "",
  country: "South Africa",
  interest: "comics",
  software: ["Blender", "Clip Studio Paint"],
  updatesOptIn: true
};
