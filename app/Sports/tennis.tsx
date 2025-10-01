import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const tennisData: TabContent = {
  Info: [
    {
      id: "1",
      title: "Tennis’ Cinderella story gets ‘crazier’ as World No. 361 on brink of unthinkable French Open feat",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Tennis/1.png"),
    },
    {
      id: "2",
      title: "I think that in the first set, I managed it pretty well. but obviously with nerves and with pressure, it became a little harder,",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Tennis/2.png"),
    },
    {
      id: "3",
      title: "Before the start of this year’s Roland Garros, she had won just one match on the main tour.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Tennis/3.png"),
    },
    {
      id: "4",
      title: "She is such an unknown that the WTA does not even have a proper headshot for her.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Tennis/4.png"),
    },
    {
      id: "5",
      title: "Boisson now stands alone as the lowest-ranked woman to make it to the quarterfinals let alone the semis at the French Open.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Tennis/5.png"),
    },
    {
      id: "6",
      title: "She went three sets in her opening round against Knutson, a Czech ranked world No. 194, but ended up claiming the title.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Tennis/6.png"),
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
      title: "World No. 1 vs Defending Champion: Aryna Sabalenka Takes On Iga Swiatek In Blockbuster French Open Semi-Final",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Tennis/7.png"),
      description: "Iga Swiatek puts her bid for a fourth successive French Open title on the line against world number one Aryna Sabalenka with a place in the final at stake on Thursday. ",
    },
    {
      id: "2",
      title: "World No. 361 Lois Boisson Continues Dream French Open 2025 Run, Beats Mirra Andreeva To Reach Semis",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Tennis/8.png"),
      description: "The 22-year-old, who was due to play at last year's French Open but suffered a knee injury the week before the tournament, is the lowest-ranked woman to reach a major semi-final in 40 years.",
    },
  ],
};

export default function App() {
  return (
    <SportsScreen
      sportTitle="Tennis"
      bannerImage={require("../../assets/images/Tennis/tennisBanner.png")}
      tabData={tennisData}
    />
  );
}
