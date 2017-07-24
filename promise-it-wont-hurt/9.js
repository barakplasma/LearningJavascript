const attachTitle = (arg) => `DR. ${arg}`;
const mnhttn = Promise.resolve('MANHATTAN');
mnhttn.then(attachTitle).then(console.log);