function friend(friends: string[]): string[] { 
    const myFriends : string[] = []
    friends.length < 0 ? [] : friends.map((el) => {
      el.length === 4 ? myFriends.push(el) : ""
    })
    
    return myFriends
  }
  console.log(friend(["Ryan", "Kieran", "Mark"]))
  console.log(friend([]))

  //create an empty array that will hold myFriends
  //check if the array length is greater than 0
  // then if it is greater, iterate through it and find the strings with length of 4
  //pass them in the created array