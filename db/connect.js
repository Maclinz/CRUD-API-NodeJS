const mongoose = require('mongoose');


const connectDb = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: false
    })
}

module.exports = connectDb;