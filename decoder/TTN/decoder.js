function decodeUplink(input) {
  if (input.fPort == 1) {
    return {
      data: {
        battery: (input.bytes[0] << 8) | input.bytes[1],
        fence_positive: (input.bytes[2] << 8) | input.bytes[3],
        fence_negative: (input.bytes[4] << 8) | input.bytes[5],
      },
    };
  }
  else if (input.fPort == 2) {
    return {
      data: {
        version: input.bytes[0],
        tdc: (input.bytes[1] << 12) | (input.bytes[2] << 8) | input.bytes[3],
        msr_ms: (input.bytes[4] << 8) | input.bytes[5],
        max_volt: (input.bytes[6] << 8) | input.bytes[7],
        bat_low_min: ((input.bytes[4] << 8) | input.bytes[5]).toString() + " mV",
      },
    };
  }
  else if (input.fPort == 3) {
    return {
      data: {
        version: input.bytes[0],
        bat_low: (input.bytes[1] << 8) | input.bytes[2],
        bat_low_count_max: input.bytes[3],
      },
    };
  }
}
