
# Kind v1.0.2 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

A [`Validator`](https://github.com/aleclarson/Validator) that passes only for
values that inherit from the `Kind`'s expected type.

```coffee
Kind = require "Kind"

# Must inherit from Object!
ObjectKind = Kind Object
```
