import { useEffect, useState } from "react";
import engine from "../services/PerformanceEngine";

export default function useSmartImage(src, priority = "NORMAL") {
  const [loaded, setLoaded] = useState(null);

  const map = {
    HERO: 1,
    HIGH: 2,
    NORMAL: 3,
    LOW: 4,
  };

  useEffect(() => {
    let cancelled = false;

    engine.loadImage(src, map[priority] || 3).then((res) => {
      if (!cancelled) setLoaded(res);
    });

    return () => {
      cancelled = true;
    };
  }, [src]);

  return loaded;
}