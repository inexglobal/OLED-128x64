Blockly.JavaScript['oled_i2c_init'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var text_addr = block.getFieldValue('addr');
  var code = `#EXTINC #include <SPI.h>
					  #include <Wire.h>
					  #include <Adafruit_GFX.h>
                      #include <Adafruit_SSD1306.h> #END
#VARIABLE Adafruit_SSD1306 ${variable_instance}(128,64,&Wire,-1); #END
${variable_instance}.begin(SSD1306_SWITCHCAPVCC, ${text_addr});
${variable_instance}.setTextColor(WHITE,BLACK);\n`
  return code;
};

Blockly.JavaScript['oled_i2c_print'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${variable_instance}.print(String(${value_text}));\n`;
  return code;
};

Blockly.JavaScript['oled_i2c_print_xy'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${variable_instance}.setCursor(${value_x},${value_y});
${variable_instance}.setTextSize(${value_s});
${variable_instance}.print(String(${value_text}));\n`;
  return code;
};
Blockly.JavaScript['oled_i2c_print_digit_line'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${variable_instance}.setCursor(${variable_instance}.getTextSize()*6*${value_x},${variable_instance}.getTextSize()*8*${value_y});
${variable_instance}.print(String(${value_text}));\n`;
  return code;
};
Blockly.JavaScript['oled_i2c_set_cursor'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.setCursor('+value_x+','+value_y+');   \n';
  return code;
};
Blockly.JavaScript['oled_i2c_set_size'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.setTextSize('+value_size+');   \n';
  return code;
};
Blockly.JavaScript['oled_i2c_clear'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance+'.clearDisplay();\n';
  return code;
};
Blockly.JavaScript['oled_i2c_display'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance+'.display();\n';
  return code;
};
