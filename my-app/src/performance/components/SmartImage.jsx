import React from "react";
import useSmartImage from "../hooks/useSmartImage";

export default function SmartImage({ src, alt = "", priority = "NORMAL" }) {
  const loaded = useSmartImage(src, priority);

  if (!loaded) {
    return (
      <div style={{ background: "#eee", minHeight: 150, width: "100%" }} />
    );
  }

  return <img src={loaded} alt={alt} style={{ width: "100%" }} />;
}