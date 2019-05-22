import Node, { TEXT_NODE } from './Node';

export default class TextNode implements Node {
    readonly TYPE = TEXT_NODE;

    private readonly _value: string;

    private constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    static fromText(value: string) {
        return new TextNode(value);
    }
}
