import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

const Timeline = () => {
  const res = usePhotos();
  console.log(res);
  return (
    <div className="container col-span-2">
      <p>I am timeline</p>
    </div>
  );
};

export default Timeline;
