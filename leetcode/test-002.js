var addTwoNumbers = function(l1, l2) {
  const preHead = new ListNode();
  const p = prehead;
  let carry = 0;

  for (let p1 = l1, p2 = l2; p1 || p2 || carry > 0; p = p.next) {
    let sum = carry;
    if (p1) {
      sum += p1.val;
      p1 = p1.next;
    }
    if (p2) {
      sum += p2.val;
      p2 = p2.next;
    }
    carry = (sum / 10) | 0;
    p.next = new ListNode(sum % 10);
  }

  return preHead.next;
};
