export default function getDeviceInfo() {
  return {
    memory: navigator.deviceMemory || 4,
    cores: navigator.hardwareConcurrency || 4,
  };
}