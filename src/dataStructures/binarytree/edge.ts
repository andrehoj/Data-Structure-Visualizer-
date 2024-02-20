class Edge {
    key: number | null
    left: edgeType | null
    right: edgeType | null

    constructor(key: number) {
        this.key = key
        this.right = null
        this.left = null
    }
}

type edgeType = InstanceType<typeof Edge>;

export { Edge, edgeType }