# RedM Native/Game Types

This package contains "easy-to-use" types for RedM.

### Example usage
```js
import * as game from '@risinglife/redm-natives';

game.scripts.shutdownLoadingScreen();
```

### Since v0.2.0
All root methods (e.g. `game.playerId()`) were removed.
The reason for this is clearly that namespaced methods are better and clearer.

If you want them, you must downgrade to version [0.1.16](https://www.npmjs.com/package/@risinglife/redm-natives/v/0.1.16)
Remind: Only the latest version contains the newest natives.

### Information

For client access see [this package](https://www.npmjs.com/package/@risinglife/redm-client)<br>
You can see all functions, and how they can be use at [rdr3natives.com/](https://rdr3natives.com/)<br>
The package must be included when compile the code for example with **esbuild**.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-redm/issues/new)

### Credits

Thanks to [VORP Core](https://github.com/VORPCORE/RDR3natives) and [CFX.re](https://cfx.re)