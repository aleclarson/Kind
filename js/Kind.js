var Validator, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

module.exports = Validator.Type("Kind", {
  init: function(type) {
    return this.type = type;
  },
  name: function() {
    return "kind of " + this.type.getName();
  },
  test: function(value) {
    return value instanceof this.type;
  },
  assert: function(value, key) {
    if (value instanceof this.type) {
      return;
    }
    return wrongType(this, key);
  }
});

//# sourceMappingURL=map/Kind.map