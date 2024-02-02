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
    data.daily_confirmed_uplinks = (input.bytes[4]).toString();
  }
  else if (input.fPort == 3) {
    data.version = (input.bytes[0]).toString();
    data.max_volt = ((input.bytes[1] << 8) | input.bytes[2]).toString() + " V";
    data.msr_ms = ((input.bytes[3] << 8) | input.bytes[4]).toString() + " ms";    
  }
  else if (input.fPort == 4) {
    data.version = (input.bytes[0]).toString();
    data.bat_low = ((input.bytes[1] << 8) | input.bytes[2]).toString() + " mV";
    data.bat_low_count_max = (input.bytes[3]).toString();
    data.bat_low_min = ((input.bytes[4] << 8) | input.bytes[5]).toString() + " mV";
  }
  else if (input.fPort == 223) {
    data.last_error = (input.bytes[0]).toString();
  }

  data.latitude = parseFloat(input.variables["latitude"]);
  data.longitude = parseFloat(input.variables["longitude"]);

  return { data };
}
