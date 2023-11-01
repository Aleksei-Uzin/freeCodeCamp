/**
 * Cash Register
 *
 * Design a cash register drawer function checkCashRegister() that accepts:
 *  - purchase price as the first argument (price)
 *  - payment as the second argument (cash)
 *  - and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object with
 * a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
 * or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
 * if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
 * sorted in highest to lowest order, as the value of the change key.
 *
 *    Currency Unit           	  Amount
 *        Penny                 $0.01 (PENNY)
 *        Nickel                $0.05 (NICKEL)
 *        Dime                  $0.1 (DIME)
 *        Quarter               $0.25 (QUARTER)
 *        Dollar                $1 (ONE)
 *        Five Dollars          $5 (FIVE)
 *        Ten Dollars           $10 (TEN)
 *        Twenty Dollars        $20 (TWENTY)
 *        One-hundred Dollars   $100 (ONE HUNDRED)
 *
 */

function checkCashRegister(price, cash, cid) {
  const mony = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  }
  let div = +(cash - price).toFixed(2)
  let cidSum = 0
  const change = []

  for (let i = cid.length - 1; i >= 0; i--) {
    const [unit, amount] = cid[i]
    const rank = ~~(div / mony[unit])
    const count = mony[unit] * rank
    const total = amount >= count ? count : amount

    if (rank > 0) {
      div = +(div - total).toFixed(2)
      cidSum += amount - total
      change.push([unit, total])
    }
  }

  if (div > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] }

  if (div === 0 && cidSum === 0) return { status: 'CLOSED', change: cid }

  return { status: 'OPEN', change }
}
