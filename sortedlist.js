// sortedLists
// Write a function that takes a string representation of two sorted list of numbers (ascending order). The lists themselves are comma delimited and the two lists are semicolon delimited. Print out the intersection of these two sets.
// Sample Input:
// 1,2,3,4;4,5,6
// 20,21,22;45,46,47
// 7,8,9;8,9,10,11,12
// Sample Output:
// 4
// 8,9
// 1,2,3,4;4,5,6
// 20,21,22;45,46,47
// 7,8,9;8,9,10,11,12

// result = ''
// object to the key values of the firstlis
//  split list on semicolon
// array of length 2
// array first element contains first of list
// second list
// result of that list.split(';');
// firstlist = result[0];
// firstlist split string (',');
// array of the number as strings
// take result ing array and reduce to and object of key value
// return duplicates from 2nd list
// cast it to Set
// convert to Set array
// iterate second list of numbers array
// list2[i]
// list1[list2[i]]  append it to result string;
// return string


// visualize problems
// solution if off
// sorted
// compare smallest
// if it matches store then pop it off
// other pop off the smallest one
// return array o(n/2) - o(n) linear
// make another appointment
// can i modify the input?
// space complexity
const sortedList = (list) => {
  return ""
}
const result = sortedList('1,2,3,4;4,5,6');
result = sortedList('20,21,22;45,46,47');
result = sortedList('7,8,9;8,9,10,11,12');
