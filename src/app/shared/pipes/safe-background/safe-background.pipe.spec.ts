import { SafeBackgroundPipe } from './safe-background.pipe';

describe('SafeBackgroundPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeBackgroundPipe();
    expect(pipe).toBeTruthy();
  });
});
