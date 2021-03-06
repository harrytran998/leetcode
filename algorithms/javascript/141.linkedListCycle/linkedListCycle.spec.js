import { ListNode, hasCycle } from './linkedListCycle'

describe('wordBreak', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('test case 1', function () {
    const head = [3, 2, 0, -4].reduceRight(reducer, null)
    head.next.next.next.next = head.next
    const result = true
    expect(hasCycle(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [1, 2].reduceRight(reducer, null)
    head.next.next = head
    const result = true
    expect(hasCycle(head)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [1].reduceRight(reducer, null)

    const result = false
    expect(hasCycle(head)).toEqual(result)
  })
})
