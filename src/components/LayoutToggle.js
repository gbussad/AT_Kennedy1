import React from "react";

const LayoutToggle = ({ isListView, setIsListView }) => {
  return (
    <button onClick={() => setIsListView(!isListView)}>
      {isListView ? "Exibir em Grade" : "Exibir em Lista"}
    </button>
  );
};

export default LayoutToggle;
