const testDataObject = [
    {
      type: 'text',
      value: 'This is a test print',
      style: `text-align:center;`,
      css: { "font-weight": "700", "font-size": "18px" }
    },
    {
      type: 'barCode',
      value: '123456789012',
      height: 12,
      width: 1,
      displayValue: true,
      fontsize: 8
    },
    // Add more predefined items as needed
  ];
  
  module.exports = { testDataObject };
  