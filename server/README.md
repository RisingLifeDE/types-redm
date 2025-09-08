# RedM Server Types

This package contains "easy-to-use" types for RedM.

It contains every method which can be used on server side.

For client access see [this package](https://www.npmjs.com/package/@risinglife/redm-client)<br>
The package must be included when compile the code for example with **esbuild**.

### Since v0.1.0
All root methods (e.g. `server.taskShootAtEntity()`) are now deprecated.
The reason for this is clearly that namespaced methods are better and clearer.

To have downward compatibility for the time being, all root methods are still available as wrapped methods.
So that you can easily migrate, you only have to look at the deprecation message of the respective methods.

With v0.2.0, all root methods are completely removed.
Alternatively, you can “install” `@risinglife/redm-server@rootless` to have no root methods at all.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-redm/issues/new)

### Credits

Thanks to [VORP Core](https://github.com/VORPCORE/RDR3natives) and [CFX.re](https://cfx.re)