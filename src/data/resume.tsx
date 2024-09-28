import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Al - Qura'an",
  initials: "Al - Qur'an",
  url: "https://tegar-kingofthejungle.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Discover guidance and wisdom in the Quran with easy access and clear translations to deepen your understanding.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

export const SURAH = [{
  "arti": "Pembukaan",
  "asma": "الفاتحة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
  "ayat": 7,
  "keterangan": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
  "nama": "Al Fatihah",
  "nomor": "1",
  "rukuk": "1",
  "type": "mekah",
  "urut": "5"
}, {
  "arti": "Sapi Betina",
  "asma": "البقرة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/002AlBaqarah.mp3",
  "ayat": 286,
  "keterangan": "Surat <i>Al Baqarah</i> yang 286 ayat itu turun di Madinah yang sebahagian besar diturunkan pada permulaan tahun Hijrah, kecuali ayat 281 diturunkan di Mina pada Hajji wadaa' (hajji Nabi Muhammad s.a.w. yang terakhir). Seluruh ayat dari surat Al Baqarah termasuk golongan Madaniyyah, merupakan surat yang terpanjang di antara surat-surat Al Quran yang di dalamnya terdapat pula ayat yang terpancang (ayat 282). Surat ini dinamai <i>Al Baqarah</i> karena di dalamnya disebutkan kisah penyembelihan sapi betina yang diperintahkan Allah kepada Bani Israil (ayat 67 sampai dengan 74), dimana dijelaskan watak orang Yahudi pada umumnya. Dinamai <i>Fusthaatul-Quran</i> (puncak Al Quran) karena memuat beberapa hukum yang tidak disebutkan dalam surat yang lain. Dinamai juga surat  <i>alif-laam-miim</i> karena surat ini dimulai dengan Alif-laam-miim.",
  "nama": "Al Baqarah",
  "nomor": "2",
  "rukuk": "40",
  "type": "madinah",
  "urut": "87"
}, {
  "arti": "Keluarga Imran",
  "asma": "آل عمران",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/003AliImran.mp3",
  "ayat": 200,
  "keterangan": "Surat <i>Ali 'Imran</i> yang terdiri dari 200 ayat ini adalah surat Madaniyyah.  Dinamakan <i>Ali 'Imran</i> karena memuat kisah keluarga 'Imran yang di dalam kisah itu disebutkan kelahiran Nabi Isa a.s., persamaan kejadiannya dengan Nabi Adam a. s., kenabian dan beberapa mukjizatnya, serta disebut pula kelahiran Maryam puteri 'Imran, ibu dari Nabi Isa a.s. Surat Al Baqarah dan Ali 'Imran ini dinamakan <i>Az Zahrawaani</i> (dua yang cemerlang), karena kedua surat ini menyingkapkan hal-hal yang disembunyikan oleh para Ahli Kitab, seperti kejadian dan kelahiran Nabi Isa a.s., kedatangan Nabi Muhammad s.a.w. dan sebagainya.",
  "nama": "Ali Imran",
  "nomor": "3",
  "rukuk": "20",
  "type": "madinah",
  "urut": "89"
}, {
  "arti": "Wanita",
  "asma": "النساء",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/004AnNisaa.mp3",
  "ayat": 176,
  "keterangan": "Surat An Nisaa' yang terdiri dari 176 ayat itu, adalah surat Madaniyyah yang terpanjang sesudah surat Al Baqarah. Dinamakan <i>An Nisaa'</i> karena dalam surat ini banyak dibicarakan hal-hal yang berhubungan dengan wanita serta merupakan surat yang paling membicarakan hal itu dibanding dengan surat-surat yang lain. Surat yang lain banyak juga yang membicarakan tentang hal wanita ialah surat Ath Thalaq. Dalam hubungan ini biasa disebut surat An Nisaa' dengan sebutan: <i>Surat An Nisaa' Al Kubraa</i> (surat An Nisaa' yang besar), sedang  surat Ath Thalaq disebut dengan sebutan: <i>Surat An Nisaa' Ash Shughraa</i> (surat An Nisaa' yang kecil).",
  "nama": "An Nisaa",
  "nomor": "4",
  "rukuk": "24",
  "type": "madinah",
  "urut": "92"
}, {
  "arti": "Hidangan",
  "asma": "المائدة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/005AlMaaidah.mp3",
  "ayat": 120,
  "keterangan": "Surat Al Maa'idah terdiri dari 120 ayat; termasuk golongan surat Madaniyyah. Sekalipun ada ayatnya yang turun di Mekah, namun ayat ini diturunkan sesudah Nabi Muhammad s.a.w. hijrah ke Medinah, yaitu di waktu haji wadaa'. Surat ini dinamakan <i>Al Maa'idah</i> (hidangan) karena memuat kisah pengikut-pengikut setia Nabi Isa a.s. meminta kepada Nabi Isa a.s. agar Allah menurunkan untuk mereka Al Maa'idah (hidangan makanan) dari langit (ayat 112). Dan dinamakan <i>Al Uqud</i> (perjanjian), karena kata itu terdapat pada ayat pertama surat ini, dimana Allah menyuruh agar hamba-hamba-Nya memenuhi janji prasetia terhadap Allah dan perjanjian-perjanjian yang mereka buat sesamanya. Dinamakan juga <i>Al Munqidz</i> (yang menyelamatkan), karena akhir surat ini mengandung kisah tentang Nabi Isa a.s. penyelamat pengikut-pengikut setianya dari azab Allah.",
  "nama": "Al Maidah",
  "nomor": "5",
  "rukuk": "16",
  "type": "madinah",
  "urut": "112"
}, {
  "arti": "Binatang Ternak",
  "asma": "الأنعام",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/006AlAnaam.mp3",
  "ayat": 165,
  "keterangan": "Surat Al An'aam (binatang ternak: unta, sapi, biri-biri dan kambing) yang terdiri atas 165 ayat, termasuk golongan surat Makkiyah, karena hampur seluruh ayat-ayat-Nya diturunkan di Mekah dekat sebelum hijrah. Dinamakan <i>Al An'aam</i> karena di dalamnya disebut kata <i>An'aam</i> dalam hubungan dengan adat-istiadat kaum musyrikin, yang menurut mereka binatang-binatang ternak itu dapat dipergunakan untuk mendekatkan diri kepada tuhan mereka. Juga dalam surat ini disebutkan hukum-hukum yang berkenaan dengan binatang ternak itu.",
  "nama": "Al An'am",
  "nomor": "6",
  "rukuk": "20",
  "type": "mekah",
  "urut": "55"
}, {
  "arti": "Tempat Tertinggi",
  "asma": "الأعراف",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/007AlAaraaf.mp3",
  "ayat": 206,
  "keterangan": "Surat Al A'raaf yang berjumlah 206 ayat termasuk golongan surat Makkiyah, diturunkan sebelum turunnya surat Al An'aam dan termasuk golongan surat <i>Assab 'uththiwaal</i> (tujuh surat yang panjang). Dinamakan <i>Al A'raaf</i> karena perkataan Al A'raaf terdapat dalam ayat 46 yang mengemukakan tentang keadaan orang-orang yang berada di atas Al A'raaf yaitu: tempat yang tertinggi di batas surga dan neraka.",
  "nama": "Al A'raf",
  "nomor": "7",
  "rukuk": "24",
  "type": "mekah",
  "urut": "39"
}, {
  "arti": "Harta Rampasan Perang",
  "asma": "الأنفال",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/008AlAnfaal.mp3",
  "ayat": 75,
  "keterangan": "Surat Al Anfaal terdiri atas 75 ayat dan termasuk golongan surat-surat Madaniyyah, karena seluruh ayat-ayatnya diturunkan di Madinah. Surat ini dinamakan <i>Al Anfaal</i> yang berarti harta rampasan perang berhubung kata <i>Al Anfaal</i> terdapat pada permulaan surat ini dan juga persoalan yang menonjol dalam surat ini ialah tentang harta rampasan perang, hukum perang dan hal-hal yang berhubungan dengan peperangan pada umumnya. Menurut riwayat Ibnu Abbas r.a. surat ini diturunkan berkenaan dengan perang Badar Kubra yang terjadi pada tahun kedua hijrah. Peperangan ini sangat penting artinya, karena dialah yang menentukan jalan sejarah Perkembangan Islam. Pada waktu itu umat Islam dengan berkekuatan kecil untuk pertama kali dapat mengalahkan kaum musyrikin yang berjumlah besar, dan berperlengkapan yang cukup, dan mereka dalam peperangan ini memperoleh harta rampasan perang yang tidak sedikit. Oleh sebab itu timbullah masalah bagaimana membagi harta-harta rampasan perang itu, maka kemudian Allah menurunkan ayat pertama dari surat ini.",
  "nama": "Al Anfaal",
  "nomor": "8",
  "rukuk": "10",
  "type": "madinah",
  "urut": "88"
}, {
  "arti": "Pengampunan",
  "asma": "التوبة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/009AtTaubah.mp3",
  "ayat": 129,
  "keterangan": "Surat At Taubah terdiri atas 129 ayat termasuk golongan surat-surat Madaniyyah. Surat ini dinamakan <i>At Taubah</i> yang berarti pengampunan berhubung kata <i>At Taubah</i> berulang kali disebut dalam surat ini. Dinamakan juga dengan <i>Baraah</i> yang berarti berlepas diri yang di sini maksudnya pernyataan pemutusan perhubungan, disebabkan kebanyakan pokok pembicaraannya tentang pernyataan pemutusan perjanjian damai dengan kaum musyrikin. <br> Di samping kedua nama yang masyhur itu ada lagi beberapa nama yang lain yang merupakan sifat dari surat ini. <br> Berlainan dengan surat-surat yang lain, maka pada permulaan surat ini tidak terdapat basmalah, karena surat ini adalah pernyataan perang dengan arti bahwa segenap kaum muslimin dikerahkan untuk memerangi seluruh kaum musyrikin, sedangkan basmalah bernafaskan perdamaian dan cinta kasih Allah. <br> Surat ini diturunkan sesudah Nabi Muhammad s.a.w. kembali dari peperangan Tabuk yang terjadi pada tahun 9 H. Pengumuman ini disampaikan oleh Saidina 'Ali r.a. pada musim haji tahun itu juga.",
  "nama": "At Taubah",
  "nomor": "9",
  "rukuk": "16",
  "type": "madinah",
  "urut": "113"
}, {
  "arti": "Yunus",
  "asma": "يونس",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/010Yunus.mp3",
  "ayat": 109,
  "keterangan": "Surat Yunus terdiri atas 109 ayat, termasuk golongan surat-surat Makkiyyah kecuali ayat 40, 94, 95, yang diturunkan pada masa Nabi Muhmmad s.a.w. berada di Madinah. Surat ini dinamai <i>surat Yunus</i> karena dalam surat ini terutama ditampilkan kisah Nabi Yunus a.s. dan pengikut-pengikutnya yang teguh imannya.",
  "nama": "Yunus",
  "nomor": "10",
  "rukuk": "11",
  "type": "mekah",
  "urut": "51"
}, {
  "arti": "Hud",
  "asma": "هود",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/011Huud.mp3",
  "ayat": 123,
  "keterangan": "Surat Huud termasuk golongan surat-surat Makkiyyah, terdiri dari 123 ayat diturunkan sesudah surat Yunus. Surat ini dinamai <i>surat Huud</i> karena ada hubungan dengan terdapatnya kisah Nabi Huud a.s. dan kaumnya dalam surat ini terdapat juga kisah-kisah Nabi yang lain, seperti kisah Nuh a.s., Shaleh a.s., Ibrahim a.s., Luth a.s., Syu'aib a.s. dan Musa a.s.",
  "nama": "Huud",
  "nomor": "11",
  "rukuk": "10",
  "type": "mekah",
  "urut": "52"
}, {
  "arti": "Yusuf",
  "asma": "يوسف",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/012Yusuf.mp3",
  "ayat": 111,
  "keterangan": " Surat Yusuf ini terdiri atas 111 ayat, termasuk golongan surat-surat Makkiyyah karena diturunkan di Mekah sebelum hijrah. Surat ini dinamakan <i>surat Yusuf</i> adalah karena titik berat dari isinya mengenai riwayat Nabi Yusuf a.s.  Riwayat tersebut salah satu di antara cerita-cerita ghaib yang diwahyukan kepada Nabi Muhammad s.a.w. sebagai mukjizat bagi beliau, sedang beliau sebelum diturunkan surat ini tidak mengetahuinya.  Menurut riwayat Al Baihaqi dalam kitab <i>Ad Dalail</i> bahwa segolongan orang Yahudi masuk agama Islam sesudah mereka mendengar cerita Yusuf a.s. ini, karena sesuai dengan cerita-cerita yang mereka ketahui. Dari cerita Yusuf a.s. ini, Nabi Muhammad s.a.w. mengambil pelajaran-pelajaran yang banyak dan merupakan penghibur terhadap beliau dalam menjalankan tugasnya.",
  "nama": "Yusuf",
  "nomor": "12",
  "rukuk": "12",
  "type": "mekah",
  "urut": "53"
}, {
  "arti": "Guruh",
  "asma": "الرعد",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/013ArRaad.mp3",
  "ayat": 43,
  "keterangan": "Surat Ar Ra'd ini terdiri atas 43 ayat termasuk golongan surat-surat Makkiyyah. Surat ini dinamakan <i>Ar Ra'd</i> yang berarti <i>guruh</i> karena dalam ayat 13 Allah berfirman yang artinya <i>Dan guruh itu bertasbih sambil memuji-Nya</i>, menunjukkan sifat kesucian dan kesempurnaan Allah s.w.t.  Dan lagi sesuai dengan sifat Al Quran yang mengandung ancaman dan harapan, maka demikian pulalah halnya bunyi guruh itu menimbulkan kecemasan dan harapan kepada manusia. Isi yang terpenting dari surat ini ialah bahwa bimbingan Allah kepada makhluk-Nya bertalian erat dengan hukum sebab dan akibat. Bagi Allah s.w.t. tidak ada pilih kasih dalam menetapkan hukuman. Balasan atau hukuman adalah akibat dan ketaatan atau keingkaran terhadap hukum Allah.",
  "nama": "Ar Ra'du",
  "nomor": "13",
  "rukuk": "6",
  "type": "madinah",
  "urut": "96"
}, {
  "arti": "Ibrahim",
  "asma": "ابراهيم",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/014Ibrahim.mp3",
  "ayat": 52,
  "keterangan": "Surat Ibrahim ini terdiri atas 52 ayat, termasuk golongan surat-surat Makkiyyah karena diturunkan di Mekah sebelum Hijrah. Dinamakan <i>Ibrahim</i>, karena surat ini mengandung doa Nabi Ibrahim a.s. yaitu ayat 35 sampai dengan 41. Do'a ini isinya antara lain: permohonan agar keturunannya mendirikan shalat, dijauhkan dari menyembah berhala-berhala dan agar Mekah dan daerah sekitarnya menjadi daerah yang aman dan makmur. Doa Nabi Ibrahim a.s. ini telah diperkenankan oleh Allah s.w.t. sebagaimana telah terbukti keamanannya sejak dahulu sampai sekarang. Do'a tersebut dipanjatkan beliau ke hadirat Allah s.w.t. sesudah selesai membina Ka'bah bersama puteranya Ismail a.s., di dataran tanah Mekah yang tandus.",
  "nama": "Ibrahim",
  "nomor": "14",
  "rukuk": "7",
  "type": "mekah",
  "urut": "72"
}, {
  "arti": "Negeri Kaum Samud",
  "asma": "الحجر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/015AlHijr.mp3",
  "ayat": 99,
  "keterangan": "Surat ini terdiri atas 99 ayat, termasuk golongan surat-surat Makkiyyah,  karena diturunkan di Mekah sebelum hijrah. Al Hijr  adalah nama  sebuah daerah  pegunungan yang didiami zaman dahulu  oleh kaum  Tsamud terletak  di  pinggir  jalan antara Madinah dan Syam (Syria).<br> Nama surat ini diambil dari nama daerah pegunungan itu, berhubung nasib  penduduknya yaitu  kaum Tsamud  diceritakan pada ayat  80 sampai  dengan 84,  mereka  telah  dimusnahkan Allah  s.w.t.,  karena  mendustakan  Nabi  Shaleh  a.s.  dan berpaling   dari ayat-ayat  Allah. Dalam  surat ini terdapat juga kisah-kisah  kaum yang lain yang telah dibinasakan oleh Allah seperti  kaum Luth  a.s. dan kaum Syu'aib a.s. Dari ke semua kisah-kisah  itu dapat  diambil pelajaran bahwa orang-orang  yang  menentang  ajaran  rasul-rasul  akan  mengalami kehancuran.",
  "nama": "Al Hijr",
  "nomor": "15",
  "rukuk": "6",
  "type": "mekah",
  "urut": "54"
}, {
  "arti": "Lebah",
  "asma": "النحل",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/016AnNahl.mp3",
  "ayat": 128,
  "keterangan": "Surat ini terdiri atas 128 ayat, termasuk golongan surat-surat Makkiyyah. Surat ini dinamakan <i>An Nahl</i> yang berarti <i>lebah</i> karena di dalamnya, terdapat firman Allah s.w.t. ayat 68 yang artinya : \"Dan Tuhanmu mewahyukan kepada lebah.\" Lebah adalah makhluk Allah yang banyak memberi manfaat  dan kenikmatan kepada manusia. Ada persamaan antara madu yang dihasilkan oleh lebah dengan Al Quranul Karim. Madu berasal dari bermacam-macam sari bunga dan dia menjadi obat bagi bermacam-macam penyakit manusia (lihat ayat 69). Sedang Al Quran mengandung inti sari dari kitab-kitab yang telah diturunkan kepada Nabi-nabi zaman dahulu ditambah dengan ajaran-ajaran yang diperlukan oleh semua bangsa sepanjang masa untuk mencapai kebahagiaan dunia dan akhirat. (Lihat surat (10) Yunus ayat 57 dan surat (17) Al Isra' ayat  82). Surat ini dinamakan pula \"An Ni'am\" artinya nikmat-nikmat, karena di dalamnya Allah menyebutkan pelbagai macam nikmat untuk hamba-hamba-Nya.",
  "nama": "An Nahl",
  "nomor": "16",
  "rukuk": "16",
  "type": "mekah",
  "urut": "70"
}, {
  "arti": "Keturunan Isra’il",
  "asma": "الإسراء",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/017AlIsraa.mp3",
  "ayat": 111,
  "keterangan": "Surat ini terdiri atas 111 ayat, termasuk golongan surat-surat Makkiyyah. Dinamakan dengan <i>Al Israa'</i> yang berarti <i>memperjalankan di malam hari</i>, berhubung peristiwa Israa' Nabi Muhammad s.a.w. di Masjidil Haram di Mekah ke Masjidil Aqsha di Baitul Maqdis dicantumkan pada ayat pertama dalam surat ini. Penuturan cerita Israa' pada permulaan surat ini, mengandung isyarat bahwa Nabi Muhammad s.a.w. beserta umatnya kemudian hari akan mencapai martabat yang tinggi dan akan menjadi umat yang besar.<br> Surat ini dinamakan pula dengan <i>Bani Israil</i> artinya <i>keturunan Israil</i> berhubung dengan permulaan surat ini, yakni pada ayat kedua sampai dengan ayat kedelapan dan kemudian dekat akhir surat yakni pada ayat 101 sampai dengan ayat 104, Allah menyebutkan tentang Bani Israil yang setelah menjadi bangsa yang kuat lagi besar lalu menjadi bangsa yang terhina karena menyimpang dari ajaran Allah s.w.t. Dihubungkannya kisah Israa' dengan riwayat <i>Bani Israil</i> pada surat ini, memberikan peringatan bahwa umat Islam akan mengalami keruntuhan, sebagaimana halnya Bani Israil, apabila mereka juga meninggalkan ajaran-ajaran agamanya.",
  "nama": "Al Israa'",
  "nomor": "17",
  "rukuk": "12",
  "type": "mekah",
  "urut": "50"
}, {
  "arti": "Gua",
  "asma": "الكهف",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/018AlKahfi.mp3",
  "ayat": 110,
  "keterangan": "Surat  ini terdiri atas 110 ayat, termasuk  golongan  surat-surat Makkiyyah. Dinamai <i>Al-Kahfi</i> artinya <i>Gua</i> dan <i>Ashhabul Kahfi</i> yang artinya <i>Penghuni-Penghuni Gua</i>. Kedua nama ini diambil dari cerita yang terdapat dalam surat ini pada ayat 9 sampai dengan 26, tentang beberapa orang pemuda yang tidur dalam gua bertahun-tahun lamanya. Selain cerita tersebut, terdapat pula beberapa buah cerita dalam surat ini, yang kesemuanya mengandung i'tibar dan pelajaran-pelajaran yang amat berguna bagi kehidupan manusia. Banyak hadist-hadist Rasulullah s.a.w. yang menyatakan keutamaan membaca surat ini.",
  "nama": "Al Kahfi",
  "nomor": "18",
  "rukuk": "12",
  "type": "mekah",
  "urut": "69"
}, {
  "arti": "Maryam",
  "asma": "مريم",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/019Maryam.mp3",
  "ayat": 98,
  "keterangan": "Surat Maryam terdiri atas 98 ayat, termasuk golongan surat-surat Makkiyyah, karena hampir seluruh ayatnya diturunkan sebelum Nabi Muhammad s.a.w. hijrah ke Madinah, bahkan sebelum sahabat-sahabat beliau hijrah ke negeri Habsyi. Menurut riwayat Ibnu Mas'ud, Ja'far bin Abi Thalib membacakan permulaan surat Maryam ini kepada raja Najasyi dan pengikut-pengikutnya di waktu ia ikut hijrah bersama-sama sahabat-sahabat yang lain ke negeri Habsyi.<br>Surat ini dinamai <i>Maryam</i>, karena surat ini mengandung kisah Maryam, ibu Nabi Isa a.s. yang serba ajaib, yaitu melahirkan puteranya lsa a.s., sedang ia sebelumnya belum pernah dikawini atau dicampuri oleh seorang laki-laki pun. Kelahiran Isa a.s. tanpa bapa, merupakan suatu bukti kekuasaan Allah s.w.t.  Pengutaraan kisah Maryam sebagai kejadian yang luar biasa dan ajaib dalam surat ini, diawali dengan kisah kejadian yang luar biasa dan ajaib pula, yaitu dikabulkannya doa Zakaria a.s. oleh Allah s.w.t., agar beliau dianugerahi seorang putera sebagai pewaris dan pelanjut cita-cita dan kepercayaan beliau, sedang usia beliau sudah sangat tua dan isteri beliau seorang yang mandul yang menurut ukuran ilmu biologi tidak mungkin akan terjadi.",
  "nama": "Maryam",
  "nomor": "19",
  "rukuk": "6",
  "type": "mekah",
  "urut": "44"
}, {
  "arti": "TaHa",
  "asma": "طه",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/020Thaahaa2.mp3",
  "ayat": 135,
  "keterangan": "Surat Thaahaa terdiri atas 135 ayat, diturunkan sesudah diturunkannya surat Maryam, termasuk golongan surat-surat Makkiyyah. Surat ini dinamai <i>Thaahaa</i>, diambil dari perkataan yang berasal dan ayat pertama surat ini. Sebagaimana yang lazim terdapat pada surat-surat yang memakai huruf-huruf abjad pada permulaannya, di mana huruf tersebut seakan-akan merupakan pemberitahuan Allah kepada orang-orang yang membacanya, bahwa sesudah huruf itu akan dikemukakan hal-hal yang  sangat penting diketahui, maka demikian pula halnya dengan ayat-ayat yang terdapat sesudah huruf <i>thaahaa</i> dalam surat ini. Allah menerangkan bahwa Al Quran merupakan peringatan bagi manusia, wahyu dari Allah, Pencipta semesta alam. Kemudian Allah menerangkan kisah beberapa orang nabi; akibat-akibat yang telah ada akan dialami oleh orang-orang yang percaya kepada Allah dan orang-orang yang mengingkari-Nya, baik di dunia maupun di akhirat. Selain hal-hal tersebut di atas, maka surat ini mengandung pokok-pokok isi sebagai berikut:",
  "nama": "Thaahaa",
  "nomor": "20",
  "rukuk": "8",
  "type": "mekah",
  "urut": "45"
}, {
  "arti": "Nabi-Nabi",
  "asma": "الأنبياء",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/021AlAnbiyaa.mp3",
  "ayat": 112,
  "keterangan": "Surat Al Anbiyaa' yang terdiri atas 112 ayat, termasuk golongan surat Makkiyyah. Dinamai surat ini dengan <i>al anbiyaa'</i>(nabi-nabi), karena surat ini mengutarakan kisah beberapa orang nabi. Permulaan surat Al Anbiyaa' menegaskan bahwa manusia lalai dalam menghadapi hari berhisab, kemudian berhubung adanya pengingkaran kaum musyrik Mekah terhadap wahyu yang dibawa Nabi Muhammad s.a.w. maka ditegaskan Allah, kendatipun nabi-nabi itu manusia biasa, akan tetapi masing-masing mereka adalah manusia yang membawa wahyu yang pokok ajarannya adalah tauhid, dan keharusan manusia menyembah Allah Tuhan Penciptanya. Orang yang tidak mau mengakui kekuasaan Allah dan mengingkari ajaran yang dibawa oleh nabi-nabi itu, akan diazab Allah didunia dan di akhirat nanti. Kemudian dikemukakan kisah beberapa orang nabi dengan umatnya. Akhirnya surat itu ditutup dengan seruan agar kaum musyrik Mekah percaya kepada ajaran yang dibawa Muhammad s.a.w supaya tidak mengalami apa yang telah dialami oleh umat-umat yang dahulu.",
  "nama": "Al Anbiyaa",
  "nomor": "21",
  "rukuk": "7",
  "type": "mekah",
  "urut": "73"
}, {
  "arti": "Haji",
  "asma": "الحج",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/022AlHajj.mp3",
  "ayat": 78,
  "keterangan": "Surat Al Hajj, termasuk golongan surat-surat Madaniyyah, terdiri atas 78 ayat, sedang menurut pendapat sebahagian ahli tafsir termasuk golongan surat-surat Makkiyah. Sebab perbedaan ini ialah karena sebahagian ayat-ayat surat ini ada yang diturunkan di Mekah dan sebahagian lagi diturunkan di Madinah. <br>Dinamai surat ini <i>Al Hajj</i>, karena surat ini mengemukakan hal-hal yang berhubungan dengan ibadat haji, seperti ihram, thawaf, sa'i, wuquf di Arafah, mencukur rambut, syi'ar-syi'ar Allah, faedah-faedah dan hikmah-hikmah disyari'atkannya haji. Ditegaskan pula bahwa ibadat haji itu telah disyari'atkan di masa Nabi Ibrahim a.s., dan Ka'bah didirikan oleh Nabi Ibrahim a.s. bersama puteranya Ismail a.s.<br>Menurut Al Ghaznawi, surat Al Hajj termasuk di antara surat- surat yang ajaib, diturunkan di malam dan di siang hari, dalam musafir dan dalam keadaan tidak musafir, ada ayat-ayat yang diturunkan di Mekah dan ada pula yang diturunkan di Madinah, isinya ada yang berhubungan dengan peperangan dan ada pula yang berhubungan dengan perdamaian, ada ayat-ayatnya yang muhkam dan ada pula yang mutasyabihaat.",
  "nama": "Al Hajj",
  "nomor": "22",
  "rukuk": "10",
  "type": "madinah",
  "urut": "103"
}, {
  "arti": "Orang-Orang yang Beriman",
  "asma": "المؤمنون",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/023AlMuminuun.mp3",
  "ayat": 118,
  "keterangan": "Surat Al Mu'minuun terdiri atas 118 ayat, termasuk golongan surat-surat Makkiyyah. Dinamai <i>Al Mu'minuun</i>, karena permulaan ayat ini manerangkan bagaimana seharusnya sifat-sifat orang mukmin yang menyebabkan keberuntungan mereka di akhirat dan ketenteraman jiwa mereka di dunia. Demikian tingginya sifat-sifat itu, hingga ia telah menjadi akhlak bagi Nabi Muhammad s.a.w.",
  "nama": "Al Mu'minun",
  "nomor": "23",
  "rukuk": "6",
  "type": "mekah",
  "urut": "74"
}, {
  "arti": "Cahaya",
  "asma": "النور",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/024AnNuur.mp3",
  "ayat": 64,
  "keterangan": "Surat An Nuur terdiri atas 64 ayat, dan termasuk golongan surat-surat Madaniyah. Dinamai <i>An Nuur</i> yang berarti <i>Cahaya</i>, diambil dari kata An Nuur yang terdapat pada ayat ke 35. Dalam ayat ini, Allah s.w.t. menjelaskan tentang Nuur Ilahi, yakni Al Quran yang mengandung petunjuk-petunjuk. Petunjuk-petunjuk Allah itu, merupakan cahaya yang terang benderang menerangi alam semesta. Surat ini sebagian besar isinya memuat petunjuk- petunjuk Allah yang berhubungan dengan soal kemasyarakatan dan rumah tangga.",
  "nama": "An Nuur",
  "nomor": "24",
  "rukuk": "9",
  "type": "madinah",
  "urut": "102"
}, {
  "arti": "Pembeda",
  "asma": "الفرقان",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/025AlFurqaan.mp3",
  "ayat": 77,
  "keterangan": "Surat ini terdiri atas 77 ayat, termasuk golongan surat-surat Makkiyah. Dinamai <i>Al Furqaan</i> yang artinya <i>pembeda</i>, diambil dari kata <i>Al Furqaan</i> yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan Al Furqaan dalam ayat ini ialah Al Quran.<br> Al Quran dinamakan Al Furqaan karena dia membedakan antara yang haq dengan yang batil. MAka pada surat ini pun terdapat ayat-ayat yang membedakan antara kebenaran ke-esaan Allah s.w.t. dengan kebatilan kepercayaan syirik.",
  "nama": "Al Furqaan",
  "nomor": "25",
  "rukuk": "6",
  "type": "mekah",
  "urut": "42"
}, {
  "arti": "Para Penyair",
  "asma": "الشعراء",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/026AsySyuaaraa.mp3",
  "ayat": 227,
  "keterangan": "Surat ini terdiri dari 227 ayat termasuk golongan surat-surat Makkiyyah. Dinamakan <i>Asy Syu'araa'</i> (kata jamak dari <i>Asy Syaa'ir</i> yang berarti penyair) diambil dari kata <i>Asy Syuaraa'</i> yang terdapat pada ayat 224, yaitu pada bagian terakhir surat ini, di kala Allah s.w.t. secara khusus menyebutkan kedudukan penyair- penyair. Para penyair-penyair itu mempunyai sifat-sifat yang jauh berbeda dengan para rasul-rasul; mereka diikuti oleh orang-orang yang sesat dan mereka suka memutar balikkan lidah dan mereka tidak mempunyai pendirian, perbuatan mereka tidak sesuai dengan tidak mempunyai pendirian, perbuatan mereka tidak sesuai dengan apa yang mereka ucapkan. Sifat-sifat yang demikian tidaklah sekali-kali terdapat pada rasul-rasul. Oleh karena demikian tidak patut bila Nabi Muhammad s.a.w. dituduh sebagai penyair, dan Al Quran dituduh sebagai syair, Al Quran adalah wahyu Allah, bukan buatan manusia.",
  "nama": "Asy Syu'ara",
  "nomor": "26",
  "rukuk": "11",
  "type": "mekah",
  "urut": "47"
}, {
  "arti": "Semut",
  "asma": "النمل",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/027AnNaml.mp3",
  "ayat": 93,
  "keterangan": "Surat An Naml terdiri atas 98 ayat, termasuk golongan surat- surat Makkiyyah dan diturunkan sesudah surat Asy Syu'araa'. Dinamai dengan <i>An Naml</i>, karena pada ayat 18 dan 19 terdapat perkataan <i>An Naml</i> (semut), di mana raja semut mengatakan kepada anak buahnya agar masuk sarangnya masing-masing, supaya jangan terpijak oleh Nabi Sulaiman a.s. dan tentaranya yang akan lalu di tempat itu. Mendengar perintah raja semut kepada anak buahnya itu, Nabi Sulaiman tersenyum dan ta'jub atas keteraturan kerajaan semut itu dan beliau mengucapkan syukur kepada Tuhan Yang Maba Kuasa yang telah melimpahkan nikmat kepadanya, berupa kerajaan, kekayaan, memahami ucapan-ucapan binatang, mempunyai tentara yang terdiri atas jin, manusia, burung dan sebagainya. Nabi Sulaiman a.s. yang telah diberi Allah nikmat yang besar itu tidak merasa takabur dan sombong dan sebagai seorang hamba Allah mohon agar Allah memasukkannya ke dalam golongan orang-orang yang saleh. Allah s.w.t. menyebut binatang semut dalam surat ini agar manusia mengambil pelajaran dari kehidupan semut itu. Semut adalah binatang yang hidup berkelompok di dalam tanah, membuat liang dan ruang yang bertingkat-tingkat sebagai rumah dan gudang tempat menyimpan makanan musim dingin. Kerapian dan kedisiplinan yang terdapat dalam kerajaan semut ini, dinyatakan Allah dalam ayat ini dengan bagaimana rakyat semut mencari perlindungan segera agar jangan terpijak oleh Nabi Sulaiman a.s dan tentaranya, setelah menerima peringatan dari rajanya. Secara tidak langsung Allah mengingatkan juga kepada manusia agar dalam berusaha untuk mencukupkan kebutuhan sehari-hari, mementingkan pula kemaslahatan bersama dan sebagainya, rakyat semut mempunyai organisasi dan kerja sama yang baik pula. Dengan mengisahkan kisah Nabi Sulaiman a.s. dalam surat ini Allah mengisyaratkan hari depan dan kebesaran Nabi Muhammad s.a.w. Nabi Sulaiman a.s. sebagai seorang nabi, rasul dan raja yang dianugerahi kekayaan yang melimpah ruah, begitu pula Nabi Muhammad s.a.w. sebagai seorang nabi, rasul dan seoramg kepala negara yang ummi' dan miskin akan berhasil membawa dan memimpin umatnya ke jalan Allah.",
  "nama": "An Naml",
  "nomor": "27",
  "rukuk": "7",
  "type": "mekah",
  "urut": "48"
}, {
  "arti": "Cerita-Cerita",
  "asma": "القصص",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/028AlQashash.mp3",
  "ayat": 88,
  "keterangan": "Surat Al Qashash terdiri atas 88 ayat termasuk golongan surat-surat Makkiyyah. Dinamai dengan <i>Al Qashash</i>, karena pada ayat 25 surat ini terdapat kata <i>Al Qashash</i> yang berarti <i>cerita</i>. Ayat ini menerangkan bahwa setelah Nabi Musa a.s. bertemu dengan Nabi Syua'ib a.s. ia menceritakan cerita yang berhubungan  dengan dirinya sendiri, yakni pengalamannya dengan Fir'aun, sampai waktu ia diburu oleh Fir'aun karena membunuh seseorang dari bangsa Qibthi tanpa disengaja, Syua'ib a.s. menjawab bahwa Musa a.s. telah selamat dari pengejaran  orang-orang zalim. Turunnya ayat 25 surat ini amat besar artinya bagi Nabi Muhammad s.a.w. dan bagi sahabat-sahabat yang melakukan hijrah ke Madinah, yang menambah keyakinan mereka, bahwa akhirnya orang-orang Islamlah yang menang, sebab ayat ini menunjukkan bahwa barangsiapa yang berhijrah dari tempat musuh untuk mempertahankan keimanan, pasti akan berhasil dalam perjuangannya menghadapi musuh-musuh agama. Kepastian kemenangan bagi kaum muslimin itu, ditegaskan pada bagian akhir surat ini yang mengandung bahwa setelah hijrah ke Madinah kaum muslimin akan kembali ke Mekah sebagai pemenang dan penegak agama Allah. Surat Al Qashash ini adalah surat yang paling lengkap memuat cerita Nabi Musa a.s. sehingga menurut suatu riwayat, surat ini dinamai juga dengan surat Musa.",
  "nama": "Al Qashash",
  "nomor": "28",
  "rukuk": "8",
  "type": "mekah",
  "urut": "49"
}, {
  "arti": "Laba-Laba",
  "asma": "العنكبوت",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/029AlAnkabuut.mp3",
  "ayat": 69,
  "keterangan": "Surat Al 'Ankabuut terdiri atas 69 ayat, termasuk golongan surat-surrat Makkiyah. Dinamai <i>Al 'Ankabuut</i> berhubung terdapatnya perkataan <i>Al 'Ankabuut</i> yang berarti <i>laba-laba</i> pada ayat 41 surat ini, dimana Allah mengumpamakan penyembah-penyembah berhala-berhala itu, dengan laba-laba yang percaya kepada kekuatan rumahnya sebagai tempat ia berlindung dan tempat ia menjerat mangsanya, padahal kalau dihembus angin atau ditimpa oleh suatu barang yang kecil saja, rumah itu akan hancur. Begitu pula halnya dengan kaum musyrikin yang percaya kepada kekuatan sembahan-sembahan mereka sebagai tempat berlindung dan tempat meminta sesuatu yang mereka ingini, padahal sembahan-sembahan mereka itu tidak mampu sedikit juga menolong mereka dari azab Allah waktu di dunia, seperti yang terjadi pada kaum Nuh, kaum Ibrahim, kaum Luth, kaum Syu'aib, kaum Saleh, dan lain-lain. Apalagi menghadapi azab Allah di akhirat nanti, sembahan-sembahan mereka itu lebih tidak mampu menghindarkan dan melindungi mereka.",
  "nama": "Al 'Ankabut",
  "nomor": "29",
  "rukuk": "7",
  "type": "mekah",
  "urut": "85"
}, {
  "arti": "Bangsa Romawi",
  "asma": "الروم",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/030ArRuum.mp3",
  "ayat": 60,
  "keterangan": "Surat Ar Ruum terdiri atas 60 ayat, termasuk golongan surat-surat Makkiyah diturunkan sesudah ayat Al Insyiqaq. Dinamakan <i>Ar Ruum</i> karena pada permulaan surat ini, yaitu ayat 2, 3 dan 4 terdapat pemberitaan bangsa Rumawi yang pada mulanya dikalahkan oleh bangsa Persia, tetapi setelah beberapa tahun kemudian kerajaan Ruum dapat menuntut balas dan mengalahkan kerajaan Persia kembali. Ini adalah suatu mukjizat Al Quran, yaitu memberitakan hal-hal yang akan terjadi di masa yang akan datang. Dan juga suatu isyarat bahwa kaum muslimin yang demikian lemahnya di waktu itu akan menang dan dapat menghancurkan kaum musyrikin. Isyarat ini terbukti pertama kali pada perang Badar.",
  "nama": "Ar Ruum",
  "nomor": "30",
  "rukuk": "6",
  "type": "mekah",
  "urut": "84"
}, {
  "arti": "Luqman",
  "asma": "لقمان",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/031Luqman.mp3",
  "ayat": 34,
  "keterangan": "Surat  Luqman  terdiri   dari   34   ayat,   termasuk   golongan   surat-surat Makkiyyah, diturunkan sesudah surat Ash Shaffaat. <br>Dinamai <i>Luqman</i> karena pada  ayat  12   disebutkan   bahwa   <i>Luqman</i>   telah diberi   oleh   Allah   nikmat   dan   ilmu   pengetahuan,  oleh sebab itu dia bersyukur kepadaNya atas nikmat yang  diberikan  itu.   Dan   pada   ayat   13 sampai 19 terdapat nasihat-nasihat Luqman kepada anaknya.<br>Ini adalah sebagai  isyarat   daripada   Allah   supaya   setiap   ibu   bapak melaksanakan  pula terhadap anak-anak mereka sebagai yang telah dilakukan oleh Luqman.",
  "nama": "Luqman",
  "nomor": "31",
  "rukuk": "3",
  "type": "mekah",
  "urut": "57"
}, {
  "arti": "Sujud",
  "asma": "السجدة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/032AsSajdah.mp3",
  "ayat": 30,
  "keterangan": "Surat As Sajdah terdiri atas 30 ayat termasuk golongan surat Makkiyah diturunkan sesudah surat Al Mu'minuun. Dinamakan <i>As Sajdah</i> berhubung pada surat ini terdapat ayat sajdah, yaitu ayat yang kelima belas.",
  "nama": "As Sajdah",
  "nomor": "32",
  "rukuk": "3",
  "type": "mekah",
  "urut": "75"
}, {
  "arti": "Golongan yang Bersekutu",
  "asma": "الأحزاب",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/033AlAhzab.mp3",
  "ayat": 73,
  "keterangan": "Surat Al Ahzab terdiri atas 73 ayat, termasuk golongan surat-surat Madaniyah, diturunkan sesudah surat Ali'Imran. Dinamai <i>Al Ahzab</i> yang berarti <i>golongan-golongan yang bersekutu</i> karena dalam surat ini terdapat beberapa ayat, yaitu ayat 9 sampai dengan ayat 27 yang berhubungan dengan peperangan Al Ahzab, yaitu peperangan yang dilancarkan oleh orang-orang Yahudi, kaum munafik dan orang-orang musyrik terhadap orang-orang mukmin di Medinah. Mereka telah mengepung rapat orang- orang mukmin sehingga sebahagian dari mereka telah berputus asa dan menyangka bahwa mereka akan dihancurkan oleh musuh-musuh mereka itu. Ini adalah suatu ujian yang berat dari Allah untuk menguji sampai dimana teguhnya keimanan mereka. Akhirnya Allah mengirimkan bantuan berupa tentara yang tidak kelihatan dan angin topan, sehingga musuh-musuh itu menjadi kacau balau dan melarikan diri.",
  "nama": "Al Ahzab",
  "nomor": "33",
  "rukuk": "9",
  "type": "madinah",
  "urut": "90"
}, {
  "arti": "Kaum Saba’",
  "asma": "سبإ",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/034Sabaa.mp3",
  "ayat": 54,
  "keterangan": "Surat Saba' terdiri atas 54 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Luqman. Dinamakan <i>Saba'</i> karena didalamnya terdapat kisah kaum Saba'. Saba' adalah nama suatu kabilah dari kabilah-kabilah Arab yang tinggal di daerah Yaman sekarang ini. Mereka mendirikan kerajaan yang terkenal dengan nama kerajaan Sabaiyyah, ibukotanya Ma'rib; telah dapat membangun suatu bendungan raksasa, yang bernama <i>Bendungan Ma'rib</i>, sehingga negeri meka subur dan makmur. Kemewahan dan kemakmuran ini menyebabkan kaum Saba' lupa dan ingkar kepada Allah yang telah melimpahkan nikmatnya kepada mereka, serta mereka mengingkari pula seruan para rasul. Karena keingkaran mereka ini, Allah menimpahkan kepada mereka azab berupa <i>sailul 'arim</i> (banjir yang besar) yang ditimbulkan oleh bobolnya bendungan Ma'rib. Setelah bendungan ma'rib bobol negeri Saba' menjadi kering dan kerajaan mereka hancur.",
  "nama": "Saba'",
  "nomor": "34",
  "rukuk": "6",
  "type": "mekah",
  "urut": "58"
}, {
  "arti": "Pencipta",
  "asma": "فاطر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/035Faathir.mp3",
  "ayat": 45,
  "keterangan": "Surat Faathir terdiri atas 45 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Furqaan dan merupakan surat akhir dari urutan surat-surat dalam Al Quran yang dimulai dengan <i>Alhamdulillah</i>. Dinamakan <i>Faathir</i> (pencipta) ada hubungannya dengan perkataan <i>Faathir</i> yang terdapat pada ayat pertama pada surat ini. Pada ayat tersebut diterangkan bahwa Allah adalah Pencipta langit dan bumi, Pencipta malaikat-malaikat, Pencipta semesta alam yang semuanya itu adalah sebagai bukti atas kekuasaan dan kebesaran-Nya. Surat ini dinamai juga dengan <i>surat Malaikat</i> karena pada ayat pertama disebutkan bahwa Allah telah menjadikan malaikat-malaikat sebagai utusan-Nya  yang mempunyai beberapa sayap.",
  "nama": "Faathir",
  "nomor": "35",
  "rukuk": "5",
  "type": "mekah",
  "urut": "43"
}, {
  "arti": "YaSin",
  "asma": "يس",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/036Yaasiin.mp3",
  "ayat": 83,
  "keterangan": "Surat <i>Yaasiin</i> terdiri atas 83 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Jin. Dinamai <i>Yaasiin</i> karena dimulai dengan huruf <i>Yaasiin</i>. Sebagaimana halnya arti huruf-huruf abjad yang terletak pada permulaan beberapa surat Al Quran, maka demikian pula arti <i>Yaasiin</i> yang terdapat pada ayat permulaan surat ini, yaitu Allah mengisyaratkan bahwa sesudah huruf tersebut akan dikemukakan hal-hal yang penting antara lain: Allah bersumpah dengan Al Quran bahwa Muhammad s.a.w. benar-benar seorang rasul yang diutus-Nya kepada kaum yang belum pernah diutus kepada mereka rasul-rasul.",
  "nama": "Yaa Siin",
  "nomor": "36",
  "rukuk": "5",
  "type": "mekah",
  "urut": "41"
}, {
  "arti": "Yang Bersaf-saf",
  "asma": "الصافات",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/037AshShaaffaat.mp3",
  "ayat": 182,
  "keterangan": "Surat Ash Shaaffaat terdiri atas 182 ayat termasuk golongan surat Makkiyyah diturunkan sesudah surat Al An'aam. Dinamai dengan <i>Ash Shaaffaat</i> (yang bershaf-shaf) ada hubungannya dengan perkataan <i>Ash Shaaffaat</i> yang terletak pada ayat permulaan surat ini yang mengemukakan bagaimana para malaikat yang berbaris di hadapan Tuhannya yang bersih jiwanya, tidak dapat digoda oleh syaitan. Hal ini hendaklah menjadi i'tibar bagi manusia dalam menghambakan dirinya kepada Allah.",
  "nama": "Ash Shaaffat",
  "nomor": "37",
  "rukuk": "5",
  "type": "mekah",
  "urut": "56"
}, {
  "arti": "Sad",
  "asma": "ص",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/038Shaad.mp3",
  "ayat": 88,
  "keterangan": "Surat Shaad  terdiri atas  88 ayat  termasuk golongan  surat Makkiyyah, diturunkan sesudah surat Al Qamar. Dinamai  dengan  <i>Shaad</i>  karena surat  ini  dimulai  dengan <i>Shaad</i> (selanjutnya lihat no. <a href=\"s002a001.htm\">[10)</a>). Dalam surat  ini Allah  bersumpah dengan  Al Quran,   untuk menunjukkan bahwa Al Quran itu suatu  kitab yang  agung dan bahwa siapa saja yang  mengikutinya  akan mendapat  kebahagiaan  dunia  dan akhirat dan untuk menunjukkan bahwa Al Quran ini adalah mukjizat Nabi Muhammad s.a.w. yang  menyatakan kebenarannya dan ketinggian akhlaknya.",
  "nama": "Shaad",
  "nomor": "38",
  "rukuk": "5",
  "type": "mekah",
  "urut": "38"
}, {
  "arti": "Rombongan-Rombongan",
  "asma": "الزمر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/039AzZumar.mp3",
  "ayat": 75,
  "keterangan": "Surat Az Zumar terdiri ataz 75 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Saba'. Dinamakan <i>Az Zumar</i> (Rombongan-rombongan) karena perkataan <i>Az Zumar</i> yang terdapat pada ayat 71 dan 73 ini. Dalam ayat-ayat tersebut diterangkan keadaan manusia di hari kiamat setelah mereka dihisab, di waktu itu mereka terbagi atas dua rombongan; satu rombongan dibawa ke neraka dan satu rombongan lagi dibawa ke syurga. Masing- masing rombongan memperoleh balasan dari apa yang mereka kerjakan di dunia dahulu. Surat ini dinamakan juga <i>Al Ghuraf</i> (kamar-kamar) berhubung perkataan <i>ghuraf</i> yang terdapat pada ayat 20, dimana diterangkan keadaan kamar-kamar dalam syurga yang diperoleh orang-orang yang bertakwa.",
  "nama": "Az Zumar",
  "nomor": "39",
  "rukuk": "8",
  "type": "mekah",
  "urut": "59"
}, {
  "arti": "Orang yang Beriman",
  "asma": "غافر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/040AlMuumin.mp3",
  "ayat": 85,
  "keterangan": "Surat Al Mu'min terdiri atas 85 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Az Zumar. Dinamai <i>Al Mu'min</i> (Orang yang beriman), berhubung dengan perkataan <i>mukmin</i> yang terdapat pada ayat 28 surat ini. Pada ayat 28 diterangkan bahwa salah seorang dari kaum Fir'aun telah beriman kepada Nabi Musa a.s. dengan menyembunyikan imannya kepada kaumnya, setelah mendengar keterangan dan melihat mukjizat yang dikemukakan oleh Nabi Musa a.s. Hati kecil orang ini mencela Fir'aun dan kaumnya yang tidak mau beriman kepada Nabi Musa a.s., sekalipun telah dikemukakan keterangan dan mukjizat yang diminta mereka.<br>Dinamakan pula <i>Ghafir</i> (yang mengampuni), karena ada hubungannya dengan kalimat <i>Ghafir</i> yang terdapat pada ayat 3 surat ini. Ayat ini mengingatkan bahwa <i>Maha Pengampun</i> dan <i>Maha Penerima Taubat</i> adalah sebagian dari sifat-sifat Allah, karena itu hamba-hamba Allah tidak usah khawatir terhadap  perbuatan-perbuatan dosa yang telah terlanjur mereka lakukan, semuanya itu akan diampuni Allah asal benar-benar memohon ampun dan bertaubat kepada-Nya dan berjanji tidak akan mengerjakan  perbuatan-perbuatan dosa itu lagi. Dan surat ini dinamai <i>Dzit Thaul</i> (Yang Mempunyai Kurnia) karena perkataan tersebut terdapat pada ayat 3.",
  "nama": "Al Ghaafir",
  "nomor": "40",
  "rukuk": "9",
  "type": "mekah",
  "urut": "60"
}, {
  "arti": "Ha Mim As-Sajdah",
  "asma": "فصلت",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/041Fushshilat.mp3",
  "ayat": 54,
  "keterangan": "Surat Fushshilat terdiri atas 54 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Mu'min. Dinamai <i>Fushshilat</i> (yang dijelaskan) karena ada hubungannya dengan perkataan <i>Fushshilat</i> yang terdapat pada permulaan surat ini yang berarti <i>yang dijelaskan</i>. Maksudnya ayat-ayatnya diperinci dengan jelas tentang hukum-hukum, keimanan, janji dan ancaman, budi pekerti, kisah, dan sebagainya. Dinamai juga dengan <i>Haa Miim dan As Sajdah</i> karena surat ini dimulai dengan <i>Haa Miim</i> dan dalam surat ini terdapat ayat Sajdah.",
  "nama": "Al Fushilat",
  "nomor": "41",
  "rukuk": "6",
  "type": "mekah",
  "urut": "61"
}, {
  "arti": "Musyawarah",
  "asma": "الشورى",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/042AsySyuura.mp3",
  "ayat": 53,
  "keterangan": "Surat Asy Syuura terdiri atas 53 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Fushshilat. Dinamai dengan <i>Asy Syuura</i> (musyawarat) diambil dari perkataan <i>Syuura</i> yang terdapat pada ayat 38 surat ini. Dalam ayat tersebut diletakkan salah satu dari dasar-dasar pemerintahan Islam ialah musyawarat. Dinamai juga <i>Haa Miim 'Ain Siin Qaaf</i> karena surat ini dimulai dengan huruf-huruf hijaiyah itu.",
  "nama": "Asy Syuura",
  "nomor": "42",
  "rukuk": "5",
  "type": "mekah",
  "urut": "62"
}, {
  "arti": "Perhiasan",
  "asma": "الزخرف",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/043AzZukhruf.mp3",
  "ayat": 89,
  "keterangan": "Surat Az Zukhruf terdiri atas 89 ayat, termasuk golongan  surat-surat Makkiyyah, diturunkan sesudah surat Asy Syuura. <br>Dinamai <i>Az Zukhruf</i> (Perhiasan) diambil dari perkataan <i>Az Zukhruf</i> yang terdapat pada ayat 35 surat ini.  Orang-orang musyrik mengukur tinggi rendahnya derajat seseorang tergantung kepada perhiasan dan harta benda yang ia punyai, karena Muhammad s.a.w. adalah seorang anak yatim lagi miskin, ia tidak pantas diangkat Allah sebagai seorang rasul dan nabi.  Pangkat rasul dan nabi harus diberikan kepada orang yang kaya.  Ayat ini menegaskan bahwa harta tidak dapat dijadikan dasar untuk mengukur tinggi rendahnya derajat seseorang, karena harta itu merupakan hiasan kehidupan duniawi, bukan berarti kesenangan akhirat.",
  "nama": "Az Zukhruf",
  "nomor": "43",
  "rukuk": "7",
  "type": "mekah",
  "urut": "63"
}, {
  "arti": "Kabut",
  "asma": "الدخان",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/044AdDukhaan.mp3",
  "ayat": 59,
  "keterangan": "Surat Ad Dukhaan terdiri atas 59 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah Az Zukhruf. <br>Dinamai <i>Ad Dukhaan</i> (kabut), diambil dari perkataan <i>Dukhaan</i> yang terdapat pada ayat 10 surat ini.<br>Menurut riwayat Bukhari secara ringkas dapat diterangkan sebagai berikut: Orang-orang kafir Mekah dalam menghalang-halangi agama Islam dan menyakiti serta mendurhakai Nabi Muhammad s.a.w. sudah melewati batas, karena itu Nabi mendoa kepada Allah agar diturunkan azab sebagaimana yang telah diturunkan kepada orang-orang yang durhaka kepada Nabi Yusuf yaitu musim kemarau yang panjang.  Do'a Nabi itu dikabulkan Allah sampai orang-orang kafir memakan tulang dan bangkai, karena kelaparan.  Mereka selalu menengadah ke langit mengharap pertolongan Allah.  Tetapi tidak satupun yang mereka lihat kecuali kabut yang menutupi pandangan mereka.<br>Akhirnya mereka datang kepada Nabi agar Nabi memohon kepada Allah supaya hujan diturunkan.  Setelah Allah mengabulkan doa Nabi, dan hujan di turunkan, mereka kembali kafir seperti semula; karena itu Allah menyatakan bahwa nanti mereka akan diazab dengan azab yang pedih.",
  "nama": "Ad Dukhaan",
  "nomor": "44",
  "rukuk": "3",
  "type": "mekah",
  "urut": "64"
}, {
  "arti": "Yang Berlutut",
  "asma": "الجاثية",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/045AlJaatsiyah.mp3",
  "ayat": 37,
  "keterangan": "Surat Al Jaatsiyah terdiri atas 37 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Ad Dukhaan. Dinamai dengan <i>Al Jaatsiyah</i> (yang berlutut) diambil dari perkataan <i>Jaatsiyah</i> yang terdapat pada ayat 28 surat ini. Ayat tersebut menerangkan tentang keadaan manusia pada hari kiamat, yaitu semua manusia dikumpulkan ke hadapan mahkamah Allah Yang Maha Tinggi yang memberikan keputusan terhadap perbuatan yang telah mereka lakukan di dunia. Pada hari itu semua manusia berlutut di hadapan Allah. Dinamai juga dengan <i>Asy Syari'ah</i> diambil dari perkataan <i>Syari'ah</i> (Syari'at) yang terdapat pada ayat 18 surat ini.",
  "nama": "Al Jaatsiyah",
  "nomor": "45",
  "rukuk": "4",
  "type": "mekah",
  "urut": "65"
}, {
  "arti": "Bukit-Bukit Pasir",
  "asma": "الأحقاف",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/046AlAhqaaf.mp3",
  "ayat": 35,
  "keterangan": "Surat Al Ahqaaf terdiri dari 35 ayat termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Jaatsiyah. Dinamai <i>Al Ahqaaf</i>  (bukit-bukit pasir) dari perkataan <i>Al Ahqaaf</i> yang terdapat pada ayat 21 surat ini.<br>Dalam ayat tersebut dan ayat-ayat sesudahnya diterangkan bahwa Nabi Hud a.s. telah menyampaikan risalahnya kepada kaumnya di <i>Al Ahqaaf</i> yang sekarang dikenal dengan Ar Rab'ul Khaali, tetapi kaumnya tetap ingkar sekalipun mereka telah diberi peringatan pula oleh rasul-rasul yang sebelumnya.  Akhirnya Allah menghancurkan mereka dengan tiupan angin kencang.  Hal ini adalah sebagai isyarat dari Allah kepada kaum musyrikin Quraisy bahwa mereka akan dihancurkan bila mereka tidak mengindahkan seruan Rasul.",
  "nama": "Al Ahqaaf",
  "nomor": "46",
  "rukuk": "4",
  "type": "mekah",
  "urut": "66"
}, {
  "arti": "Nabi Muhammad SAW",
  "asma": "محمد",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/047Muhammad.mp3",
  "ayat": 38,
  "keterangan": "Surat Muhammad terdiri atas 38 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hadiid. Nama <i>Muhammad</i> sebagai nama surat ini diambil dari perkataan Muhammad yang terdapat pada ayat 2 surat ini. Pada ayat 1, 2, dan 3 surat ini, Allah membandingkan antara hasil yang diperoleh oleh orang-orang yang tidak percaya kepada apa yang diturunkan kepada Nabi Muhammad s.a.w dan hasil yang diperoleh oleh orang-orang yang tidak percaya kepadanya. Orang-orang yang percaya kepada apa yang dibawa oleh Muhammad s.a.w merekalah orang-orang yang beriman dan mengikuti yang hak, diterima Allah semua amalnya, diampuni segala kesalahannya. Adapun orang-orang yang tidak percaya kepada Muhammad s.a.w adalah orang-orang yang mengikuti kebatilan, amalnya tidak diterima, dosa mereka tidak diampuni, kepada mereka dijanjikan azab di dunia dan di akhirat.<br>Dinamai juga dengan <i>Al Qital</i> (peperangan), karena sebahagian besar surat ini mengutarakan tentang peperangan dan pokok-pokok hukumnya, serta bagaimana seharusnya sikap orang-orang mukmin terhadap orang-orang kafir.",
  "nama": "Muhammad",
  "nomor": "47",
  "rukuk": "4",
  "type": "madinah",
  "urut": "95"
}, {
  "arti": "Kemenangan",
  "asma": "الفتح",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/048AlFath.mp3",
  "ayat": 29,
  "keterangan": "Surat Al Fath terdiri atas 29 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Jum'ah. Dinamakan <i>Al Fath (kemenangan)</i> diambil dari perkataan <i>Fat-han</i> yang terdapat pada ayat pertama surat ini. Sebagian besar dari ayat-ayat surat ini menerangkan hal-hal yang berhubungan dengan kemenangan yang dicapai Nabi Muhammad s.a.w. dalam peperangan-peperangannya. <br>Nabi Muhammad s.a.w. sangat gembira dengan turunnya ayat pertama surat ini. Kegembiraan ini dinyatakan dalam sabda beliau yang diriwayatkan Bukhari; <i>Sesungguhnya telah diturunkan kepadaku satu surat, yang surat itu benar-benar lebih aku cintai dari seluruh apa yang disinari matahari</i>. Kegembiraan Nabi Muhammad s.a.w. itu ialah karena ayat-ayatnya menerangkan tentang kemenangan yang akan diperoleh Muhammad s.a.w. dalam perjuangannya dan tentang kesempurnaan nikmat Allah kepadanya.",
  "nama": "Al Fath",
  "nomor": "48",
  "rukuk": "4",
  "type": "madinah",
  "urut": "111"
}, {
  "arti": "Kamar-Kamar",
  "asma": "الحجرات",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/049AlHujuraat.mp3",
  "ayat": 18,
  "keterangan": "Surat Al Hujuraat terdiri atas 18 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Mujaadalah. Dinamai <i>Al Hujuraat</i> diambil dari perkataan <i>Al Hujuraat</i> yang terdapat pada ayat 4 surat ini. Ayat tersebut mencela para sahabat yang memanggil Nabi Muhammad SAW yang sedang berada di dalam kamar rumahnya bersama isterinya. Memanggil Nabi Muhammad SAW dengan cara dan dalam keadaan yang demikian menunjukkan sifat kurang hormat kepada beliau dan mengganggu ketenteraman beliau.",
  "nama": "Al Hujuraat",
  "nomor": "49",
  "rukuk": "2",
  "type": "madinah",
  "urut": "106"
}, {
  "arti": "Qaf",
  "asma": "ق",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/050Qaaf.mp3",
  "ayat": 45,
  "keterangan": "Surat Qaaf terdiri atas 45 ayat, termasuk golongan surat-surat Makkiyah diturunkan sesudah surat Al Murssalaat. Dinamai <i>Qaaf</i> karena surat ini dimulai dengan huruf <i>Qaaf</i>. Menurut hadits yang diriwayatkan Imam Muslim, bahwa Rasulullah SAW senang membaca surat ini pada rakaat pertama sembahyang subuh dan pada shalat hari raya. Sedang menurut riwayat Abu Daud, Al Baihaqy dan Ibnu Majah bahwa Rasulullah SAW membaca surat ini pada tiap-tiap membaca Khutbah pada hari Jum'at. Kedua riwayat ini menunjukkan bahwa surat QAAF sering dibaca Nabi Muhammad SAW di tempat-tempat umum, untuk memperingatkan manusia tentang kejadian mereka dan nikmat-nikmat yang diberikan kepadanya, begitu pula tentang hari berbangkit, hari berhisab, syurga, neraka, pahala, dosa, dsb. Surat ini dinamai juga <i>Al Baasiqaat</i>, diambil dari perkataan <i>Al- Baasiqaat</i> yang terdapat pada ayat 10 surat ini.",
  "nama": "Qaaf",
  "nomor": "50",
  "rukuk": "3",
  "type": "mekah",
  "urut": "34"
}, {
  "arti": "Angin yang menerbangkan",
  "asma": "الذاريات",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/051AdzDzaariyaat.mp3",
  "ayat": 60,
  "keterangan": "Surat Adz Dzaariyaat terdiri atas 60 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Ahqaaf. Dinamai <i>Adz Dzaariyaat</i> (angin yang menerbangkan), diambil dari perkataan <i>Adz Dzaariyaat</i> yang terdapat pada ayat pertama surat ini. Allah bersumpah dengan angin, mega, bahtera, dan malaikat yang menjadi sumber kesejahteraan dan pembawa kemakmuran. Hal ini meng- isyaratkan inayat Allah kepada hamba-hamba-Nya.",
  "nama": "Adz Dzaariyaat",
  "nomor": "51",
  "rukuk": "3",
  "type": "mekah",
  "urut": "67"
}, {
  "arti": "Bukit",
  "asma": "الطور",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/052AthThuur.mp3",
  "ayat": 49,
  "keterangan": "Surat Ath Thuur terdiri atas 49 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat As Sajdah. Dinamai <i>Ath Thuur</i> (Bukit) diambil dari perkataan <i>Ath Thuur</i> yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan <i>bukit</i> di sini ialah bukit Thursina yang terletak di semenanjung Sinai, tempat Nabi Musa menerima wahyu dari Tuhannya.",
  "nama": "Ath Thuur",
  "nomor": "52",
  "rukuk": "2",
  "type": "mekah",
  "urut": "76"
}, {
  "arti": "Bintang",
  "asma": "النجم",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/053AnNajm.mp3",
  "ayat": 62,
  "keterangan": "Surat An Najm terdiri atas 62 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Ikhlash. Nama <i>An Najm</i> (bintang), diambil dari perkataan  <i>An Najm</i> yang terdapat pada ayat pertama surat ini. Allah bersumpah dengan <i>An Najm</i> (bintang) adalah karena bintang-bintang yang timbul dan tenggelam, amat besar manfaatnya bagi manusia, sebagai pedoman bagi manusia dalam melakukan pelayaran di lautan, dalam perjalanan di padang pasir, untuk menentukan peredaran musim dan sebagainya.",
  "nama": "An Najm",
  "nomor": "53",
  "rukuk": "3",
  "type": "mekah",
  "urut": "23"
}, {
  "arti": "Bulan",
  "asma": "القمر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/054AlQamar.mp3",
  "ayat": 55,
  "keterangan": "Surat Al Qamar terdiri atas 55 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesedah surat Ath Thaariq. Nama <i>Al Qamar</i> (bulan) diambil dari perkataan <i>Al Qamar</i> yang terdapat pada ayat pertama surat ini. Pada ayat ini diterangkan tentang terbelahnya bulan sebagai mukjizat Nabi Muhammad s.a.w.",
  "nama": "Al Qamar",
  "nomor": "54",
  "rukuk": "3",
  "type": "mekah",
  "urut": "37"
}, {
  "arti": "Yang Maha Pemurah",
  "asma": "الرحمن",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/055ArRahmaan.mp3",
  "ayat": 78,
  "keterangan": "Surat Ar Rahmaan terdiri atas 78 ayat, termasuk golongan surat- surat Makkiyyah, diturunkan sesudah surat Ar Ra'du. Dinamai <i>Ar Rahmaan</i> (Yang Maha Pemurah), diambil dari perkataan <i>Ar Rahmaan</i> yang terdapat pada ayat pertama surat ini. Ar Rahmaan adalah salah satu dari nama-nama Allah. Sebagian besar dari surat ini menerangkan kepemurahan Allah s.w.t. kepada hamba-hamba-Nya, yaitu dengan memberikan nikmat-nikmat yang tidak terhingga baik di dunia maupun di akhirat nanti.",
  "nama": "Ar Rahmaan",
  "nomor": "55",
  "rukuk": "3",
  "type": "madinah",
  "urut": "97"
}, {
  "arti": "Hari Kiamat",
  "asma": "الواقعة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/056AlWaqiah.mp3",
  "ayat": 96,
  "keterangan": "Surat Al Waaqi'ah terdiri atas 96 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Thaa Haa. \tDinamai dengan <i>Al Waaqi'ah</i> (Hari Kiamat), diambil dari perkataan <i>Al Waaqi'ah</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Waaqi'ah",
  "nomor": "56",
  "rukuk": "3",
  "type": "mekah",
  "urut": "46"
}, {
  "arti": "Besi",
  "asma": "الحديد",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/057AlHadiid.mp3",
  "ayat": 29,
  "keterangan": "Surat Al Hadiid terdiri atas 29 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Az Zalzalah. Dinamai <i>Al Hadiid</i> (Besi), diambil dari perkataan <i>Al Hadiid</i> yang terdapat pada ayat 25 surat ini.",
  "nama": "Al Hadiid",
  "nomor": "57",
  "rukuk": "4",
  "type": "madinah",
  "urut": "94"
}, {
  "arti": "Wanita yang Mengajukan Gugatan",
  "asma": "المجادلة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/058AlMujaadilah.mp3",
  "ayat": 22,
  "keterangan": "Surat Al Mujaadilah terdiri atas 22 ayat, termasuk golongan surat Madaniyyah, diturunkan sesudah surat Al Munaafiquun. Surat ini dinamai dengan <i>Al Mujaadilah</i> (wanita yang mengajukan gugatan) karena pada awal surat ini disebutkan bantahan seorang perempuan, menurut riwayat bernama Khaulah binti Tsa'labah terhadap sikap suaminya yang telah menzhiharnya. Hal ini diadukan kepada Rasulullah s.a.w. dan ia menuntut supaya beliau memberikan putusan yang adil dalam persoalan itu. Dinamai juga <i>Al Mujaadalah</i> yang berarti <i>perbantahan</i>.",
  "nama": "Al Mujaadalah",
  "nomor": "58",
  "rukuk": "3",
  "type": "madinah",
  "urut": "105"
}, {
  "arti": "Pengusiran",
  "asma": "الحشر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/059AlHasyr.mp3",
  "ayat": 24,
  "keterangan": "Surat Al Hasyr terdiri atas 24 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Bayyinah.<br> \tDinamai surat <i>Al Hasyr</i> (pengusiran) diambil dari perkataan <i>Al-Hasyr</i> yang terdapat pada ayat 2 surat ini. Di dalam surat ini disebutkan  kisah pengusiran suatu suku Yahudi yang bernama Bani Nadhir yang berdiam  di sekitar kota Madinah.",
  "nama": "Al Hasyr",
  "nomor": "59",
  "rukuk": "3",
  "type": "madinah",
  "urut": "101"
}, {
  "arti": "Perempuan yang Diuji",
  "asma": "الممتحنة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/060AlMumtahanah.mp3",
  "ayat": 13,
  "keterangan": "Surat Al Mumtahanah terdiri atas 13 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Ahzab. Dinamai <i>Al Mumtahanah</i> (wanita yang diuji), diambil dari kata \"Famtahinuuhunna\" yang berarti <i>maka ujilah mereka</i>, yang terdapat pada ayat 10 surat ini.",
  "nama": "Al mumtahanah",
  "nomor": "60",
  "rukuk": "2",
  "type": "madinah",
  "urut": "91"
}, {
  "arti": "Barisan",
  "asma": "الصف",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/061AshShaff.mp3",
  "ayat": 14,
  "keterangan": "Surat Ash Shaff terdiri atas 14 ayat termasuk golongan surat-surat Madaniyyah. Dinamai dengan <i>Ash Shaff</i>, karena pada ayat 4 surat ini terdapat kata <i>Shaffan</i> yang berarti <i>satu barisan</i>. Ayat ini menerangkan apa yang diridhai Allah sesudah menerangkan apa yang dimurkai-Nya. Pada ayat 3 diterangkan bahwa Allah murka kepada orang yang hanya pandai berkata saja tetapi tidak melaksanakan apa yang diucapkannya. Dan pada ayat 4 diterangkan bahwa Allah menyukai orang yang mempraktekkan apa yang diucapkannya yaitu orang-orang yang berperang pada jalan Allah dalam satu barisan.",
  "nama": "Ash Shaff",
  "nomor": "61",
  "rukuk": "2",
  "type": "madinah",
  "urut": "109"
}, {
  "arti": "Hari Jum’at",
  "asma": "الجمعة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/062AlJumuah.mp3",
  "ayat": 11,
  "keterangan": "Surat Al Jumu'ah ini terdiri atas 11 ayat, termasuk golongan-golongan surat-surat Madaniyyah dan diturunkan sesudah surat Ash Shaf. Nama surat Al Jumu'ah diambil dari kata <i>Al Jumu'ah</i> yang terdapat pada ayat 9 surat ini yang artinya: <i>hari Jum'at</i>.",
  "nama": "Al Jumuah",
  "nomor": "62",
  "rukuk": "2",
  "type": "madinah",
  "urut": "110"
}, {
  "arti": "Orang-Orang yang Munafik",
  "asma": "المنافقون",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/063AlMunaafiquun.mp3",
  "ayat": 11,
  "keterangan": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hajj. Surat ini dinamai <i>Al-Munaafiquun</i>  yang artinya orang-orang munafik, karena surat ini mengungkapkan  sifat-sifat orang-orang munafik.",
  "nama": "Al Munafiqun",
  "nomor": "63",
  "rukuk": "2",
  "type": "madinah",
  "urut": "104"
}, {
  "arti": "Hari Ditampakkan Segala Kesalahan",
  "asma": "التغابن",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/064AtTaghaabun.mp3",
  "ayat": 18,
  "keterangan": "Surat ini terdiri atas 18 ayat, termasuk golongan surat-surat Madaniyyah dan diturunkan sesudah surat At Tahrim. Nama <i>At Taghaabun</i> diambil dari kata <i>At Taghaabun</i> yang terdapat pada ayat ke 9 yang artinya <i>hari dinampakkan kesalahan-kesalahan</i>.",
  "nama": "Ath Taghabun",
  "nomor": "64",
  "rukuk": "2",
  "type": "madinah",
  "urut": "108"
}, {
  "arti": "Talak",
  "asma": "الطلاق",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/065AthThalaaq.mp3",
  "ayat": 12,
  "keterangan": "Surat ini terdiri atas 12 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Insaan. Dinamai surat <i>Ath Thalaaq</i> karena kebanyakan ayat-ayatnya mengenai masalah talak dan yang berhubungan dengan masalah itu.",
  "nama": "Ath Thalaaq",
  "nomor": "65",
  "rukuk": "2",
  "type": "madinah",
  "urut": "99"
}, {
  "arti": "Mengharamkan",
  "asma": "التحريم",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/066AtTahrim.mp3",
  "ayat": 12,
  "keterangan": "Surat ini terdiri atas 12 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hujuraat. Dinamai surat <i>At Tahrim</i> karena pada awal surat ini terdapat kata <i>tuharrim</i> yang kata asalnya adalah Attahrim yang berarti <i>mengharamkan</i>.",
  "nama": "At Tahriim",
  "nomor": "66",
  "rukuk": "2",
  "type": "madinah",
  "urut": "107"
}, {
  "arti": "Kerajaan",
  "asma": "الملك",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/067AlMulk.mp3",
  "ayat": 30,
  "keterangan": "Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat  Makkiyah, diturunkan sesudah Ath Thuur.<br> Nama <i>Al Mulk</i> diambil dari kata <i>Al Mulk</i> yang terdapat pada ayat pertama surat ini yang artinya kerajaan atau kekuasaan. Dinamai pula surat ini dengan <i>At Tabaarak</i> (Maha Suci).",
  "nama": "Al Mulk",
  "nomor": "67",
  "rukuk": "2",
  "type": "mekah",
  "urut": "77"
}, {
  "arti": "Kalam",
  "asma": "القلم",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/068AlQalam.mp3",
  "ayat": 52,
  "keterangan": "Surat ini terdiri atas 52 ayat,termasuk golongan surat-surat Makkiyah,diturunkan sesudah surat Al Alaq. <br>Nama <i>Al Qalam</i> diambil dari kata Al Qalam yang terdapat pada ayat pertama surat iniyang artinya <i>pena</i>. Surat ini dinamai pula dengan surat <i>Nun</i> (huruf <i>nun</i>).",
  "nama": "Al Qalam",
  "nomor": "68",
  "rukuk": "2",
  "type": "mekah",
  "urut": "2"
}, {
  "arti": "Hari Kiamat",
  "asma": "الحاقة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/069AlHaaqqah.mp3",
  "ayat": 52,
  "keterangan": "Surat ini terdiri atas 52 ayat,termasuk golongan surat-surat Makkiyah,diturunkan sesudah surat Al Mulk. <br> Nama <i>Al Haaqqah</i> diambil dari kata <i>Al Haaqqah</i> yang terdapat pada ayat pertama surat ini yang artinya <i>hari kiamat</i>",
  "nama": "Al Haaqqah",
  "nomor": "69",
  "rukuk": "2",
  "type": "mekah",
  "urut": "78"
}, {
  "arti": "Tempa-Tempat Naik",
  "asma": "المعارج",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/070AlMaaarij.mp3",
  "ayat": 44,
  "keterangan": "Surat ini terdiri atas 44 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Haaqqah.<br>Perkataan <i>Al Ma'arij</i> yang menjadi nama bagi surat ini adalah kata jamak dari <i>Mi'raj</i>, diambil dari perkataan Al Ma'arij yang terdapat pada ayat 3, yang artinya menurut bahasa <i>tempat naik</i>. Sedang para ahli  tafsir memberi arti bermacam-macam, di antaranya <i>langit</i>, nikmat karunia dan derajat atau tingkatan yang diberikan Allah s.w.t kepada ahli surga.",
  "nama": "Al Ma'aarij",
  "nomor": "70",
  "rukuk": "2",
  "type": "mekah",
  "urut": "79"
}, {
  "arti": "Nuh",
  "asma": "نوح",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/071Nuh.mp3",
  "ayat": 28,
  "keterangan": "Surat ini terdiri atas 28 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Nahl. <br>Dinamakan dengan surat <i>Nuh</i> karena surat ini seluruhnya menjelaskan da'wah dan doa Nabi Nuh a.s.",
  "nama": "Nuh",
  "nomor": "71",
  "rukuk": "2",
  "type": "mekah",
  "urut": "71"
}, {
  "arti": "Jin",
  "asma": "الجن",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/072AlJin.mp3",
  "ayat": 28,
  "keterangan": "Surat Al Jin terdiri atas 28 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al A'raaf. Dinamai <i>Al Jin</i> diambil dari perkataan <i>Al Jin</i> yang terdapat  pada ayat pertama surat ini. Pada ayat tersebut dan ayat-ayat berikutnya  diterangkan bahwa Jin sebagai makhluk halus telah mendengar pembacaan  Al Quran dan mereka mengikuti ajaran Al Quran tersebut.",
  "nama": "Al Jin",
  "nomor": "72",
  "rukuk": "2",
  "type": "mekah",
  "urut": "40"
}, {
  "arti": "Orang-orang yang Berselimut",
  "asma": "المزمل",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/073AlMuzzammil.mp3",
  "ayat": 20,
  "keterangan": "Surat Al Muzzammil terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Qalam.<br>Dinamai <i>Al Muzzammil</i> (orang yang berselimut) diambil dari perkataan <i>Al Muzzammil</i> yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan <i>orang yang berkemul</i> ialah Nabi Muhammad s.a.w.",
  "nama": "Al Muzammil",
  "nomor": "73",
  "rukuk": "2",
  "type": "mekah",
  "urut": "3"
}, {
  "arti": "Orang yang berkemul",
  "asma": "المدثر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/074AlMuddatstsir.mp3",
  "ayat": 56,
  "keterangan": "Surat Al Muddatstsir terdiri atas 56 ayat, termasuk golongan  surat-surat Makkiyah, diturunkan sesudah surat Al Muzzammil. \tDinamai <i>Al Muddatstsir</i> (orang yang berkemul) diambil dari perkataan <i>Al Muddatstsir</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Muddastir",
  "nomor": "74",
  "rukuk": "2",
  "type": "mekah",
  "urut": "4"
}, {
  "arti": "Hari Kiamat",
  "asma": "القيامة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/075AlQiyaamah.mp3",
  "ayat": 40,
  "keterangan": "Surat Al Qiyaamah terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Qaari'ah. Dinamai <i>Al Qiyaamah</i> (hari kiamat) diambil dari perkataan <i>Al Qiyaamah</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Qiyaamah",
  "nomor": "75",
  "rukuk": "2",
  "type": "mekah",
  "urut": "31"
}, {
  "arti": "Manusia",
  "asma": "الانسان",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/076AlInsaan.mp3",
  "ayat": 31,
  "keterangan": "Surat Al Insaan terdiri atas 31 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ar Rahmaan. Dinamai <i>al Insaan</i> (manusia) diambil dari perkataan <i>Al Insaan</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Insaan",
  "nomor": "76",
  "rukuk": "2",
  "type": "madinah",
  "urut": "98"
}, {
  "arti": "Malaikat yang Diutus",
  "asma": "المرسلات",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/077AlMursalaat.mp3",
  "ayat": 50,
  "keterangan": "Surat Al Mursalaat terdiri atas 50 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Humazah. Dinamai <i>Al Mursalaat</i> (Malaikat-Malaikat yang diutus), diambil dari perkataan <i>Al Mursalaat</i> yang terdapat pada ayat pertama surat ini. Dinamai juga <i>Amma yatasaa aluun</i> diambil dari perkataan <i>Amma yatasaa aluun</i> yang terdapat pada ayat 1 surat ini.",
  "nama": "Al Mursalaat",
  "nomor": "77",
  "rukuk": "2",
  "type": "mekah",
  "urut": "33"
}, {
  "arti": "Berita Besar",
  "asma": "النبإ",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/078AnNaba.mp3",
  "ayat": 40,
  "keterangan": "Surat An Naba´ terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Ma´aarij. <br>Dinamai <i>An Naba´</i> (berita besar) diambil dari perkataan <i>An Naba´</i> yang terdapat pada ayat 2 surat ini. Dinamai juga <i>Amma yatasaa aluun</i> diambil dari perkataan <i>Amma yatasaa aluun</i> yang terdapat pada ayat 1 surat ini.",
  "nama": "An Naba'",
  "nomor": "78",
  "rukuk": "2",
  "type": "mekah",
  "urut": "80"
}, {
  "arti": "Malaikat-Malaikat yang Mencabut",
  "asma": "النازعات",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/079AnNaaziaat.mp3",
  "ayat": 46,
  "keterangan": "Surat An Naazi´aat terdiri atas 46 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Naba´. Dinamai <i>An Naazi´aat</i> diambil dari perkataan <i>An Naazi´aat</i> yang terdapat pada ayat pertama surat ini. Dinamai pula <i>as Saahirah</i> yang diambil dari ayat 14, dinamai juga <i>Ath Thaammah</i> diambil dari ayat 34.",
  "nama": "An Naazi'at",
  "nomor": "79",
  "rukuk": "2",
  "type": "mekah",
  "urut": "81"
}, {
  "arti": "Ia Bermuka Masam",
  "asma": "عبس",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/080Abasa.mp3",
  "ayat": 42,
  "keterangan": "Surat 'Abasa terdiri atas 42 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Najm. Dinamai <i>'Abasa</i>  diambil dari perkataan <i>'Abasa</i> yang terdapat pada ayat pertama surat ini.<br> Menurut riwayat, pada suatu ketika Rasulullah s.a.w. menerima dan berbicara dengan pemuka-pemuka Quraisy yang beliau harapkan agar mereka masuk Islam. Dalam pada itu datanglah Ibnu Ummi Maktum, seorang sahabat yang buta yang mengharap agar Rasulullah s.a.w. membacakan kepadanya ayat- ayat Al Quran yang telah diturunkan Allah. tetapi Rasulullah s.a.w. bermuka masam dan memalingkan muka dari Ibnu Ummi Maktum yang buta itu, lalu Allah menurunkan surat ini sebagai teguran atas sikap Rasulullah terhadap ibnu Ummi Maktum itu.",
  "nama": "'Abasa",
  "nomor": "80",
  "rukuk": "1",
  "type": "mekah",
  "urut": "24"
}, {
  "arti": "Menggulung",
  "asma": "التكوير",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/081AtTakwiir.mp3",
  "ayat": 29,
  "keterangan": "Surat At Takwir terdiri atas 29 ayat dan termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Masadd. Kata <i>At Takwir</i> (terbelah) yang menjadi nama bagi surat ini adalah dari kata asal (mashdar) dari kata kerja <i>kuwwirat</i> (digulung) yang terdapat pada ayat pertama surat ini.",
  "nama": "At Takwiir",
  "nomor": "81",
  "rukuk": "1",
  "type": "mekah",
  "urut": "7"
}, {
  "arti": "Terbelah",
  "asma": "الإنفطار",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/082AlInfithaar.mp3",
  "ayat": 19,
  "keterangan": "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat An Naazi'aat. Al Infithaar yang dijadikan  nama untuk surat ini adalah kata asal dari kata <i>Infatharat</i> (terbelah)  yang terdapat pada ayat pertama.",
  "nama": "Al Infithar",
  "nomor": "82",
  "rukuk": "1",
  "type": "mekah",
  "urut": "82"
}, {
  "arti": "Kecurangan",
  "asma": "المطففين",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/083AlMuthaffifin.mp3",
  "ayat": 36,
  "keterangan": "Surat ini terdiri atas 36 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al 'Ankabuut dan merupakan  surat yang terakhir di Mekkah sebelum hijrah. <i>Al Muthaffifiin</i>  yang dijadikan nama bagi surat ini diambil dari kata  <i>Al Muthaffifiin</i> yang terdapat pada ayat pertama.",
  "nama": "Al Muthaffifin",
  "nomor": "83",
  "rukuk": "1",
  "type": "mekah",
  "urut": "86"
}, {
  "arti": "Terbelah",
  "asma": "الإنشقاق",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/084AlInsyiqaaq.mp3",
  "ayat": 25,
  "keterangan": "Surat Al Insyiqaaq, terdiri atas 25 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Infithaarr. Dinamai <i>Al Insyiqaaq</i> (terbelah), diambil dari perkataan <i>Insyaqqat</i> yang terdapat pada permulaan surat ini, yang pokok katanya ialah <i>insyiqaaq</i>.",
  "nama": "Al Insyiqaq",
  "nomor": "84",
  "rukuk": "1",
  "type": "mekah",
  "urut": "83"
}, {
  "arti": "Gugusan Bintang",
  "asma": "البروج",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/085AlBuruuj.mp3",
  "ayat": 22,
  "keterangan": "Surat Al Buruuj terdiri atas 22 ayat, termasuk golongan surat-surat Makkiyyah diturunkan sesudah surat Asy-Syams.<br>Dinamai <i>Al Buruuj</i> (gugusan bintang) diambil dari perkataan <i>Al Buruuj</i> yang terdapat pada ayat 1 surat ini.",
  "nama": "Al Buruuj",
  "nomor": "85",
  "rukuk": "1",
  "type": "mekah",
  "urut": "27"
}, {
  "arti": "Yang Datang di Malam Hari",
  "asma": "الطارق",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/086AthThaariq.mp3",
  "ayat": 17,
  "keterangan": "Surat Ath Thaariq terdiri atas 17 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Balad.  Dinamai <i>Ath Thaariq</i> (yang datang di malam hari) diambil dari  perkataan <i>Ath Thaariq</i> yang terdapat pada ayat 1 surat ini.",
  "nama": "Ath Thariq",
  "nomor": "86",
  "rukuk": "1",
  "type": "mekah",
  "urut": "36"
}, {
  "arti": "Yang Paling Tinggi",
  "asma": "الأعلى",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/087AlAalaa.mp3",
  "ayat": 19,
  "keterangan": "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyyah, dan diturunkan sesudah surat At Takwiir. Nama <i>Al A´laa</i> diambil dari kata <i>Al A´laa</i> yang terdapat pada ayat pertama, berarti <i>Yang Paling Tinggi</i>. Muslim meriwayatkan dalam kitab Al Jumu'ah, dan diriwayatkan pula oleh Ashhaabus Sunan, dari Nu'man ibnu Basyir bahwa Rasulullah s.a.w. pada shalat dua hari Raya (Fitri dan Adha) dan shalat Jum'at membaca surat Al A´laa pada rakaat pertama, dan surat Al Ghaasyiyah pada rakaat kedua.",
  "nama": "Al A'laa",
  "nomor": "87",
  "rukuk": "1",
  "type": "mekah",
  "urut": "8"
}, {
  "arti": "Hari Pembalasan",
  "asma": "الغاشية",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/088AlGhaasyiyah.mp3",
  "ayat": 26,
  "keterangan": "Surat ini terdiri atas 26 ayat, termasuk surat-surat Makkiyah, diturunkan sesudah surat Adz Dzaariat. Nama <i>Ghaasyiyah</i> diambil dari kata <i>Al Ghaasyiyah</i> yang terdapat pada ayat pertama surat ini yang  artinya peristiwa yang dahsyat, tapi yang dimaksud adalah hari kiamat. Surat ini adalah surat yang kerap kali dibaca Nabi pada rakaat kedua  pada shalat hari-hari Raya dan shalat Jum'at",
  "nama": "Al Ghaasyiah",
  "nomor": "88",
  "rukuk": "1",
  "type": "mekah",
  "urut": "68"
}, {
  "arti": "Fajar",
  "asma": "الفجر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/089AlFajr.mp3",
  "ayat": 30,
  "keterangan": "Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Lail. Nama <i>Al Fajr</i> diambil dari kata <i>Al Fajr</i> yang terdapat pada ayat pertama surat ini yang artinya <i>fajar</i>.",
  "nama": "Al Fajr",
  "nomor": "89",
  "rukuk": "1",
  "type": "mekah",
  "urut": "10"
}, {
  "arti": "Negeri",
  "asma": "البلد",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/090AlBalad.mp3",
  "ayat": 20,
  "keterangan": "Surat Al Balad terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Qaaf. Dinamai <i>Al Balad</i>, diambil dari perkataan <i>Al Balad</i> yang terdapat  pada ayat pertama surat ini. Yang dimaksud dengan kota di sini ialah kota Mekah.",
  "nama": "Al Balad",
  "nomor": "90",
  "rukuk": "1",
  "type": "mekah",
  "urut": "35"
}, {
  "arti": "Matahari",
  "asma": "الشمس",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/091AsySyams.mp3",
  "ayat": 15,
  "keterangan": "Surat Asy Syams terdiri atas 15 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qadar.  Dinamai <i>Asy Syams</i> (matahari) diambil dari perkataan <i>Asy Syams</i> yang terdapat pada ayat permulaan surat ini.",
  "nama": "Asy Syams",
  "nomor": "91",
  "rukuk": "1",
  "type": "mekah",
  "urut": "26"
}, {
  "arti": "Malam",
  "asma": "الليل",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/092AlLail.mp3",
  "ayat": 21,
  "keterangan": "Surat ini terdiri atas 21 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al A'laa. Surat ini dinamai <i>Al Lail</i> (malam), diambil dari perkataan <i>Al Lail</i> yang terdapat pada ayat pertama surat ini",
  "nama": "Al Lail",
  "nomor": "92",
  "rukuk": "1",
  "type": "mekah",
  "urut": "9"
}, {
  "arti": "Waktu Dhuha",
  "asma": "الضحى",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/093AdhDhuhaa.mp3",
  "ayat": 11,
  "keterangan": "Surat ini terdiri atas 11 ayat, termasuk golongan surat Makiyyah dan diturunkan sesudah surat Al Fajr. Nama <i>Adh Dhuhaa</i> diambil dari kata yang terdapat pada ayat pertama, artinya : waktu matahari sepenggalahan naik.",
  "nama": "Adh Dhuhaa",
  "nomor": "93",
  "rukuk": "1",
  "type": "mekah",
  "urut": "11"
}, {
  "arti": "Kelapangan",
  "asma": "الشرح",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/094AlamNasyrah.mp3",
  "ayat": 8,
  "keterangan": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat Adh Dhuhaa. Nama <i>Alam Nasyrah</i> diambil dari kata <i>Alam Nasyrah</i> yang terdapat pada ayat pertama, yang berarti: bukankah Kami telah melapangkan.",
  "nama": "Asy Syarh",
  "nomor": "94",
  "rukuk": "1",
  "type": "mekah",
  "urut": "12"
}, {
  "arti": "Buah Tin",
  "asma": "التين",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/095AtTiin.mp3",
  "ayat": 8,
  "keterangan": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Buruuj. Nama At Tiin diambil dari kata <i>At Tiin</i> yang terdapat pada ayat pertama surat ini yang artinya buah Tin.",
  "nama": "At Tiin",
  "nomor": "95",
  "rukuk": "1",
  "type": "mekah",
  "urut": "28"
}, {
  "arti": "Segumpal Darah",
  "asma": "العلق",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/096AlAlaq.mp3",
  "ayat": 19,
  "keterangan": "Surat Al 'Alaq terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah. Ayat 1 sampai dengan 5 dari surat ini adalah ayat-ayat Al Quran yang pertama sekali diturunkan, yaitu di waktu Nabi Muhammad s.a.w. berkhalwat di gua Hira'. Surat ini dinamai <i>Al 'Alaq</i> (segumpal darah), diambil dari perkataan <i>Alaq</i> yang terdapat pada ayat 2 surat ini. Surat ini dinamai juga dengan <i>Iqra</i> atau <i>Al Qalam</i>.",
  "nama": "Al 'Alaq",
  "nomor": "96",
  "rukuk": "1",
  "type": "mekah",
  "urut": "1"
}, {
  "arti": "Kemuliaan",
  "asma": "القدر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/097AlQadr.mp3",
  "ayat": 5,
  "keterangan": "Surat Al Qadr terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat 'Abasa. Surat ini dinamai <i>Al Qadr</i> (kemuliaan), diambil dari perkataan <i>Al Qadr</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Qadr",
  "nomor": "97",
  "rukuk": "1",
  "type": "mekah",
  "urut": "25"
}, {
  "arti": "Bukti yang Nyata",
  "asma": "البينة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/098AlBayyinah.mp3",
  "ayat": 8,
  "keterangan": "Surat Al Bayyinah terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ath Thalaq. Dinamai <i>Al Bayyinah</i> (bukti yang nyata) diambil dari perkataan <i>Al Bayyinah</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Bayyinah",
  "nomor": "98",
  "rukuk": "1",
  "type": "madinah",
  "urut": "100"
}, {
  "arti": "Keguncangan",
  "asma": "الزلزلة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/099AlZalzalah.mp3",
  "ayat": 8,
  "keterangan": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah diturunkan sesudah surat An Nisaa'. Nama <i>Al Zalzalah</i> diambil dari kata: <i>Zilzaal</i> yang terdapat pada ayat pertama surat ini yang berarti goncangan.",
  "nama": "Az Zalzalah",
  "nomor": "99",
  "rukuk": "1",
  "type": "madinah",
  "urut": "93"
}, {
  "arti": "Kuda Perang yang Berlari Kencang",
  "asma": "العاديات",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/100AlAadiyaat.mp3",
  "ayat": 11,
  "keterangan": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al'Ashr. Nama <i>Al 'Aadiyaat</i> diambil dari kata <i>Al 'Aadiyaat</i> yang terdapat pada ayat pertama surat ini, artinya yang berlari kencang.",
  "nama": "Al 'Aadiyah",
  "nomor": "100",
  "rukuk": "1",
  "type": "mekah",
  "urut": "14"
}, {
  "arti": "Hari Kiamat",
  "asma": "القارعة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/101AlQaariah.mp3",
  "ayat": 11,
  "keterangan": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Quraisy. Nama <i>Al Qaari'ah</i> diambil dari kata <i>Al Qaari'ah</i> yang terdapat pada ayat pertama, artinya mengetok dengan keras, kemudian kata ini dipakai untuk nama hari kiamat.",
  "nama": "Al Qaari'ah",
  "nomor": "101",
  "rukuk": "1",
  "type": "mekah",
  "urut": "30"
}, {
  "arti": "Bermegah-Megahan",
  "asma": "التكاثر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/102AtTakaatsur.mp3",
  "ayat": 8,
  "keterangan": "Surat At Takaatsur terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kautsar. Dinamai <i>At Takaatsur</i> (bermegah-megahan) diambil dari perkataan <i>At Takaatsur</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "At Takaatsur",
  "nomor": "102",
  "rukuk": "1",
  "type": "mekah",
  "urut": "16"
}, {
  "arti": "Masa",
  "asma": "العصر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/103AlAshr.mp3",
  "ayat": 3,
  "keterangan": "Surat Al 'Ashr terdiri atas 3 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Alam Nasyrah. Dinamai <i>Al 'Ashr</i> (masa) diambil dari perkataan <i>Al 'Ashr</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al 'Ashr",
  "nomor": "103",
  "rukuk": "1",
  "type": "mekah",
  "urut": "13"
}, {
  "arti": "Pengumpat",
  "asma": "الهمزة",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/104AlHumazah.mp3",
  "ayat": 9,
  "keterangan": "Surat Al Humazah terdiri atas 9 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qiyaamah. Dinamai <i>Al Humazah</i> (pengumpat) diambil dari perkataan <i>Humazah</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Humazah",
  "nomor": "104",
  "rukuk": "1",
  "type": "mekah",
  "urut": "32"
}, {
  "arti": "Gajah",
  "asma": "الفيل",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/105AlFiil.mp3",
  "ayat": 5,
  "keterangan": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kaafirun. Nama <i>Al Fiil</i> diambil dari kata <i>Al Fiil</i> yang terdapat pada ayat pertama surat ini, artinya <i>gajah</i>. Surat Al Fiil mengemukakan cerita pasukan bergajah dari Yaman yang dipimpin oleh Abrahah yang ingin meruntuhkan Ka'bah di Mekah. Peristiwa ini terjadi pada tahun Nabi Muhammad s.a.w. dilahirkan.",
  "nama": "Al Fiil",
  "nomor": "105",
  "rukuk": "1",
  "type": "mekah",
  "urut": "19"
}, {
  "arti": "Suku Quraysy",
  "asma": "قريش",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/106Quraisy.mp3",
  "ayat": 4,
  "keterangan": "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat Makkiyyah dan diturunkan sesudah surat At Tiin. Nama <i>Quraisy</i> diambil dari kata <i>Quraisy</i> yang terdapat pada ayat pertama, artinya suku Quraisy. Suku Quraisy adalah suku yang mendapat  kehormatan untuk memelihara Ka'bah.",
  "nama": "Quraisy",
  "nomor": "106",
  "rukuk": "1",
  "type": "mekah",
  "urut": "29"
}, {
  "arti": "Barang-Barang yang Berguna",
  "asma": "الماعون",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/107AlMaauun.mp3",
  "ayat": 7,
  "keterangan": "Surat ini terdiri atas 7 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat At Taakatsur. Nama <i>Al Maa'uun</i> diambil dari kata <i>Al Maa'uun</i> yang terdapat pada ayat 7, artinya barang-barang yang berguna.",
  "nama": "Al Maa'uun",
  "nomor": "107",
  "rukuk": "1",
  "type": "mekah",
  "urut": "17"
}, {
  "arti": "Nikmat yang Banyak",
  "asma": "الكوثر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/108AlKautsar.mp3",
  "ayat": 3,
  "keterangan": "Surat Al Kautsar terdiri atas 3 ayat, termasuk golongan surat-surat  Makkiyyah diturunkan sesudah surat Al 'Aadiyaat. Dinamai <i>Al Kautsar</i> (nikmat yang banyak) diambil dari perkataan <i>Al Kautsar</i> yang terdapat pada ayat pertama surat ini.<br>Surat ini sebagai penghibur hati Nabi Muhammad s.a.w.",
  "nama": "Al Kautsar",
  "nomor": "108",
  "rukuk": "1",
  "type": "mekah",
  "urut": "15"
}, {
  "arti": "Orang-Orang Kafir",
  "asma": "الكافرون",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/109AlKaafiruun.mp3",
  "ayat": 6,
  "keterangan": "Surat Al Kaafiruun terdiri atas 6 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah surat Al Maa'uun. Dinamai <i>Al Kaafiruun</i> (orang-orang kafir), diambil dari perkataan  <i>Al Kaafiruun</i> yang terdapat pada ayat pertama surat ini.",
  "nama": "Al Kafirun",
  "nomor": "109",
  "rukuk": "1",
  "type": "mekah",
  "urut": "18"
}, {
  "arti": "Pertolongan",
  "asma": "النصر",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/110AnNashr.mp3",
  "ayat": 3,
  "keterangan": "Surat An Nashr terdiri atas 3 ayat, termasuk golongan surat-surat  Madaniyyah yang diturunkan di Mekah sesudah surat At Taubah.  Dinamai <i>An Nashr</i> (pertolongan) diambil dari perkataan <i>Nashr</i> yang  terdapat pada ayat pertama surat ini.",
  "nama": "An Nashr",
  "nomor": "110",
  "rukuk": "1",
  "type": "madinah",
  "urut": "114"
}, {
  "arti": "Gejolak Api",
  "asma": "المسد",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/111AlLahab.mp3",
  "ayat": 5,
  "keterangan": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Al Fath. Nama <i>Al Lahab</i> diambil dari kata  <i>Al Lahab</i> yang terdapat pada ayat ketiga surat ini yang artinya gejolak  api. Surat ini juga dinamakan surat <i>Al Masad</i>.",
  "nama": "Al Lahab",
  "nomor": "111",
  "rukuk": "1",
  "type": "mekah",
  "urut": "6"
}, {
  "arti": "Kemurnian Keesaan Allah",
  "asma": "الإخلاص",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/112AlIkhlash.mp3",
  "ayat": 4,
  "keterangan": "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah sesudah surat An Naas. Dinamakan <i>Al Ikhlas</i> karena surat ini sepenuhnya menegaskan kemurnian keesaan Allah s.w.t.",
  "nama": "Al Ikhlash",
  "nomor": "112",
  "rukuk": "1",
  "type": "mekah",
  "urut": "22"
}, {
  "arti": "Waktu Subuh",
  "asma": "الفلق",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/113AlFalaq.mp3",
  "ayat": 5,
  "keterangan": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Fiil. Nama <i>Al Falaq</i> diambil dari kata <i>Al Falaq</i> yang terdapat pada ayat pertama surat ini yang artinya waktu subuh. Diriwayatkan oleh Abu Daud, At Tirmizi dan An Nasa-i dari 'Uqbah bin 'Aamir bahwa Rasulullah s.a.w. bersembahyang dengan membaca surat Al Falaq  dan surat An Naas dalam perjalanan.",
  "nama": "Al Falaq",
  "nomor": "113",
  "rukuk": "1",
  "type": "mekah",
  "urut": "20"
}, {
  "arti": "Manusia",
  "asma": "الناس",
  "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/114AnNaas.mp3",
  "ayat": 6,
  "keterangan": "Surat ini terdiri atas 6 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Falaq. Nama <i>An Naas</i> diambil dari <i>An Naas</i> yang berulang kali disebut dalam surat ini yang artinya manusia.",
  "nama": "An Naas",
  "nomor": "114",
  "rukuk": "1",
  "type": "mekah",
  "urut": "21"
}] as const;