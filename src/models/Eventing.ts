// Take nothing and return nothing
type Callback = () => void;

export class Eventing {
	events: { [key: string]: Callback[] } = {};
	
	on(eventName: string, callback: Callback): void {
		// if undefined assign []
		const handlers: Callback[] = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers
	}

	trigger(eventName: string): void {
		const handlers: Callback[] = this.events[eventName];
		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach((callback) => {
			callback();
		});
	}
}