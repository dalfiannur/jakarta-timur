"use client";
import { useContext } from "react";
import { Context } from "../Provider";

export const VideoPlayer = () => {
  const { data } = useContext(Context);
  return data ? (
    <iframe
      id="ytplayer"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${data.source}`}
      frameBorder={0}
      allowFullScreen
    />
  ) : null;
};
