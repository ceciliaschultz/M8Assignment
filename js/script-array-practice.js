//STEP 1
// ************************************************
//Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple']
// console.log('>> STEP 1')
// console.log(favMovies[1])

//STEP 2
// ************************************************
/*
Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
Then, use the console to display the first movie in your array.
*/

// let movies = new Array(5)

// for (let i=0; i<5; i++) {
//     movies[i]=favMovies[i]
// }
// console.log('>> STEP 2')
// console.log(movies)


//STEP 3
// ************************************************
/*
Copy your code from step 2. Add a new movie into the 3rd position within your array. 
Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
*/
// console.log('>> STEP 3')

// // copy code from STEP 2
// let movies = new Array(5)

// for (let i=0; i<5; i++) {
//     movies[i]=favMovies[i]
// }

// // Add a new movie in the 3rd position 
// let temp =  movies.slice(0,2).concat('The Godfather') 

// // add the rest ot the array 
// for (let i=2; i<movies.length; i++) {
//     temp.push(movies[i])
// }

// movies = temp
// console.log(movies.length)  // display the length of the new array 


//STEP 4
/*
Declare an array called movies using literal notation. 
Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
*/
// console.log('>> STEP 4')
// let movies = []
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple']
// for (let i=0; i<5; i++) {
//     movies[i]= favMovies[i]
// }

// delete movies[0]

// movies.forEach(movie => {console.log(movie)})



//STEP 5
// ************************************************
/*
Declare an array called movies using literal notation. 
Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
Now, use a for/in loop to iterate through the array and display each movie within the console window.
*/
// console.log('>> STEP 5')
// let movies = []
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']
// for (let i=0; i<7; i++) {
//     movies[i]= favMovies[i]
// }

// for (let i in movies) {
//     if (movies.hasOwnProperty(i)) {
// 		console.log(movies[i])			
// 	}
// }




//STEP 6
// ************************************************
// Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
// console.log('>> STEP 6')
// let movies = []
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']
// for (let i=0; i<7; i++) {
//     movies[i]= favMovies[i]
// }

// for (let movie of movies) {
// 	console.log(movie)			
// }


//STEP 7
// ************************************************
// Copy the code from step 5.
// Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.

// console.log('>> STEP 7')
// let movies = []
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']
// for (let i=0; i<7; i++) {
//     movies[i]= favMovies[i]
// }

// movies.sort()

// for (let movie of movies) {
// 	console.log(movie)			
// }


//STEP 8
// ************************************************
/*
Copy the code from step 5. Under the existing array, create a new array called leastFavMovies.
 Populate the array with the 3 movies that you regret watching. 
 Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

Movies I like:

Movie 1
Movie 2
Movie 3

Movies I regret watching:

Movie 1
Movie 2
Movie 3
*/
// console.log('>> STEP 8')
// let movies = []
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']
// console.log("\nMovies I like:\n ")
// for (let movie of favMovies) {
// 	console.log(movie)			
// }


// let leastFavMovies = ['Barbie','My Big Fat Greek Wedding 2','The Evening Star']
// movies.sort()
// console.log("\nMovies I regret watching:\n ")
// for (let movie of leastFavMovies) {
// 	console.log(movie)			
// }



//STEP 9
// ************************************************
/*
Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies.
Use the console window to display the list in reverse sorted
*/
// console.log('>> STEP 9')
// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']

// let leastFavMovies = ['Barbie','Big Fat Greek Wedding 2','The Evening Star']

// let movies = favMovies.concat(leastFavMovies)
// movies.reverse()

// console.log("All movies- in reverse:")
// for (let movie of movies) {
// 	console.log(movie)			
// }



//STEP 10
// ************************************************
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.

// console.log('>> STEP 10')

// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']

// let leastFavMovies = ['Barbie','My Big Fat Greek Wedding 2','The Evening Star']

// let movies = favMovies.concat(leastFavMovies)
// movies.reverse()

// console.log("All movies- in reverse:")
// for (let movie of movies) {
// 	console.log(movie)			
// }

// // display last element with a function
// console.log(`\nLast element: ${movies.pop()}`)




//STEP 11
// ************************************************
// // Copy the code from step 10. 
// // Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// console.log('>> STEP 10')

// let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']

// let leastFavMovies = ['Barbie','My Big Fat Greek Wedding 2','The Evening Star']

// let movies = favMovies.concat(leastFavMovies)
// movies.reverse()

// console.log("All movies- in reverse:")
// for (let movie of movies) {
// 	console.log(movie)			
// }

// // display first element with a function
// console.log(`\nFirst element: ${movies.shift()}`)


//STEP 12
// ************************************************
// Programmatically retrieve the movies in your array that you do not like and return their indices.
// Then, using those indices, programmatically add movies that you do like.
//let favMovies = ['The Shawshank Redemption', 'The Devil\'s Advocate', 'Sea of Love', 'Life is Beautiful', 'The Color Purple',
// 'The Godfather', 'Jaws']
// console.log('>> STEP 12')
// let movies = [
//     {name:'The Shawshank Redemption', likeFlag: true},
//     {name:'The Devil\'s Advocate', likeFlag: true},
//     {name:'Sea of Love', likeFlag: true},
//     {name:'Life is Beautiful', likeFlag: true},
//     {name:'The Color Purple', likeFlag: true},
//     {name:'The Godfather', likeFlag: true},
//     {name:'Jaws', likeFlag: true},
//     {name:'Barbie', likeFlag: false},
//     {name:'My Big Fat Greek Wedding 2', likeFlag: false},
//     {name:'The Evening Star', likeFlag: false},

// ]

// let moviesILike =movies.filter((elem) => {
//     return elem.likeFlag
// })

// console.log('Movies I like:')
// moviesILike.forEach(element => {
//     console.log(element.name)
// });


//STEP 13
// ************************************************
/*
Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. 
The array should look something like this:

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

Now, loop through the array and filter out and display only the movie names.
You must use the filter() method and you’ll need to filter out the names by their primitive data type.
*/
// console.log('>> STEP 13')

// let movies = [["The Shawshank Redemption", 1], ["The Devil\'s Advocate", 2], ["Sea of Love", 3], ["Life is Beautiful", 4], ["The Color Purple", 5]];

// let moviesILike =movies.filter((elem) => {
//     console.log(elem[0])
// })


//STEP 14
// ************************************************
/*
Create a string array called employees using literal notation and populate the array with several employee names. 
Then, create an anonymous function called showEmployee. 
The function should accept a parameter. 
Call this function, passing in the employees array into the function as a parameter. 
Make sure to display the result in the console window. Within the function, 
loop through the passed in array and display the result so that it looks exactly like this in the console window:
Employees:

ZAK
JESSICA
MARK
FRED
SALLY
*/
// console.log('>> STEP 14')
// let employees = ['ZAK','JESSICA','MARK','FRED','SALLY']
// const showEmployee = function(employees)  {
//     console.log("Employees:\n ")
//     employees.forEach(emp => console.log(emp))
// }

// showEmployee(employees)


//STEP 15
// ************************************************
//Write a JavaScript function to filter false, null, 0 and blank values from an array.
// console.log('>> STEP 15')

// function filterValues(ary) {
//     let filteredArray = ary.filter((elem) => {
//         let condition = (elem != null) && (elem != 0) && (elem != '') && (elem)
//         return condition
//     })
//     return filteredArray
// }

// // Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// // Expected Result: [58, "abcd", true]
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))



//STEP 16
// ************************************************
// Write a JavaScript function to get a random item from an array. 
// So if I create a numeric array with 10 numbers and then pass that array into my function, 
// the function should randomly return one of those numbers.
// console.log('>> STEP 16')

// function getRandomElement(ary) {
//     let randomIdx = Math.floor(Math.random() * ary.length-1) + 0
//     return ary[randomIdx]
// }

// let testData = ['anna','mary','sally', 'fred']
// console.log('random element: ', getRandomElement(testData))


//STEP 17
// ************************************************
// Write a JavaScript function to get the largest number from a numeric array.
// console.log('>> STEP 17')

// // Returns the largest number from the given array
// // Assumes the arg is a numeric array 
// let getLargestNumber = function(ary)  {
//     let tmpArray = ary.slice() // get a copy of the array, we don't want to change the original array

//     // sort numerically, pass comparator to sort 
//     // a-b will always return negative if a< b
//     // this will give us the array sorted in ascending numeric order 
//     let sortedArray= tmpArray.sort((a,b) => {return a-b}) 

//     // return the largest number
//     return sortedArray[sortedArray.length-1]

// }

// let nums = [5,4,40,18,4,15]
// console.log('test numeric array: ' , nums)
// console.log('largest number:', getLargestNumber(nums))
