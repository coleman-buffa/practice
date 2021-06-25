tickets = [4, 13, 2, 3];

tickets = [1, 5, 2, 5, 5, 2, 6, 3, 5, 3]

tickets = [1];

tickets = [1, 1000];

tickets = [1, 2];

tickets = [];

//Works for ascending values where diff is 0 or +1
function maxTickets(tickets) {
  if (tickets.length === 0) {
    return 0
  }

  let maxSub = 1;
  let currSub = 1;
  let desCurrSub = 1;

  for (let i = 1; i < tickets.length; i++) {
    let tempDiff = (tickets[i] - tickets[i-1]);
    if (tempDiff === 0 || tempDiff === 1) {
      currSub++;
      if (currSub > maxSub) {
        maxSub = currSub;
      }
    } else {
      currSub = 1;
    }
    if (tempDiff === 0 || tempDiff === -1) {
      desCurrSub++;
      if (desCurrSub > maxSub) {
        maxSub = desCurrSub;
      }
    } else {
      desCurrSub = 1;
    }
  }
  return maxSub;
}

console.log(maxTickets(tickets));