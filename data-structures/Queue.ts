class ListNode<T> {
    val: T
    next: ListNode<T> | null
    constructor(val: T) {
        this.val = val
        this.next = null
    }
}

export default class Queue<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null
    private size: number

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
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

    peek(): ListNode<T> | null {
        return this.head
    }

    pop(): ListNode<T> {
        const firstElm = this.head!
        this.head = firstElm.next
        firstElm.next = null
        this.size--
        return firstElm
    }

    isEmpty(): boolean {
        return this.size === 0
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
}