const re = /(\d{2})[/.-](\d{2})[/.-](\d{4})/;
const date = '22-03-2023';

const result = re.exec(date);

if(re.hasIndices) {
    console.log(`The full index range is ${result.indices[0]}`);
    console.log(`The day index range is ${result.indices[1]}`);
    console.log(`The month index range is ${result.indices[2]}`);
    console.log(`The year index range is ${result.indices[3]}`);
} else {
    console.log("Indices flag not used");
}







































