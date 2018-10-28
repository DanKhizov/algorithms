Number.prototype.binary = function() {
	let bin = +this.toString(2);
	return bin.toString();
};

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};

function toDecimal(num) {
	let dec = Number(num);
	return parseInt(dec, 2).toString();
}

const binString = (x, y) => {
	let a = x.binary();
	let b = y.binary();

	let size = x > y ? a.length : b.length;

	for (let i = 0; i < size; i++) {
		if (!a[i]) {
			a = '0' + a;
		}
		if (!b[i]) {
			b = '0' + b;
		}
	}

	return { a, b };
};

let sumNums = binString(5205, 42);
let = 0;
let s = '';

for (let i = sumNums.a.length - 1; i >= 0; i--) {
	let a = sumNums.a[i];
	let	b = sumNums.b[i];

	s += p ^ (b ^ a);
	p = (p & (a ^ b)) | (a & b);

	if (i === 0) {
		s += p;
		s = s.reverse();
	}
}

console.log(s, '=', toDecimal(s));
