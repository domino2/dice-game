export interface IListener {
  (): void;
}

export interface IEvent {
  (l: IListener): void;
}
