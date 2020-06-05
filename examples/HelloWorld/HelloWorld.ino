#include <Arduino.h>

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 OLED1(128, 64, &Wire, -1);

void setup() {
  OLED1.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  OLED1.setTextColor(WHITE, BLACK);
  OLED1.clearDisplay();
  OLED1.setTextSize(2);
}
void loop() {
  OLED1.setCursor(OLED1.getTextSize() * 6 * 0, OLED1.getTextSize() * 8 * 0);
  OLED1.print(String(String("Line 0")));
  OLED1.setCursor(OLED1.getTextSize() * 6 * 1, OLED1.getTextSize() * 8 * 1);
  OLED1.print(String(String("Line 1")));
  OLED1.setCursor(OLED1.getTextSize() * 6 * 2, OLED1.getTextSize() * 8 * 2);
  OLED1.print(String(String("Line 2")));
  OLED1.display();
}