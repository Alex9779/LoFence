function Decode(fPort, bytes, variables) {
  var decoded = {};

  if (fPort === 1 && bytes.length === 6) {
    decoded.battery = (bytes[0] << 8) | bytes[1];
    decoded.fence_positive = (bytes[2] << 8) | bytes[3];
    decoded.fence_negative = (bytes[4] << 8) | bytes[5];
  }
  else if (fPort === 2 && bytes.length === 7) {
    decoded.tdc = (bytes[0] << 12) | (bytes[1] << 8) | bytes[2];
    decoded.msr_ms = (bytes[3] << 8) | bytes[4];
    decoded.max_volt = (bytes[5] << 8) | bytes[6];
  }
  else if (fPort === 3 && bytes.length === 3) {
    decoded.bat_low = (bytes[0] << 8) | bytes[1];
    decoded.bat_low_count_max = bytes[2];
  }

  return decoded;
}
