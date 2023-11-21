import {
  CircleIcon,
  HeartIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  ShuffleIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Slider } from "./ui/slider";

const MusicPlayer = () => {
  return (
    <>
      <div className="w-screen fixed bottom-0 flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col shadow-player-light  border border-player-light-border dark:shadow-player-dark dark:bg-player-dark-background dark:border-player-dark-border dark:backdrop-blur-xl">
          {/* <div className="px-10 pt-10 pb-4 flex items-center z-50">
            <img
              data-amplitude-song-info="cover_art_url"
              className="w-24 h-24 rounded-md mr-6 border dark:border-cover-dark-border"
            />
            <div className="flex flex-col">
              <span
                data-amplitude-song-info="name"
                className="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white"
              />
              <span
                data-amplitude-song-info="artist"
                className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
              />
              <span
                data-amplitude-song-info="album"
                className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div> */}

          <div className="px-10 rounded-b-xl border-t border-primary flex items-center justify-center gap-5 z-50 dark:bg-control-panel-dark-background dark:border-gray-900">
            <div className="cursor-pointer" id="song-saved">
              <HeartIcon
                className="text-primary fill-primary bg-transparent font-extrabold"
                width={30}
                height={30}
              />
            </div>
            <div className="cursor-pointer amplitude-shuffle">
              <ShuffleIcon
                className="text-primary fill-primary bg-transparent font-extrabold"
                width={30}
                height={30}
              />
            </div>
            <div className="cursor-pointer amplitude-prev">
              <TriangleLeftIcon
                width={50}
                height={50}
                className="text-primary fill-primary bg-transparent font-extrabold"
              />
            </div>
            <div className="cursor-pointer amplitude-play-pause w-16 h-16 rounded-full border-play-pause-light-border shadow-xl flex items-center justify-center dark:bg-play-pause-dark-background dark:border-play-pause-dark-border">
              <PlayIcon
                width={50}
                height={50}
                className="text-primary fill-primary bg-transparent font-extrabold hidden"
              />
              <PauseIcon
                width={50}
                height={50}
                className="text-primary fill-primary bg-transparent font-extrabold "
              />
            </div>
            <div className="cursor-pointer amplitude-next">
              <TriangleRightIcon
                width={50}
                height={50}
                className="text-primary fill-primary bg-transparent font-extrabold"
              />
            </div>
            <div className="cursor-pointer amplitude-repeat-song">
              <CircleIcon
                className="text-primary fill-primary bg-transparent font-extrabold"
                width={30}
                height={30}
              />
            </div>
            <div>
              <PlusIcon
                className="text-primary fill-primary bg-transparent font-extrabold"
                width={30}
                height={30}
              />
            </div>
          </div>

          <div className="w-full flex flex-col px-10 z-50 pb-5">
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
