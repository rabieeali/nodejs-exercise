const fs = require('fs')

// if the directory exists don't create it!


if (!fs.existsSync('./new')) {

    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('directory created!')
    })
}

// if it exists remove it!
if (fs.existsSync('./new')) {

    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('directory removed!')
    })
}

