/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = new Set();

  transactions.forEach(function(transaction){
  categories.add(transaction.category)
  })

  let arr = []

  categories.forEach(function(category1){
      let total = 0;
      transactions.forEach(function(transaction){
          if(category1===transaction.category){
              total += transaction.price;
          }
      })
  

  let result = {category: category1, totalSpent: total}

  arr.push(result)

  });

return arr;

};



module.exports = calculateTotalSpentByCategory;
