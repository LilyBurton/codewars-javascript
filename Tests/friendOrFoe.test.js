const friend = require('../modules/friendOrFoe')

test('Find a friend who has 4 letters', () => {
    expect(friend(["Ryan", "Kieran", "Jason", "Yous"])).toStrictEqual(["Ryan", "Yous"])

    expect(friend(["Peter", "Stephen", "Joe"])).toStrictEqual([])
})