import React, { useCallback } from "react";
import "./Track.css";

export default function Track({ isRemoval, track, onAdd, onRemove }) {
  const addTrack = useCallback(
    (event) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (event) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-Action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-Action" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {/* <button className="Track-action"> + or - will go here </button> */}
      {renderAction()}
    </div>
  );
}
