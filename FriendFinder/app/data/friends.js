// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

var users = [{
    "name": "User1",
    "photo": "https://c1.staticflickr.com/9/8715/16873315151_2a6f1e4a15_b.jpg",
    "scores": [
      1,
      2,
      3,
      4,
      5,
      5,
      4,
      3,
      2,
      1
    ]
  },
  {
    "name": "User2",
    "photo": "https://secure.gravatar.com/avatar/b544ec63d89a9fd7a9c8744131647866?s=400&d=mm&r=g",
    "scores": [
      5,
      4,
      3,
      2,
      1,
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "name": "User3",
    "photo": "https://c1.staticflickr.com/1/366/19646912528_2bd0e1a906_b.jpg",
    "scores": [
      1,
      2,
      2,
      2,
      2,
      5,
      4,
      5,
      2,
      1
    ]
  },
  {
    "name": "User4",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JCuCuS8XrBbaZRltQLqHgIdRInwgCjQ4ilyiY_OgoX5xWcrpaA",
    "scores": [
      5,
      1,
      1,
      2,
      1,
      1,
      4,
      3,
      3,
      5
    ]
  },
  {
    "name": "User5",
    "photo": "http://images4.fanpop.com/image/polls/779000/779055_1311143306212_full.jpg?v=1311144073",
    "scores": [
      3,
      5,
      5,
      5,
      5,
      5,
      2,
      2,
      3,
      3
    ]
  },
  {
    "name": "User6",
    "photo": "https://78.media.tumblr.com/508370a2ecb4e4289df09173dcbaaa76/tumblr_oo8y2tbTYu1vhm083o1_400.jpg",
    "scores": [
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
  },
  {
    "name": "User7",
    "photo": "https://i.pinimg.com/736x/ec/ce/ea/ecceea13d075c56ba2e66947d76a2a33--taboo-tattoo-yoga-tattoos.jpg",
    "scores": [
      4,
      4,
      1,
      1,
      1,
      1,
      4,
      4,
      4,
      4
    ]
  },
  {
    "name": "User8",
    "photo": "https://i.pinimg.com/736x/6b/a9/40/6ba940f77e41f03923b81b7e37655acc--alexa-vega-girl-crushes.jpg",
    "scores": [
      3,
      3,
      2,
      2,
      2,
      3,
      3,
      1,
      1,
      1
    ]
  },
  {
    "name": "User9",
    "photo": "https://cdn.shopify.com/s/files/1/0246/1035/products/Rochester-Flannel_400x.jpg?v=1503080360",
    "scores": [
      2,
      1,
      2,
      2,
      4,
      2,
      2,
      3,
      5,
      2
    ]
  },
  {
    "name": "User0",
    "photo": "https://i.pinimg.com/736x/48/49/90/4849906610f7bf6d01f4a541ac07ac5a--forever-love-tomboy-style.jpg",
    "scores": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  }
];

module.exports = users;


// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


// Example: 


// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5





// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.


// The modal should display both the name and picture of the closest match.


