export class WireError extends Error {
    constructor() {
        super("Multiple OutputPins connected to single InputPin");
    }
}