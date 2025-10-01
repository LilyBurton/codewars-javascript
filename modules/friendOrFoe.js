function friend(friends) {
    let newFriends = []

    for (let i = 0; i < friends.length; ++i) {
        if (friends[i].length === 4) {
            newFriends.push(friends[i])
        }
    }
    return newFriends
}
module.exports = friend