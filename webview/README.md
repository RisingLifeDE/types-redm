# FiveM NUI Event-Helper

This package contains an helpful code to listen to events (and sending them to the client-script) easier.

### Usage
As this package helps only on NUI side, you have to register an global listener for this.
To make it easier, you should use EventEmitter to make more events with it.

To listen to any NUI:
```ts
client.registerNuiCallback('view-event', (data: any, cb: Function) => {
    cb('ok');

    if (!Array.isArray(data) || data.length < 2) {
        return;
    }

    const [viewIdentifier, eventName, ...args] = data;

    // Your code
});
```

Listener with event emitter (to have multiple "sub listener"):
```ts
class EventEmitter {
    private listeners: Map<string, Array<(...args: any[]) => void>> = new Map();

    on(eventName: string, callback: (...args: any[]) => void): void {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }
        this.listeners.get(eventName)!.push(callback);
    }

    once(eventName: string, callback: (...args: any[]) => void): void {
        const onceWrapper = (...args: any[]) => {
            this.off(eventName, onceWrapper);
            callback(...args);
        };
        this.on(eventName, onceWrapper);
    }

    emit(eventName: string, ...args: any[]): void {
        const callbacks = this.listeners.get(eventName);
        if (callbacks) {
            callbacks.forEach((callback) => {
                try {
                    callback(...args);
                } catch (error) {
                    console.error(error)
                }
            });
        }
    }

    off(eventName: string, callback: (...args: any[]) => void): void {
        const callbacks = this.listeners.get(eventName);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    removeAllListeners(eventName?: string): void {
        if (eventName) {
            this.listeners.delete(eventName);
        } else {
            this.listeners.clear();
        }
    }
}

const events = new EventEmitter();

client.registerNuiCallback('view-event', (data: any, cb: Function) => {
    cb('ok');

    if (!Array.isArray(data) || data.length < 2) {
        // console.warn('Invalid event data received:', data);
        return;
    }

    const [viewIdentifier, eventName, ...args] = data;
    events.emit(`${viewIdentifier}::${eventName}`, ...args);
});
```