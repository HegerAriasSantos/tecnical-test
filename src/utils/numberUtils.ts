export class NumberUtils {
	static getNumber(index: number) {
		index = index + 1;
		if (index < 10) {
			return `0${index}`;
		}
		return index.toString();
	}
}
