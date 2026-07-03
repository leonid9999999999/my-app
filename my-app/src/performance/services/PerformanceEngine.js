import ImageCache from "../cache/ImageCache";
import PerformanceConfig from "../config/PerformanceConfig";
import getNetworkProfile from "../utils/getNetworkProfile";

class PerformanceEngine {
  constructor() {
    this.cache = new ImageCache(PerformanceConfig.cache.maxItems);

    this.queue = [];
    this.active = 0;

    this.setNetwork(getNetworkProfile());
  }

  setNetwork(profile) {
    this.profile = profile;

    const map = PerformanceConfig.network;

    this.maxConcurrent = map[profile] || 4;
  }

  /**
   * Главный метод загрузки изображения
   */
  loadImage(src, priority = 3) {
    return new Promise((resolve) => {
      if (this.cache.has(src)) {
        resolve(this.cache.get(src));
        return;
      }

      this.queue.push({ src, priority, resolve });

      this.queue.sort((a, b) => a.priority - b.priority);

      this.process();
    });
  }

  process() {
    if (this.active >= this.maxConcurrent) return;
    if (this.queue.length === 0) return;

    const item = this.queue.shift();
    this.active++;

    const img = new Image();
    img.src = item.src;

    img.onload = () => {
      this.cache.set(item.src, item.src);

      this.active--;
      item.resolve(item.src);
      this.process();
    };

    img.onerror = () => {
      this.active--;
      item.resolve(null);
      this.process();
    };
  }
}

const engine = new PerformanceEngine();

export default engine;