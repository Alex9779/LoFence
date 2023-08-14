#ifndef MAIN_H_
#define MAIN_H_

#define DEBUG // enable debug output (transmission fails if deactivated at the moment, no idea why)

#define INTERVAL_SECONDS 5 * 60 // time to sleep between measurements
#define RANDOMNESS 10 // +- time to sleep between measurements
#define MEASURE_MS 6000 // time in ms a measurement should take (per polarity)
#define SAVE_INTERVAL 100 // count of transmissions after which to save setting in RN2483 (flash wear out!)
#define PWRIDX 1  // 5 = low power, 1 = high power
#define DR 0 // 5 = lowest, 0 = highest (on TTN DR0 and DR1 only with ADR activated), if ADR is enable this is the initial DR used
#define ADR // enable ADR

void rn2483_break_and_baud();
void rn2483_rx_clear();
void rn2483_init();
void rn2483_init_error();
void rn2483_tx_error();
void rn2483_tx(char buf[]);
void rn2483_rx();

void power_save(uint32_t sec);
void debug(char buf[]);

void adc_init();

void measure();
void transmit();

void pause();
int main(void);

#endif /* MAIN_H_ */