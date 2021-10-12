# Question 2 - Problem solving

## Solution

- Use `reduce` method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element.
- Check overlap items with last item in the reducer array.
  - Tail last item overlaps with next item.
  - Head and tail last item overlaps with next item.
  - Head last item overlaps with next item.
- Write unittest to cover all the case of the function

## Unittest

Run `yarn test`

- ✓ should return 2 items, 2 last items merge together
- ✓ 3 items overlap should return 1 item
- ✓ head overlap should return 2 item
- ✓ empty input should return empty array
- ✓ should return same array
- ✓ should merge all and return 1 item
- ✓ last item overlap previous items should return 1 item
- ✓ items not overlap should the same items
- ✓ items overlap head should merge and return 1 item
