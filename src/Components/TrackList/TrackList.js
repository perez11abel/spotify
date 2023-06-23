import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className="TrackList">
      {
        // tracks &&
        tracks.map((song) => {
          return (
            <Track
              track={song}
              key={song.id}
              onAdd={onAdd}
              isRemoval={isRemoval}
              onRemove={onRemove}
            />
          );
        })
      }
    </div>
  );
}
