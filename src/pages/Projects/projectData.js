//projectData.js

//IDLOCK WIRE-FRAMES
import idlock1 from "./wire-frames/IDLock1.png";
import idlock2 from "./wire-frames/IDLock2.png";
import idlock3 from "./wire-frames/IDLock3.png";
import idlock4 from "./wire-frames/IDLock4.png";

//DOG FRIENDS WIRE-FRAMES
import df1 from "./wire-frames/df1.png";
import df2 from "./wire-frames/df2.png";
import df3 from "./wire-frames/df3.png";
import df4 from "./wire-frames/df4.png";

//EGO QUEST WIRE-FRAMES
import egoquest1 from "./wire-frames/Egoquest1.png";
import egoquest2 from "./wire-frames/Egoquest2.png";
import egoquest3 from "./wire-frames/Egoquest3.png";
import egoquest4 from "./wire-frames/Egoquest4.png";

//TASK BUCKETS WIRE-FRAMES
import tb1 from "./wire-frames/tb1.png";
import tb2 from "./wire-frames/tb2.png";
import tb3 from "./wire-frames/tb3.png";
import tb4 from "./wire-frames/tb4.png";


const projectsData = [
  {
    images: [
      idlock1,
      idlock2,
      idlock3,
      idlock4,
    ],
    description:
      "This is a groundbreaking application that leverages technologies like React.js, SQL, Python, Django, PostgreSQL, blockchain, NFTs, and AI chatbox. What sets it apart is its innovative approach to digital identity management, blending blockchain, NFTs, and AI chatbox for a seamless experience. For a deeper dive into IdentityLock, I encourage you to explore our GitHub README.",
    githubLink: "https://github.com/AleksBulajic/NFT_ID_front-end",
    deployedLink: "https://calm-churros-9f4679.netlify.app/",
    title: "IdentityLock",
  },

  {
    images: [df1, df2, df3, df4, ],
    description:
      "This application is a one-of-a-kind social platform built on the MERN stack, complete with JWT authentication. But here's the twist: all posts are made from a dog's perspective! It's a delightful blend of technology and creativity, offering a fresh take on social media. If you're curious about the bark behind the code, our GitHub README has all the details on Dog Friends.",
    githubLink: "https://github.com/1ElijahW/Frontend-App-DogFriends",
    deployedLink:
      "https://frontend-app-dog-friends-git-merged-code-backup-elijahw.vercel.app/",
    title: "Dog Friends",
  },

  {
    images: [egoquest1, egoquest2, egoquest3, egoquest4,],
    description:
      "Crafted just five weeks into my coding journey, this is a web-based application designed to make weight loss tracking interactive and fun. It's built using HTML, CSS, JavaScript, Node.js, Express.js, and even integrates a BMR Calculator for an added layer of engagement. It's a unique touch, making tracking even more interactive. For a comprehensive look at Ego Quest, the GitHub README awaits your perusal.",
    githubLink: "https://github.com/user/project1",
    deployedLink: "https://project1.com",
    title: "Ego Quest",
  },

  {
    images: [tb1, tb2, tb3, tb4, ],
    description:
    "Task Buckets, a playful application developed a mere two weeks into my coding adventure, gamifies everyday tasks. Using Vanilla JavaScript, JSON, and local storage, it encourages users to outperform their previous day's achievements, all visualized through a basketball game. It's not just about tasks; it's about making them fun. If you're looking to score more details on Task Buckets, the GitHub README is the court to be on.",
    githubLink: "https://github.com/user/project1",
    deployedLink: "https://project1.com",
    title: "Task Buckets",
  },
];

export default projectsData;
