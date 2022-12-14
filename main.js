const fs = require('fs');
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        let avg = 0;
        const obj = JSON.parse(data);
        obj.map((user) => {
            avg = avg + user.age
        })
        const result = avg / obj.length
        const resaultObj = {
            "avgage": result
        }
        const content = JSON.stringify(resaultObj)
        fs.appendFile('result.json', content, err => {
            if (err) {
                console.error(err);
            }
        });
    } else {
        console.error(err);
    }
});
