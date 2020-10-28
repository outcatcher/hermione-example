const assert = require('chai').assert;

describe('github', function () {
  it('Check Header', function () {
    return this.browser
      .url('/gemini-testing/hermione')
      .getText('#readme h1')
      .then(function (title) {
        assert.equal(title, 'Hermione')
      })
      .assertView('readme-header', '#readme h1', undefined)
  });
});

// TODO: check some label colour
