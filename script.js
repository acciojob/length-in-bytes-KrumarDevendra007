const byteSize = (str) => {
  // write your code here
	const bolb = new Bolb([str]);
	return bolb.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
