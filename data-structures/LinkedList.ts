class ListNode<T> {
    val: T
    next: ListNode<T> | null
    constructor(val: T) {
        this.val = val
        this.next = null
    }
}

export default class LinkedList<T> {
    head: ListNode<T> | null
    tail: ListNode<T> | null
    size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(val: T) {
        const node = new ListNode(val)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail!.next = node
            this.tail = node
        }
        this.size++
    }

    prepend(val: T) {
        const node = new ListNode(val)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    getNodeAtIndex(index: number): ListNode<T> | null {
        let node = this.head
        for (let i = 0; i < index; i++) {
            node = node!.next
        }
        return node
    }

    insert(val: T, index: number) {
        const node = new ListNode(val)
        if (index === 0) {
            this.prepend(val)
        } else if (index === this.size) {
            this.append(val)
        } else {
            const prevNode = this.getNodeAtIndex(index - 1)!
            const nextNode = prevNode.next
            prevNode.next = node
            node.next = nextNode
        }
        this.size++
    }

    remove(index: number) {
        if (index === 0) {
            this.head = this.head!.next
        } else if (index === this.size - 1) {
            this.tail = this.getNodeAtIndex(index-1)!
        } else {
            const prevNode = this.getNodeAtIndex(index - 1)!
            const nextNode = prevNode.next!
            prevNode.next = nextNode.next
        }
        this.size--
    }

    toArray(): T[] {
        const arr: T[] = []
        let node = this.head
        while (node) {
            arr.push(node.val)
            node = node.next
        }
        return arr
    }

    length(): number {
        return this.size
    }

    isEmpty(): boolean {
        return this.size === 0
    }
}
