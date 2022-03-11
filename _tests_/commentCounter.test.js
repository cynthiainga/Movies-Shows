import commentsCounter from '../src/modules/commentsCounter.js';

describe('comments counting Function', () => {
  it('should return the number of items', () => {
    const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    expect(commentsCounter(items)).toBe(10);
    expect(commentsCounter([])).toBe(0);
  });
});
