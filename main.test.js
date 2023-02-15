const conversion = require('./main');
const example_01_input = require('./examples/example_01_input.json');
const example_01_output = require('./examples/example_01_output.json');

describe('Conversion tool for api response data', () => {
  it('converts "attributes" array with standard 3 values', () => {
    expect(conversion(example_01_input)).toEqual(example_01_output);
  });
});
