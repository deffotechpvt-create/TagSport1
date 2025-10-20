import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const wrestlingData: TabContent = {
  Info: [
    {
      id: "1",
      title: "Both styles of wrestling – Greco Roman and freestyle – have been a major part of the Olympics since.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Wrestling/1.png"),
    },
    {
      id: "2",
      title: "Typical freestyle wrestling bout, much like Greco-Roman, divided two periods of three minutes a 30-second break in between.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Wrestling/2.png"),
    },
    {
      id: "3",
      title: "For official Under-15, cadets and veteran competitions, the periods are curtailed to two minutes each.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Wrestling/3.png"),
    },
    {
      id: "4",
      title: "In modern wrestling, however, particularly events like the Olympics and the World Championships, victory by fall is a rarity.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Wrestling/4.png"),
    },
    {
      id: "5",
      title: "Moves carry points in accordance to their degree of difficulty and a single move can carry from anywhere between 1 to 5 points. ",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Wrestling/5.png"),
    },
    {
      id: "6",
      title: " High scoring moves, generally arching throws, generally carry the maximum number of points.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Wrestling/6.png"),
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
      title: "Tay Melo Returns After Two Years Away From AEW, Makes Save For Anna Jay On Fyter Fest",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Wrestling/7.png"),
      description: "Tay Melo made a surprise return after two years away during \"AEW Fyter Fest\" to make the save for Anna Jay against Megan Bayne and Penelope Ford.",
    },
    {
      id: "2",
      title: "Ex-STARDOM Wrestler Thekla Wins AEW Debut, Appears To Have First Feud On Fyter Fest",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Wrestling/8.png"),
      description: "Following her debut on last week's episode of \"AEW Dynamite,\" Thekla picked up her first AEW win at Fyter Fest, and even has her first potential feud.",
    },
  ],
};

export default function Wrestling() {
  return (
    <SportsScreen
      sportTitle="Wrestling"
      bannerImage={require("../../assets/images/Wrestling/wrestlingBanner.png")}
      tabData={wrestlingData}
    />
  );
}
