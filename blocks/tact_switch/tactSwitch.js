// define blocks
'use strict';
Blockly.Blocks['buttonState'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
              ["buttonState_0", "buttonState_0"],
              ["buttonState_1", "buttonState_1"],
              ["buttonState_2", "buttonState_2"],
              ["buttonState_3", "buttonState_3"],
              ["buttonState_4", "buttonState_4"],
              ["buttonState_5", "buttonState_5"],
              ["buttonState_6", "buttonState_6"],
              ["buttonState_7", "buttonState_7"],
              ["buttonState_8", "buttonState_8"],
              ["buttonState_9", "buttonState_9"],
              ["buttonState_10", "buttonState_10"],
              ["buttonState_11", "buttonState_11"],
              ["buttonState_12", "buttonState_12"],
              ["buttonState_13", "buttonState_13"],
              ["buttonState_14", "buttonState_14"],
              ["buttonState_15", "buttonState_15"],
              ["buttonState_16", "buttonState_16"],
              ["buttonState_17", "buttonState_17"],
              ["buttonState_18", "buttonState_18"],
              ["buttonState_19", "buttonState_19"],
              ["buttonState_20", "buttonState_20"],
              ["buttonState_21", "buttonState_21"],
              ["buttonState_22", "buttonState_22"],
              ["buttonState_23", "buttonState_23"],
              ["buttonState_24", "buttonState_24"],
              ["buttonState_25", "buttonState_25"],
              ["buttonState_26", "buttonState_26"],
              ["buttonState_27", "buttonState_27"],
              ["buttonState_28", "buttonState_28"],
              ["buttonState_29", "buttonState_29"],
              ["buttonState_30", "buttonState_30"],
              ["buttonState_31", "buttonState_31"],
              ["buttonState_32", "buttonState_32"]
            ]), "unit");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks.buttonState_Read = {
    init: function() {
      this.setColour("#0152AB");
      this.setHelpUrl("");
      this.appendDummyInput()
          .setAlign("left")
          .appendField("Tact Switch")
          .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/tact_switch/tactswitch.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
          this.appendDummyInput("")
          .appendField(Blockly.Msg.button_State)
          .appendField(new Blockly.FieldDropdown([
          ["buttonState_0", "buttonState_0"],
          ["buttonState_1", "buttonState_1"],
          ["buttonState_2", "buttonState_2"],
          ["buttonState_3", "buttonState_3"],
          ["buttonState_4", "buttonState_4"],
          ["buttonState_5", "buttonState_5"],
          ["buttonState_6", "buttonState_6"],
          ["buttonState_7", "buttonState_7"],
          ["buttonState_8", "buttonState_8"],
          ["buttonState_9", "buttonState_9"],
          ["buttonState_10", "buttonState_10"],
          ["buttonState_11", "buttonState_11"],
          ["buttonState_12", "buttonState_12"],
          ["buttonState_13", "buttonState_13"],
          ["buttonState_14", "buttonState_14"],
          ["buttonState_15", "buttonState_15"],
          ["buttonState_16", "buttonState_16"],
          ["buttonState_17", "buttonState_17"],
          ["buttonState_18", "buttonState_18"],
          ["buttonState_19", "buttonState_19"],
          ["buttonState_20", "buttonState_20"],
          ["buttonState_21", "buttonState_21"],
          ["buttonState_22", "buttonState_22"],
          ["buttonState_23", "buttonState_23"],
          ["buttonState_24", "buttonState_24"],
          ["buttonState_25", "buttonState_25"],
          ["buttonState_26", "buttonState_26"],
          ["buttonState_27", "buttonState_27"],
          ["buttonState_28", "buttonState_28"],
          ["buttonState_29", "buttonState_29"],
          ["buttonState_30", "buttonState_30"],
          ["buttonState_31", "buttonState_31"],
          ["buttonState_32", "buttonState_32"]]),"button_State")
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.value)
          .appendField(new Blockly.FieldDropdown([["D2 / CS / ADC2_2 / GPIO2", "2"],
                                                  ["D4 / ADC2_0 / GPIO4", "4"],
                                                  ["D12 / ADC2_5 / GPIO12", "12"],
                                                  ["D13 / ADC2_6 / GPIO13", "13"],
                                                  ["D14 / ADC2_3 / GPIO14", "14"],
                                                  ["D15 / ADC2_3 / GPIO15", "15"],
                                                  ["D18 / SCK / GPIO18", "18"],
                                                  ["D19 / MISO / GPIO19", "19"],
                                                  ["D21 / SDA / GPIO21", "21"],
                                                  ["D22 / SCL / GPIO22", "22"],
                                                  ["D23 / MOSI / GPIO23", "23"],
                                                  ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                                                  ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                                                  ["D27 / ADC2_7 / GPIO27", "27"],
                                                  ["D32 / ADC1_4 / GPIO32", "32"],
                                                  ["D33 / ADC1_5 / GPIO33", "33"],
                                                  ["D34 / ADC1_6 / GPIO34", "34"],
                                                  ["D35 / ADC1_7 / GPIO35", "35"],
                                                  ["VP / ADC1_0 / GPIO36", "36"],
                                                  ["VN / ADC1_3 / GPIO39", "39"],
                                                  ["CS / GPIO05", "5"],
                                                  ["TXD0 / GPIO01", "1"],
                                                  ["RXD0 / GPIO03", "3"],
                                                  ["RXD 1 / GPIO09", "9"],
                                                  ["TXD 1 / GPIO10", "10"],
                                                  ["RTS 1 / GPIO11", "11"],
                                                  ["TXD2 / GPIO17", "17"],
                                                  ["RXD2 / GPIO16", "16"],
                                                  ["ADC2_1 / GPIO0", "0"],
                                                  ["CTS2 / SPI_D GPIO08", "8"],
                                                  ["RTS2 / SPI_Q / GPIO07", "7"],
                                                  ["CTS1 / SPI_CLK / GPIO06", "6"]]), 'PIN');
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  };

  
  Blockly.Blocks.buttonPin = {
    init: function() {
      this.setColour("#0152AB");
      this.setHelpUrl("");
      this.appendDummyInput()
          .setAlign("left")
          .appendField("Tact Switch")
          .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/tact_switch/tactswitch.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
          this.appendDummyInput("")
          .appendField(Blockly.Msg.buttonPin)
          .appendField(new Blockly.FieldDropdown([
          ["buttonPin", "buttonPin"],
          ["buttonPin1", "buttonPin"],
          ["buttonPin2", "buttonPin2"],
          ["buttonPin3", "buttonPin3"],
          ["buttonPin4", "buttonPin4"],
          ["buttonPin5", "buttonPin5"],
          ["buttonPin6", "buttonPin6"],
          ["buttonPin7", "buttonPin7"],
          ["buttonPin8", "buttonPin8"],
          ["buttonPin9", "buttonPin9"],
          ["buttonPin10", "buttonPin10"],
          ["buttonPin11", "buttonPin11"],
          ["buttonPin12", "buttonPin12"],
          ["buttonPin13", "buttonPin13"],
          ["buttonPin14", "buttonPin14"],
          ["buttonPin15", "buttonPin15"],
          ["buttonPin16", "buttonPin16"],
          ["buttonPin17", "buttonPin17"],
          ["buttonPin18", "buttonPin18"],
          ["buttonPin19", "buttonPin19"],
          ["buttonPin20", "buttonPin20"],
          ["buttonPin21", "buttonPin21"],
          ["buttonPin22", "buttonPin22"],
          ["buttonPin23", "buttonPin23"],
          ["buttonPin24", "buttonPin24"],
          ["buttonPin25", "buttonPin25"],
          ["buttonPin26", "buttonPin26"],
          ["buttonPin27", "buttonPin27"],
          ["buttonPin28", "buttonPin28"],
          ["buttonPin29", "buttonPin29"],
          ["buttonPin30", "buttonPin30"],
          ["buttonPin31", "buttonPin31"],
          ["buttonPin32", "buttonPin32"],
          ["buttonPin33", "buttonPin33"],
          ["buttonPin34", "buttonPin34"],
          ["buttonPin35", "buttonPin35"]]),"buttonPin")
          this.appendDummyInput("")
          .appendField(Blockly.Msg.button_State)
          .appendField(new Blockly.FieldDropdown([
            ["buttonState_0", "buttonState_0"],
            ["buttonState_1", "buttonState_1"],
            ["buttonState_2", "buttonState_2"],
            ["buttonState_3", "buttonState_3"],
            ["buttonState_4", "buttonState_4"],
            ["buttonState_5", "buttonState_5"],
            ["buttonState_6", "buttonState_6"],
            ["buttonState_7", "buttonState_7"],
            ["buttonState_8", "buttonState_8"],
            ["buttonState_9", "buttonState_9"],
            ["buttonState_10", "buttonState_10"],
            ["buttonState_11", "buttonState_11"],
            ["buttonState_12", "buttonState_12"],
            ["buttonState_13", "buttonState_13"],
            ["buttonState_14", "buttonState_14"],
            ["buttonState_15", "buttonState_15"],
            ["buttonState_16", "buttonState_16"],
            ["buttonState_17", "buttonState_17"],
            ["buttonState_18", "buttonState_18"],
            ["buttonState_19", "buttonState_19"],
            ["buttonState_20", "buttonState_20"],
            ["buttonState_21", "buttonState_21"],
            ["buttonState_22", "buttonState_22"],
            ["buttonState_23", "buttonState_23"],
            ["buttonState_24", "buttonState_24"],
            ["buttonState_25", "buttonState_25"],
            ["buttonState_26", "buttonState_26"],
            ["buttonState_27", "buttonState_27"],
            ["buttonState_28", "buttonState_28"],
            ["buttonState_29", "buttonState_29"],
            ["buttonState_30", "buttonState_30"],
            ["buttonState_31", "buttonState_31"],
            ["buttonState_32", "buttonState_32"]]),"button_State")
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.value)
          .appendField(new Blockly.FieldDropdown([["D2 / CS / ADC2_2 / GPIO2", "2"],
                                                  ["D4 / ADC2_0 / GPIO4", "4"],
                                                  ["D12 / ADC2_5 / GPIO12", "12"],
                                                  ["D13 / ADC2_6 / GPIO13", "13"],
                                                  ["D14 / ADC2_3 / GPIO14", "14"],
                                                  ["D15 / ADC2_3 / GPIO15", "15"],
                                                  ["D18 / SCK / GPIO18", "18"],
                                                  ["D19 / MISO / GPIO19", "19"],
                                                  ["D21 / SDA / GPIO21", "21"],
                                                  ["D22 / SCL / GPIO22", "22"],
                                                  ["D23 / MOSI / GPIO23", "23"],
                                                  ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                                                  ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                                                  ["D27 / ADC2_7 / GPIO27", "27"],
                                                  ["D32 / ADC1_4 / GPIO32", "32"],
                                                  ["D33 / ADC1_5 / GPIO33", "33"],
                                                  ["D34 / ADC1_6 / GPIO34", "34"],
                                                  ["D35 / ADC1_7 / GPIO35", "35"],
                                                  ["VP / ADC1_0 / GPIO36", "36"],
                                                  ["VN / ADC1_3 / GPIO39", "39"],
                                                  ["CS / GPIO05", "5"],
                                                  ["TXD0 / GPIO01", "1"],
                                                  ["RXD0 / GPIO03", "3"],
                                                  ["RXD 1 / GPIO09", "9"],
                                                  ["TXD 1 / GPIO10", "10"],
                                                  ["RTS 1 / GPIO11", "11"],
                                                  ["TXD2 / GPIO17", "17"],
                                                  ["RXD2 / GPIO16", "16"],
                                                  ["ADC2_1 / GPIO0", "0"],
                                                  ["CTS2 / SPI_D GPIO08", "8"],
                                                  ["RTS2 / SPI_Q / GPIO07", "7"],
                                                  ["CTS1 / SPI_CLK / GPIO06", "6"]]), 'PIN');
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

    }
  };
