export class MissingComponentError extends Error {
    constructor() {
        super("wires or outputnames contain pins originating from components that aren't in the components list");
    }
}