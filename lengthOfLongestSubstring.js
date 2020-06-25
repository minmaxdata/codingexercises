/** 
 * leetcode 3
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let set = new Set(); // use a set to keep track of the letters in the current window
    let maxSubstringLength = 0;
    
    while (right < s.length) {
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            // check if new window is longer than the longest window
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++; // increase window to the right
        } else {
            set.delete(s.charAt(left));
            // contract window from the left (stops contracting when there are only unique characters in the set)
            left++;
        }
    }
    
    return maxSubstringLength;
};