
export interface ComponentState {
    
}

export interface Component<T extends ComponentState> {
    createState(): T;
    compute(state: T): boolean;
}