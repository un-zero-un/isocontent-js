import Node from './Node';

export default class NodeList {
    private readonly _nodes: Node[];

    private constructor(nodes) {
        this._nodes = nodes;
    }

    get nodes(): Node[] {
        return this._nodes;
    }

    public static fromArray(nodes: Node[]) {
        return new NodeList(nodes);
    }
}
