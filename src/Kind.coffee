
Validator = require "Validator"
wrongType = require "wrongType"

module.exports = Validator.Type "Kind",

  init: (type) ->
    @type = type

  name: ->
    "kind of " + @type.getName()

  test: (value) ->
    value instanceof @type

  assert: (value, key) ->
    return if value instanceof @type
    wrongType this, key
