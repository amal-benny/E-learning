import React from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import Tabs from "./Tabs";

const ViewCourse = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseName = searchParams.get("title");
  return (
    <div className="grid grid-cols-9 min-h-screen">
      <div className="col-span-7">
        <video
          src="https://ik.imagekit.io/ikmedia/example_video.mp4"
          width="100%"
          height="auto"
          controls
          className="w-full h-[500px] object-cover"
        />
        <Tabs />
        <p className="p-2 font-bold text-xl">{courseName}</p>
        <div className="px-3">
          <p className="font-medium text-lg pb-1">Description:</p>
          <span className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            est quidem commodi expedita alias, architecto asperiores fuga
            deleniti veniam inventore aliquam quasi sed eaque, et nisi nihil
            laborum explicabo soluta?
          </span>
        </div>
      </div>
      <div className="col-span-2">
        <Sidebar courseName={courseName} />
      </div>
    </div>
  );
};

export default ViewCourse;
