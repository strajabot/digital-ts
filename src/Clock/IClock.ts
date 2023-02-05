

export interface IClock {
    
    getCLK(): number;
    addHook(hook: (clk: number) => void): number;
    removeHook(hookid: number): void;
    
}