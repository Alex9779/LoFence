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
        tdc: (input.bytes[0] << 12) | (input.bytes[1] << 8) | input.bytes[2],
        msr_ms: (input.bytes[3] << 8) | input.bytes[4],
        max_volt: (input.bytes[5] << 8) | input.bytes[6],
      },
    };
  }
  else if (input.fPort == 3) {
    return {
      data: {
        bat_low: (input.bytes[0] << 8) | input.bytes[1],
        bat_low_count_max: input.bytes[2],
      },
    };
  }
}
