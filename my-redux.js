class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.state = initialState;
        this.subscribers = [];
    }

    dispatch(action) {
        const newState = this.reducer(this.state, action);
        if (newState !== this.state) {
            _notifySubscribers();
        }
    }

    subscribe(subscriber) {
        if (typeof subscriber !== 'function') {
            throw new Error('The subscriber must be a function');
        }
        this.subscribers.push(subscriber);

        const subscription = {
            unsubscribe: () => {
                this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
            }
        };

        return subscription;
    }

    _notifySubscribers() {
        this.subscribers.forEach(subscriber => subscriber.call(null));
    }

    getState() {
        return this.state;
    }
}

