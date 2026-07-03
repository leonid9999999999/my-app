/**
 * Performance Config v1
 */

const PerformanceConfig = {
  debug: true,

  cache: {
    maxItems: 200,
  },

  network: {
    slow: 2,
    medium: 3,
    fast: 5,
  },

  preload: {
    rootMargin: "600px",
  },

  priority: {
    HERO: 1,
    HIGH: 2,
    NORMAL: 3,
    LOW: 4,
  },
};

export default PerformanceConfig;