function Decode(fPort, bytes, variables) {
  var decoded = {};

  if (fPort === 1 && bytes.length === 6) {
    decoded.battery = (bytes[0] << 8) | bytes[1];
    decoded.fence_positive = (bytes[2] << 8) | bytes[3];
    decoded.fence_negative = (bytes[4] << 8) | bytes[5];
  }
  else if (fPort === 2 && bytes.length === 7) {
    decoded.version = bytes[0];
    decoded.tdc = (bytes[1] << 12) | (bytes[2] << 8) | bytes[3];
    decoded.msr_ms = (bytes[4] << 8) | bytes[5];
    decoded.max_volt = (bytes[6] << 8) | bytes[7];
  }
  else if (fPort === 3 && bytes.length === 3) {
    decoded.version = bytes[0];
    decoded.bat_low = (bytes[1] << 8) | bytes[2];
    decoded.bat_low_count_max = bytes[3];
    decoded.bat_low_min = (bytes[4] << 8) | bytes[5];
  }
  else if (fPort === 254 && bytes.length === 1) {
    decoded.last_error = bytes[0];
  }

  return decoded;
}
