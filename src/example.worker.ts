// Demonstrate ability use other modules
import {Map} from "immutable";

console.log('worker', 'running');

const ctx: Worker = self as any;

const items: Map<string, { value: any }> = Map({
    foo: { value: 'bar' },
});

ctx.onmessage = event => {
    console.log('worker', 'received message', event.data)

    console.log('worker', 'responding with items');
    ctx.postMessage(items.toJS())
};