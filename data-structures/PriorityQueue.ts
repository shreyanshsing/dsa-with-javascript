class ListNode<T> {
    val: T
    next: ListNode<T> | null
    constructor(val: T) {
        this.val = val
        this.next = null
    }
}

export default class PrioritQueue<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null
    private size: number

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }
    
    pop(): ListNode<T> {
        const node = this.head!
        this.head = node.next
        node.next = null
        this.size--
        return node
    }

    peek(): ListNode<T> | null {
        return this.head
    }

    append(val: T) {
        const temp = new ListNode(val)
        if(this.size === 0) {
            this.head = temp
            this.tail = this.head
        } else {
            if (this.head!.val > val) {
                temp.next = this.head
                this.head = temp
            } else if(this.tail!.val < val) {
                this.tail!.next = temp
                this.tail = temp
            } else {
                let start = this.head
                while(start && start.next && start.next.val < val) {
                    start = start.next
                }
                temp.next = start!.next
                start!.next = temp
            }
        }
        this.size++
    }
}