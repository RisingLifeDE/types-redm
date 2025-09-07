# RedM Client Types

This package contains "easy-to-use" types for RedM.

For example:
```js
import * as client from '@risinglife/redm-client';

client.shutdownLoadingScreenNui();
```

For native access see [this package](https://www.npmjs.com/package/@risinglife/redm-natives)<br>
You can see all functions, and how they can be use at [https://rdr3natives.com/](https://rdr3natives.com/)<br>
The package must be included when compile the code for example with **esbuild**.

### Since v0.2.0
All root methods (e.g. `client.shutdownLoadingScreenNui()`) were removed.
The reason for this is clearly that namespaced methods are better and clearer.

If you want them, you must downgrade to version [0.1.0](https://www.npmjs.com/package/@risinglife/redm-client/v/0.1.0)
Remind: Only the latest version contains the newest natives.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-redm/issues/new)

### Credits

Thanks to [VORP Core](https://github.com/VORPCORE/RDR3natives) and [CFX.re](https://cfx.re)