const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(global.AppConfig.database, {useNewUrlParser: true,useUnifiedTopology: true }, () => {
    console.log(`DB connected!!`)
}, () => {
    console.log(`Unable to connect DB`)
});