import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const tabletennisData: TabContent = {
  Info: [
    {
      id: "1",
      title: "According to the laws of table tennis, win a game of table tennis by scoring 11 points - with one point for every infringement.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/TableTennis/1.png"),
    },
    {
      id: "2",
      title: "We’ve summarized the essential ping pong rules from USA Table Tennis right here to help you settle garage or office disputes.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/TableTennis/2.png"),
    },
    {
      id: "3",
      title: "A Game is played to 11 points. A Game must be won by two points. A Match is generally the best three of five Games.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/TableTennis/3.png"),
    },
    {
      id: "4",
      title: "Each side of the table alternates serving two points at a time. EXCEPTION: After tied 10-10 (“deuce”), service alternates at every point.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/TableTennis/4.png"),
    },
    {
      id: "5",
      title: "How do you serve the ball in ping pong? Hold the ball in your open palm, behind your end of the table.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/TableTennis/5.png"),
    },
    {
      id: "6",
      title: "Once the ball leaves the server’s hand it is in play, and so counts as the receiver’s point if the ball is missed or mis-hit.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/TableTennis/6.png"),
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
      title: "UTT: U Mumba Thrash Ahmedabad SG Pipers, Kolkata Thunder Blades Also Win",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/TableTennis/7.png"),
      description: "UTT: U Mumba Thrash Ahmedabad SG Pipers, Kolkata Thunder Blades Also Win",
    },
    {
      id: "2",
      title: "Manav Thakkar Stretches World No. 4, Manika Batra disappoints at Worlds",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/TableTennis/8.png"),
      description: "Manav Thakkar put up a spirited fight against world number four Harimoto Tomokazu before going down in the round of 64.",
    },
  ],
};

export default function App() {
  return (
    <SportsScreen
      sportTitle="Table Tennis"
      bannerImage={require("../../assets/images/TableTennis/tabletennisBanner.png")}
      tabData={tabletennisData}
    />
  );
}
