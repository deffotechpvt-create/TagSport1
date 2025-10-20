import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const footballData: TabContent = {
  Info: [
    {
      id: "1",
      title: "Only captains will be allowed to approach referees during Premier League matches from next season.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Football/1.png"),
    },
    {
      id: "2",
      title: "Clarification that the goal line technology (GLT) a goal has been scored can be communicated via the earpiece headset.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Football/2.png"),
    },
    {
      id: "3",
      title: "The use of additional permanent concussion substitutions is now available to competitions.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Football/3.png"),
    },
    {
      id: "4",
      title: "Each team must have a captain who wears an identifying armband.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Football/4.png"),
    },
    {
      id: "5",
      title: "Clarification that players are responsible for the size and suitability of their shinguards.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Football/5.png"),
    },
    {
      id: "6",
      title: "Reference to gloves to be included under \‘Other equipment\’.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Football/6.png"),
    },
  ],
  "Coaching Center": [

  ],
  Event: [
    {
      id: "1",
      type: "Live" as const,
      matchType: "Football| UEFA",
      teams: {
        left: { name: "BLASTERS", flag: require("../../assets/images/Flag/blasters.jpg") },
        right: { name: "INDIA", flag: require("../../assets/images/Flag/india.jpg") },
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
      matchType: "Hockey  | Nation Cup",
      teams: {
        left: { name: "SHARKS", flag: require("../../assets/images/Flag/sharks.jpg") },
        right: { name: "STORM", flag: require("../../assets/images/Flag/storm.jpg") },
      },
      time: "8:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "5",
      type: "Upcoming" as const,
      matchType: "Badminton | Olympics",
      teams: {
        left: { name: "PARIS", flag: require("../../assets/images/Flag/paris.jpg") },
        right: { name: "MALL MO", flag: require("../../assets/images/Flag/mallmo.jpg") },
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
      title: "\"One Of The Greatest\": Ruud Van Nistelrooy's Enormous Praise For Leicester City Legend Jamie Vardy",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Football/7.png"),
      description: "Jamie Vardy has netted 199 goals in 499 appearances and was instrumental in their stunning Premier League title win in 2016.",
    },
    {
      id: "2",
      title: "Lionel Messi's Argentina To Miss Game In Kerala In 2026.",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Football/8.png"),
      description: "Kerala football buffs will now have to wait to see their favourite player Lionel Messi and his World Cup-winning Argentine football team play on Kerala soil.",
    },
  ],
};

export default function Football() {
  return (
    <SportsScreen
      sportTitle="Football"
      bannerImage={require("../../assets/images/Football/footballBanner.png")}
      tabData={footballData}
    />
  );
}
