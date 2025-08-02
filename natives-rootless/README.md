# RedM Native/Game Types

This package contains "easy-to-use" types for RedM.

### Example usage
```js
import * as game from '@risinglife/redm-natives';

game.scripts.shutdownLoadingScreen();
```

### Since v0.0.11
All root methods (e.g. `game.playerId()`) are now deprecated.
The reason for this is clearly that namespaced methods are better and clearer.

To have downward compatibility for the time being, all root methods are still available as wrapped methods.
So that you can easily migrate, you only have to look at the deprecation message of the respective methods.

With v0.2.0, all root methods are completely removed.
Alternatively, you can “install” `@risinglife/redm-natives@rootless` to have no root methods at all.

### Information

For client access see [this package](https://www.npmjs.com/package/@risinglife/redm-client)<br>
You can see all functions, and how they can be use at [rdr3natives.com/](https://rdr3natives.com/)<br>
The package must be included when compile the code for example with **esbuild**.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-redm/issues/new)

### Credits

Thanks to [VORP Core](https://github.com/VORPCORE/RDR3natives) and [CFX.re](https://cfx.re)