const cli = require('../../src/utils/cli.js');

describe('uint2hex command', () => {
  test('Should output help', async () => expect((await cli('uint2hex', '--help')).code).toBe(0));
  test('Should properly convert a small hex', async () => {
    const result = await cli('uint2hex', '42');
    expect(result.stdout).toContain('0x2a');
  });
});