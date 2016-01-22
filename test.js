/* global describe, it */
var assert = require('assert')
var constantCaseStrings = require('./')

describe('constant case', function () {
  it('should constant case a single word', function () {
    assert.equal(constantCaseStrings('test'), 'TEST')
    assert.equal(constantCaseStrings('TEST'), 'TEST')
  })

  it('should constant case regular sentence cased strings', function () {
    assert.equal(constantCaseStrings('test string'), 'TEST_STRING')
    assert.equal(constantCaseStrings('Test String'), 'TEST_STRING')
  })

  it('should constant case non-alphanumeric separators', function () {
    assert.equal(constantCaseStrings('dot.case'), 'DOT_CASE')
    assert.equal(constantCaseStrings('path/case'), 'PATH_CASE')
  })

  it('should constant case constant cased strings', function () {
    assert.equal(constantCaseStrings('TestString'), 'TEST_STRING')
    assert.equal(constantCaseStrings('TestString1_2_3'), 'TEST_STRING1_2_3')
  })

  it('should constant case constant cased strings with integers', function () {
    assert.equal(constantCaseStrings('sentence case12order'), 'SENTENCE_CASE12_ORDER')
  })

  it('should support non-latin characters', function () {
    assert.equal(constantCaseStrings('My Entrée'), 'MY_ENTRÉE')
  })

  it('should support locales', function () {
    assert.equal(constantCaseStrings('MY STRING', 'tr'), 'MY_STRING')
  })
})
