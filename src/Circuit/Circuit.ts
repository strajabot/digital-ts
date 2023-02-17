import { Component } from "./Component";
import { InputPin } from "./Pin/InputPin";
import { OutputPin } from "./Pin/OutputPin";

export class Circuit {

    private components: Component<any>[] = []
    private wires: Map<OutputPin, InputPin[]>
    private outputNames: Map<string, OutputPin> = new Map()
    
    constructor(components: Component<any>[], wires: Map<OutputPin, InputPin[]>, outputNames?: Map<string, OutputPin>) {
        this.components = components;
        this.wires = wires;
        this.outputNames = outputNames? outputNames: new Map();
    }

}