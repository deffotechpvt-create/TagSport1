import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const shootingData: TabContent = {
  Info: [
    {
      id: "1",
      title: "The rifle, pistol and shotgun events make up the shooting programme at an Olympics. Here’s all you need to know.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Shooting/1.png"),
    },
    {
      id: "2",
      title: "Shooting didn’t feature at the St Louis 1904 and Amsterdam 1928 Olympics but has been at all other Summer Games. ",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Shooting/2.png"),
    },
    {
      id: "3",
      title: "For a layman, when he sees a shooter, he thinks, there is no physical effort,” Athens 2004 Olympian Suma Shirur told Firstpost.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Shooting/3.png"),
    },
    {
      id: "4",
      title: "Olympic boxing, in particular, has been a big factor in the long-standing mass appeal.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Shooting/4.png"),
    },
    {
      id: "5",
      title: "Because the most natural aspect of the human body is movement.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Shooting/5.png"),
    },
    {
      id: "6",
      title: "All shooting is done from a prescribed distance -- 10m, 25m, 50m -- with athletes aiming target or flying ‘clays’ in the shotgun.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Shooting/6.png"),
    },
  ],
  
  "Coaching Center": [

  ],

  Event: [
    {
      id: "1",
      type: "Live" as const,
      matchType: "Badminton | Olympics",
      teams: {
        left: { name: "PARIS", flag: require("../../assets/images/Flag/paris.jpg") },
        right: { name: "MALL MO", flag: require("../../assets/images/Flag/mallmo.jpg") },
      },
      status: "Live",
      countdown: "02:04:39",
    },
    {
      id: "2",
      type: "Upcoming" as const,
      matchType: "Cricket | T20",
      teams: {
        left: { name: "ENGLAND", flag: require("../../assets/images/Flag/england.jpg") },
        right: { name: "INDIA", flag: require("../../assets/images/Flag/india.jpg") },
      },
      time: "7:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "3",
      type: "Upcoming" as const,
      matchType: "Football | Isl",
      teams: {
        left: { name: "ARGENTINA", flag: require("../../assets/images/Flag/argentina.jpg") },
        right: { name: "BRAZIL", flag: require("../../assets/images/Flag/brazil.jpg") },
      },
      time: "7:30 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "4",
      type: "Upcoming" as const,
      matchType: "Football| UEFA",
      teams: {
        left: { name: "BLASTERS", flag: require("../../assets/images/Flag/blasters.jpg") },
        right: { name: "INDIA", flag: require("../../assets/images/Flag/india.jpg") },
      },
      time: "8:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "5",
      type: "Upcoming" as const,
      matchType: "Hockey  | Nation Cup",
      teams: {
        left: { name: "SHARKS", flag: require("../../assets/images/Flag/sharks.jpg") },
        right: { name: "STORM", flag: require("../../assets/images/Flag/storm.jpg") },
      },
      time: "9:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "6",
      type: "Upcoming" as const,
      matchType: "Cricket | Odi",
      teams: {
        left: { name: "AUSTRAL EA", flag: require("../../assets/images/Flag/australia.jpg") },
        right: { name: "N Z", flag: require("../../assets/images/Flag/nz.jpg") },
      },
      time: "10:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
  ],

  "Trending News": [
    {
      id: "1",
      title: "Olympians Raiza, Anantjeet return as 12-member shotgun team for Lonato World Cup announced",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Shooting/7.png"),
      description: "The ISSF circuit has so far seen two Rifle/Pistol World Cup stages, three Shotgun World Cups and one combined Junior World Cup where Indian shooters have bagged a total of 27 medals including nine gold.",
    },
    {
      id: "2",
      title: "Inspired by Abhinav Bindra, Shambhavi beats double Olympic medallist at Junior Worlds and wants to follow in her footsteps",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Shooting/8.png"),
      description: "Shambhavi beat Chinese shooter Huang Yuting in the final of the women’s 10m air rifle competition to become India’s latest Junior World Champion in the marquee women’s event.",
    },
  ],
};

export default function Shooting() {
  return (
    <SportsScreen
      sportTitle="Shooting"
      bannerImage={require("../../assets/images/Shooting/shootingBanner.png")}
      tabData={shootingData}
    />
  );
}
