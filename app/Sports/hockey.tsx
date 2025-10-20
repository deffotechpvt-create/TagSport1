import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const hockeyData: TabContent = {
  Info: [
    {
      id: "1",
      title: "Charge advance to Professional Women’s Hockey League final with 2-1 win over Victoire.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Hockey/1.png"),
    },
    {
      id: "2",
      title: "Hockey Canada interviews among evidence excluded from ex-junior players’ jury trial.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Hockey/2.png"),
    },
    {
      id: "3",
      title: "Everything you need to know about the Professional Women's Hockey League (PWHL) .",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Hockey/3.png"),
    },
    {
      id: "4",
      title: "With roots dating back to 500 BC, the origin of field hockey can be traced to the early civilizations of Ancient Greece and Egypt.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Hockey/4.png"),
    },
    {
      id: "5",
      title: "There are primitive drawings and carvings on walls that depict people playing with a ball and a stick.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Hockey/5.png"),
    },
    {
      id: "6",
      title: "The hockey rules today are made by the Rules Committee.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Hockey/6.png"),
    },
  ],
  "Coaching Center": [

  ],
  Event: [
    {
      id: "1",
      type: "Live" as const,
      matchType: "Hockey  | Nation Cup",
      teams: {
        left: { name: "SHARKS", flag: require("../../assets/images/Flag/sharks.jpg") },
        right: { name: "STORM", flag: require("../../assets/images/Flag/storm.jpg") },
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
      title: "Pakistan Doubtful For Asia Cup Hockey In India After Pahalgam Fallout",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Hockey/7.png"),
      description: "Hosts India, Pakistan, Japan, Korea, China, Malaysia, Oman and Chinese Taipei are scheduled to participate in the 12th edition of the continental showpiece, a qualifying tournament for next year's World Cup to be held in Netherlands and Belgium.",
    },
    {
      id: "2",
      title: "India Names 24-Member Team For European Leg Of Women's Pro League Hockey.",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Hockey/8.png"),
      description: "India will play twice each against Australia, Argentina, Belgium and China in London, Antwerp and Berlin from June 14 to 29.",
    },
  ],
};

export default function Hockey() {
  return (
    <SportsScreen
      sportTitle="Hockey"
      bannerImage={require("../../assets/images/Hockey/hockeyBanner.png")}
      tabData={hockeyData}
    />
  );
}
