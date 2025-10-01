const sortTheOdd = require('../modules/sortTheOdd')

test("Sort the odd numbers in the array and leave the even numbers", () => {
    expect(sortTheOdd([7, 1])).toStrictEqual([1,7])

    expect(sortTheOdd([5, 8, 6, 3, 4])).toStrictEqual([3, 8, 6, 5, 4])

    expect(sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toStrictEqual([1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
})