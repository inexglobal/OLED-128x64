module.exports = [
	{
		name : "OLED 128x64 I2C",
		blocks : [
			"oled_i2c_init", 
            "oled_i2c_clear",
				{
				xml:
            	   `<block type="oled_i2c_set_size">
                        <value name="size">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
			},
			{
				xml:
            	   `<block type="oled_i2c_set_cursor">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
			},
		
			{
				xml:
            	   `<block type="oled_i2c_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
			}, 

			{
				xml:
            	   `<block type="oled_i2c_print_xy">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
						<value name="s">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
			},, 

			{
				xml:
            	   `<block type="oled_i2c_print_digit_line">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
						
                    </block>`
			},
			 "oled_i2c_display",
		]
	}	
];