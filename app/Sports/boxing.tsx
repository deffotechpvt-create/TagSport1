import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const boxingData: TabContent = {
  Info: [
    {
      id: "1",
      title: "Boxing shares a long-standing history with the Olympics and is considered one of the  popular sporting disciplines in the world.  ",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Boxing/1.png"),
    },
    {
      id: "2",
      title: "Almost as old as human civilization itself, boxing - as a sport - traces its roots to ancient Egypt around 3000 BC.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Boxing/2.png"),
    },
    {
      id: "3",
      title: "But it has evolved into a sophisticated sport involving complicated strategies and craft over the years.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Boxing/3.png"),
    },
    {
      id: "4",
      title: "Olympic boxing, in particular, has been a big factor in the long-standing mass appeal.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Boxing/4.png"),
    },
    {
      id: "5",
      title: "Historical research also credits Onomastos as the man who first devised the rules for ancient boxing.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Boxing/5.png"),
    },
    {
      id: "6",
      title: "Boxing shares a very close relationship with the Olympic Games.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Boxing/6.png"),
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
      title: "Boxers Deepak Tanwar, Naman Tanwar Clinch Gold, India Finish With 8 Medals At Thailand Open",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Boxing/7.png"),
      description: "Thailand Open: Deepak clinched the gold with a 5:0 win over Abdurakhimov Javokhir of Uzbekistan in the 75 kg category.",
    },
    {
      id: "2",
      title: "24-Year-Old Kolkata Boxer Faizan Anwar, Who Has 19-0-0 Record, To Fight For WBA Asia Middle East Title",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Boxing/8.png"),
      description: "The fight night will feature 10 action-packed bouts, including four international matchups and two WBA Asia Middle East title clashes",
    },
  ],
};

export default function Boxing() {
  return (
    <SportsScreen
      sportTitle="Boxing"
      bannerImage={require("../../assets/images/Boxing/boxingBanner.png")}
      tabData={boxingData}
    />
  );
}
