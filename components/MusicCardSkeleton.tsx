import React from "react";
import { Skeleton } from "./ui/skeleton";

const MusicCardSkeleton = () => {
  return (
    <>
      <div className="flex justify-center gap-5">
        <div className="w-96 h-96 p-5">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="w-96 h-96 p-5">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="w-96 h-96 p-5">
          <Skeleton className="w-full h-full " />
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <div className="w-96 h-96 p-5">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="w-96 h-96 p-5">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="w-96 h-96 p-5">
          <Skeleton className="w-full h-full " />
        </div>
      </div>
    </>
  );
};

export default MusicCardSkeleton;
