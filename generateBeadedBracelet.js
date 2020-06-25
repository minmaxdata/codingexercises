/**
 * As part of an automated bracelet assembly system we need to generate
 * the pattern of colored beads used to construct a bracelet. This method
 * is responsible for taking in the available colors and final length
 * of the bracelet and returning the final pattern to be constructed.
 * There are two restrictions in the final pattern:
 * 1) No two adjacent beads may be the same color anywhere in the bracelet.
 * 2) No pattern of three beads may be repeated anywhere in the bracelet.
 * For example (Red, Yellow, Red, Yellow, Red) repeats the pattern
 * (Red, Yellow, Red) twice and would be a violation of this rule.
 * (Red, Yellow, Blue, Green, Red, Yellow, Blue) would also violate this rule.
 *
 * @param colors - An array of unique Strings where each string
 * represents a bead color.
 * @param size - The length of the bracelet to be constructed.
 * @return - An array of colors indicating the final order of beads
 * that should be used to construct a bracelet.
 */
const noAdjacentColors = function (beads) {
  if (beads[bead.length - 1] === beads[bead.length - 2]) return false;
};

const checkColor = function (pattern, order, color) {
  const last_beads = [].push(
    order[order.length - 1],
    order[order.length - 1],
    color
  );
  const adjacent = noAdjancentcolors(last_beads);
  if (adjacent && pattern.has(last_beads)) {
    return false;
  }
  return true;
};

const generateBeads = function (colors, size) {
  // implement
  let patterns = new Set();
  let bracelet = [];

  bracelet.push(colors[0]);
  bracelet.push(colors[1]);

  for (let i = 2; i < size; i++) {
    let candidateColor = colors[Math.randomInt(colors.length)];

    if (checkColor(patterns, bracelet, candidateColor)) {
      bracelet.push(candidateColor);
      pattern.add(
        `${bracelet[bracelet.length - 3]}, ${bracelet[bracelet.length - 2]}, ${
          bracelet[bracelet.length - 1]
        }`
      );
    } else {
      i--;
    }
  }

  return bracelet;
};

const colors = ["red", "yellow", "green", "black", "purple"];

// return: ["red", "yellow", "green", "red", "black", "red", "yellow"]
