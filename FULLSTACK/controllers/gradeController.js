exports.getData = (req, res) => {
    //get data from database
    const data = {
        subject: 'IFT 458',
        grade: 'A',
        date: '01/01/1993'
    }
    res.send(`Hello World! From Student GET ${JSON.stringify(data)}`)
};
exports.postData = (req, res) => res.send('Hello World! From Student POST');
exports.updateData = (req, res) => res.send('Hello World! From Student PUT');
exports.deleteData = (req, res) => res.send('Hello World! From Student DELETE');