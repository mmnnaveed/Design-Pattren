export interface Iterator<T>{
    current(): T;
    next(): void;
    hasNext(): boolean;
}