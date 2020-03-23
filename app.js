const fs = require('fs');
const childProcess = require('child_process');
const arguments = process.argv.splice(2);

const filename = arguments[1];
const tail = arguments[0];

printTailFileTail(tail, filename);
fs.watchFile(filename, (curr, prev) => {
	try {
		console.log('-------------------');
		console.log('CURR: ', curr.size);
		console.log('PREV: ', prev.size);
		printTailFileTail(tail, filename);
		console.log('-------------------');
	} catch (error) {
		console.log('ERRROR: ', error);
	}
});

function printTailFileTail(n, name) {
	try {
		childProcess.exec(`tail -n ${n} ${name}`, function(err, data) {
			if (err) throw err;
			console.log(data);
		});
	} catch (error) {
		throw error;
	}
}
