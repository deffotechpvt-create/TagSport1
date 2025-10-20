import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const badmintonData: TabContent = {
  Info: [
    {
      id: "1",
      title: "The starting point of any badminton match, the service of the shuttlecock is an art in itself.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Badminton/1.png"),
    },
    {
      id: "2",
      title: "Most of the world’s leading professionals prefer a short backhand serve, just to initiate proceedings.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Badminton/2.png"),
    },
    {
      id: "3",
      title: "Let\’s take a look at the badminton service rules laid down by the Badminton World Federation (BWF).",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Badminton/3.png"),
    },
    {
      id: "4",
      title: "If the server’s shuttle goes out of bounds of the court, the receiving player/side wins the point.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Badminton/4.png"),
    },
    {
      id: "5",
      title: "Importantly, at the instant of being hit by the server’s racket, the entire shuttlecock should be below the waist of the server. ",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Badminton/5.png"),
    },
    {
      id: "6",
      title: "The waist is considered to be an imaginary line coinciding with the server's lowest rib.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Badminton/6.png"),
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
      title: "Unnati Hooda, Malvika Bansod, Aakarshi Kashyap Exit Thailand Open; India's Campaign Ends",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Badminton/7.png"),
      description: "India's dismal run in elite international badminton tournaments continued, as all remaining shuttlers, including world number 10 women's doubles pair of Treesa Jolly and Gayatri Gopichand exited early, ending the country's campaign at the Thailand Open Super 500 in Bangkok on Thursday. ",
    },
    {
      id: "2",
      title: "Lakshya Sen's Poor Form Continues After Loss In Thailand Open Round Of 32",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Badminton/8.png"),
      description: "The Indian trio of Malvika Bansod, Aakarshi Kashyap and Unnati Hooda advanced to the women's singles second round.",
    },
  ],
};

export default function Badminton() {
  return (
    <SportsScreen
      sportTitle="Badminton"
      bannerImage={require("../../assets/images/Badminton/badmintonBanner.png")}
      tabData={badmintonData}
    />
  );
}
