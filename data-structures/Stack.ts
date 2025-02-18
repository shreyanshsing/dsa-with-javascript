class ListNode<T> {
    val: T
    next: ListNode<T> | null
    constructor(val: T) {
        this.val = val
        this.next = null
    }
}

export default class Stack<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null
    private size: number

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    #get(index: number): ListNode<T> | null {
        let node = this.head
        for (let i = 0; i < index; i++) {
            node = node!.next
        }
        return node
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
        return this.tail
    }

    pop(): ListNode<T> {
        const node = this.#get(this.size - 2)!
        node.next = null
        const lastElm = this.tail!
        this.tail = node
        this.size--
        return lastElm
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
