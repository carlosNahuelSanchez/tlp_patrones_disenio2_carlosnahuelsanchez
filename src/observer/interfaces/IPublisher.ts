interface IPublisher {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: any): void;
    publish(message: string): void;
}