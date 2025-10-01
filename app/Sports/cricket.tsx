import React from "react";
import SportsScreen, { TabContent } from "../ReusableComponent/SportsScreen";

const cricketData: TabContent = {
  Info: [
    {
      id: "1",
      title: "The Indian Premier League has revised its rules to allow temporary replacement players for the remainder of the tournament.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Cricket/1.png"),
    },
    {
      id: "2",
      title: "ICC working on rule tweak to give bowlers 'more leeway on wides' , says Pollock.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Cricket/2.png"),
    },
    {
      id: "3",
      title: "Kerr wasn't given run-out because the ball was deemed dead, but questions around the incident remain.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Cricket/3.png"),
    },
    {
      id: "4",
      title: "Why aren't we making a bigger deal of the slow pace of play in Test cricket?",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Cricket/4.png"),
    },
    {
      id: "5",
      title: "According to the revised playing conditions, the on-field umpire will simply consult with the TV umpire rule on contentious catches.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Cricket/5.png"),
    },
    {
      id: "6",
      title: "Turns out one of the laws of the game is immoral if applied, even if why that is so cannot be explained or defended.",
      time: "1 hour ago",
      source: "BBC International",
      image: require("../../assets/images/Cricket/6.png"),
    },
  ],
  "Coaching Center": [
  {
    id: "coaching-1",
    title: "Scoreup Sports Management Private Limited",
    rating: 4.7,
    reviews: 255,
    about: "Cricket must be our virtual national sport and many a kid gets inspired by the household heroes like Dhoni ,  Kohli and Tendulkar. There are a number of benefits of playing cricket:",
    location: " 13th Street. 47 W 13th St, New York, NY 10011, USA. 20 Cooper Square. 20 Cooper Square, New York, NY 10003, USA. 2nd Street Dorm.",
    image: require("../../assets/images/Cricket/9.png"),
  },
  {
    id: "coaching-2",
    title: "Scoreup Sports Management Private Limited",
    rating: 4.7,
    reviews: 255,
    about: "Cricket must be our virtual national sport and many a kid gets inspired by the household heroes like Dhoni ,  Kohli and Tendulkar. There are a number of benefits of playing cricket:",
    location: " 13th Street. 47 W 13th St, New York, NY 10011, USA. 20 Cooper Square. 20 Cooper Square, New York, NY 10003, USA. 2nd Street Dorm.",
    image: require("../../assets/images/Cricket/10.png"),
  },
],
  Event: [
    {
      id: "1",
      type: "Live" as const,
      matchType: "Cricket | T20",
      teams: {
        left: { name: "ENGLAND", flag: require("../../assets/images/Flag/england.jpg") },
        right: { name: "INDIA", flag: require("../../assets/images/Flag/india.jpg") },
      },
      status: "Live",
      countdown: "02:04:39",
    },
    {
      id: "2",
      type: "Sports Banners" as const,
      promoImage: require("../../assets/images/Cricket/poster1.jpg"),
      promoTitle: "Sports Day Celebration",
      eventDate: "10-05-2025",
      eventTime: "9:00 AM to 4:00 PM",
    },
    {
      id: "3",
      type: "Upcoming" as const,
      matchType: "Cricket | IPL",
      teams: {
        left: { name: "CSK", flag: require("../../assets/images/Flag/csk.jpg") },
        right: { name: "RSB", flag: require("../../assets/images/Flag/rcb.jpg") },
      },
      time: "7:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
  ],
  "Trending News": [
    {
      id: "1",
      title: "\"A Team Who Did Not Love...\": Ex-England Captain Pinpoints Big Difference Between MS Dhoni And Virat Kohli",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Cricket/7.png"),
      description: "Former England captain Michael Vaughan has elaborated on the big difference between MS Dhoni and Virat Kohli as captains of India in Test cricket.",
    },
    {
      id: "2",
      title: "South Africa Make Stunning World Test Championship Final U-Turn Ahead Of IPL 2025 Resumption: \"Higher Up...\"",
      time: "Updated: May 15, 2025 11:42 am IST",
      source: "Press Trust of India          Updated: May 15, 2025 11:42 am IST",
      image: require("../../assets/images/Cricket/8.png"),
      description: "The Indian Premier League (IPL) franchises were handed a massive boost as South Africa announced that they will be cutting back preparation time ahead of the World Test Championship (WTC) Final against Australia.",
    },
  ],
};

export default function App() {
  return (
    <SportsScreen
      sportTitle="Cricket"
      bannerImage={require("../../assets/images/Cricket/cricketBanner.png")}
      tabData={cricketData}
      // onClose={() => console.log("Closed Cricket screen")}
    />
  );
}
