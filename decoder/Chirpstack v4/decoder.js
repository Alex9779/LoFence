function decodeUplink(input) {
  return {
    data: {
      battery: (input.bytes[0] << 8) | input.bytes[1],
      fence_positive: (input.bytes[2] << 8) | input.bytes[3],
      fence_negative: (input.bytes[4] << 8) | input.bytes[5],
    },
  };
}
