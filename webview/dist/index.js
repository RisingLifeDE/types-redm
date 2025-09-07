export class api {
    /**
     * This should be replaced if we send the event to another resource instead of the current.
     */
    static targetResource = undefined;
    /**
     * This should be replaced if this web view isn't a framed element.
     *
     * For more details look at the README file.
     */
    static viewId = undefined;
    static eventListeners = new Map();
    static emit(eventName, ...args) {
        if (window['nuiTargetGame'] !== undefined) {
            try {
                fetch(`https://${this.getTargetResource()}/view-event`, {
                    method: "POST",
                    body: JSON.stringify([`${this.getViewId()}`, eventName, ...args])
                }).catch(err => console.error(err));
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            console.log('[Emit]', eventName, ...args);
        }
    }
    static on(eventName, listener) {
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, new Set());
        }
        this.eventListeners.get(eventName).add(listener);
        if (window.parent !== undefined && this.eventListeners.size === 1) {
            window.addEventListener('message', this.handleMessage);
        }
    }
    static off(eventName, listener) {
        const listeners = this.eventListeners.get(eventName);
        if (!listeners)
            return;
        listeners.delete(listener);
        if (listeners.size === 0) {
            this.eventListeners.delete(eventName);
        }
        if (this.eventListeners.size === 0 && window.parent !== undefined) {
            window.removeEventListener('message', this.handleMessage);
        }
    }
    static once(eventName, listener) {
        const onceListener = (...args) => {
            this.off(eventName, onceListener);
            listener(...args);
        };
        this.on(eventName, onceListener);
    }
    /**
     * This function handles the listener system.
     * Do not use it!
     *
     * @param event
     */
    static handleMessage = (event) => {
        if (!Array.isArray(event.data) || event.data.length === 0)
            return;
        const [receivedEventName, ...args] = event.data;
        const listeners = this.eventListeners.get(receivedEventName);
        if (!listeners)
            return;
        for (const listener of listeners) {
            try {
                listener(...args);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    static getViewId() {
        return (this.viewId != undefined ? this.viewId : (window.frameElement?.id ?? 'failed-to-load'));
    }
    static getTargetResource() {
        return (this.targetResource != undefined ? this.targetResource : window.parent['name']);
    }
}
