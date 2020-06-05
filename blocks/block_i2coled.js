Blockly.Blocks['oled_i2c_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .appendField("Setup OLED address")
        .appendField(new Blockly.FieldTextInput("0x3C"), "addr")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup your LCD i2c");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['oled_i2c_print'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .setCheck(null)
        .appendField("Print text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['oled_i2c_print_xy'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .setCheck(null)
        .appendField("Print text");
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("at x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("y");
	this.appendValueInput("s")
        .setCheck(null)
        .appendField("size");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text at x,y,size on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['oled_i2c_print_digit_line'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .setCheck(null)
        .appendField("Print text");
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("at digit");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("line");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text at digit,line on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['oled_i2c_set_cursor'] = {
  init: function() {
    this.appendValueInput("x")
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .setCheck(null)
        .appendField("set cursor at x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("set cursor at x,y");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['oled_i2c_set_size'] = {
  init: function() {
    this.appendValueInput("size")
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .setCheck(null)
        .appendField("set TextSize at size");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("set TextSize at [size]");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['oled_i2c_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .appendField("clear screen");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("clear screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['oled_i2c_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("OLED1",null,["Plugin.OLED_I2C"],["Plugin.OLED_I2C"]),"instance")
        .appendField("display screen");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("clear screen");
 this.setHelpUrl("");
  }
};
