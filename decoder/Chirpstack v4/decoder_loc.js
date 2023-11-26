function decodeUplink(input) {
  var data = {};

  if (input.fPort == 1) {
    data.battery = (input.bytes[0] << 8) | input.bytes[1];
    data.fence_positive = (input.bytes[2] << 8) | input.bytes[3];
    data.fence_negative = (input.bytes[4] << 8) | input.bytes[5];
  }
  else if (input.fPort == 2) {
    data.version = (input.bytes[0]).toString();
    data.tdc = ((input.bytes[1] << 12) | (input.bytes[2] << 8) | input.bytes[3]).toString() + " s";
    data.msr_ms = ((input.bytes[4] << 8) | input.bytes[5]).toString() + " ms";
    data.max_volt = ((input.bytes[6] << 8) | input.bytes[7]).toString() + " V";
  }
  else if (input.fPort == 3) {
    data.version = (input.bytes[0]).toString();
    data.bat_low = ((input.bytes[1] << 8) | input.bytes[2]).toString() + " mV";
    data.bat_low_count_max = (input.bytes[3]).toString();
    data.bat_low_min = ((input.bytes[4] << 8) | input.bytes[5]).toString() + " mV";
  }

  data.latitude = parseFloat(input.variables["latitude"]);
  data.longitude = parseFloat(input.variables["longitude"]);

  return { data };
}
