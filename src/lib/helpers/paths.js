/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number} random number between the lowest and highest number
 */
function rInt(min = 0, max = 90) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.random() * (max - min + 1) + min;
}

/**
 * returns a random pos or negative int given two positive ints
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomBetween(min, max) {
	const randomNum = rInt(min, max);

	const negative = Math.random() < 0.5;
	return negative ? randomNum * -1 : randomNum;
}
