import React from "react";
import CoachingCentre from "../../ReusableComponent/CoachingCentre";

export default function App() {
  return (
    <CoachingCentre
      name="Sam Sports Academy"
      rating={4.7}
      reviews={255}
      images={[
        require("../../../assets/images/centre1.jpg"),
        require("../../../assets/images/centre1.jpg"),
        require("../../../assets/images/Photos/1.png"),
        require("../../../assets/images/Photos/2.png"),
        require("../../../assets/images/Photos/3.png"),
        require("../../../assets/images/Photos/4.png"),
      ]}
      location="13th Street. 47 W 13th St, New York, NY 10011, USA. 20 Cooper Square. 20 Cooper Square, New York, NY 10003, USA. 2nd Street Dorm."
      openUntil="10:30 pm"
      contact="9876543210"
      website="https://in.pinterest.com/pin"
      similarClasses={[
        {
          id: "1",
          title: "PK Sports Academy",
          rating: 4.7,
          reviews: 255,
          image: require("../../../assets/images/centre2.png"),
        },
        {
          id: "2",
          title: "PK Sports Academy",
          rating: 4.7,
          reviews: 255,
          image: require("../../../assets/images/centre3.png"),
        },
        {
          id: "3",
          title: "PK Sports Academy",
          rating: 4.7,
          reviews: 255,
          image: require("../../../assets/images/centre3.png"),
        },
        {
          id: "4",
          title: "PK Sports Academy",
          rating: 4.7,
          reviews: 255,
          image: require("../../../assets/images/centre3.png"),
        },
      ]}
      reviewsData={[
        {
          id: "1",
          name: "Kim Shine",
          date: "August 13, 2019",
          rating: 4,
          comment:
            "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.",
          avatar: require("../../../assets/images/Avatar.png"),
          images: [
            require("../../../assets/images/review/1.png"),
            require("../../../assets/images/review/2.png"),
            require("../../../assets/images/review/3.png"),
          ],
        },
        {
          id: "2",
          name: "Matilda Brown",
          date: "August 14, 2019",
          rating: 4,
          comment:
            "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.",
          avatar: require("../../../assets/images/Avatar-1.png"),
          images: [
            require("../../../assets/images/review/1.png"),
            require("../../../assets/images/review/2.png"),
            require("../../../assets/images/review/3.png"),
          ],
        },
      ]}
      categories={[
        { id: "1", title: "Cricket", image: require('../../../assets/images/Icons/cricket.png') },
        { id: "2", title: "Football", image: require('../../../assets/images/Icons/football.png') },
        { id: "3", title: "Tennis", image: require('../../../assets/images/Icons/tennis.png') },
        { id: "4", title: "Wrestling", image: require('../../../assets/images/Icons/wrestling.png') },
        { id: "5", title: "Hockey", image: require('../../../assets/images/Icons/hockey.png') },
        { id: "6", title: "Badminton", image: require('../../../assets/images/Icons/badminton.png') },
      ]}
    />
  );
}
