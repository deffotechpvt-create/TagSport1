import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const athleticData: TabContent = {
  Info: [
    {
      id: "1",
      title: " Unlike pole vault though, athletes must do it unaided, high levels of speed, explosive power and agility on their part to succeed.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Athletic/1.png"),
    },
    {
      id: "2",
      title: "One crucial thing to keep in mind is that athletes can use only one foot during takeoff.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Athletic/2.png"),
    },
    {
      id: "3",
      title: "The first is the runway or the take off area. It is generally a minimum of 15m in length and 16m in width.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Athletic/3.png"),
    },
    {
      id: "4",
      title: " In the domestic calendar, the AFI has introduced  this season in different parts of the athletes near their native places. ",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Athletic/4.png"),
    },
    {
      id: "5",
      title: "The athletes should show that they have come prepared and they should show consistency,” an AFI official told PTI.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Athletic/5.png"),
    },
    {
      id: "6",
      title: "All units and athletes were informed (about this) three months ago and the same is on the website since last three months.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Athletic/6.png"),
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
      title: "Asian Championships 2025 Review: Future looks bright for Indian athletes after stellar show in Gumi",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Athletic/7.png"),
      description: "India’s success at the recently concluded Asian Athletics Championships was powered by a fearless new generation of athletes delivering breakthrough performances on the big stage.",
    },
    {
      id: "2",
      title: "Olympic Gold medallist Gabby Thomas harassed at Grand Slam Track",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Athletic/8.png"),
      description: "Thomas, who won gold in the 200 metres, and 4x100m and 4x400m relays in Paris, said in a post on X that a man followed her around the track while she took pictures for fans and signed autographs, shouting personal insults at her.",
    },
  ],
};

export default function Athletic() {
  return (
    <SportsScreen
      sportTitle="Athletic"
      bannerImage={require("../../assets/images/Athletic/athletBanner.png")}
      tabData={athleticData}
    />
  );
}
