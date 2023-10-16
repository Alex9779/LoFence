# LoFence V2

LoFence V2 is an updated version of the original [LoFence](https://github.com/kiu/lofence/) tackling a few shortcomings.

![LoFence V2 opened](assets/REV0.4_opened.jpeg)

The main improvements are:

- case lid can be opened while main body is mounted,
- two batteries for a longer operating time,
- battery deep discharge protection using an activation circuit with a button triggered from the firmware when batteries run low,
- fully revised firmware with ability to change operating parameters by downlinks.

Other things changed are:

- Exchange RN2483 module for Dragino LA66.
  - I always had some problems with the RN2483 though serial communication protocol was easier to work with.
  - LA66 has antenna connector on board so I don't have to care about a correct antenna circuit which also has to follow the guidelines to not to violate regulatory approvals.
  - LA66 is a little cheaper.
- Implement probe resistor divider erratum.
- Optimized for assembling.
  - Changed various components to SMD variants.
  - Switch to buck-boost converter for power supply.
  - Use clamps for holding batteries instead of full holder.
