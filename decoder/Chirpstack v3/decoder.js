function Decode(fPort, bytes, variables) {
  var decoded = {};

  if (fPort === 1 && bytes.length === 6) {
    decoded.battery = (bytes[0] << 8) | bytes[1];
    decoded.fence_positive = (bytes[2] << 8) | bytes[3];
    decoded.fence_negative = (bytes[4] << 8) | bytes[5];
  }

  return decoded;
}
