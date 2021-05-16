const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect('mongodb://localhost:27017/DB_name',options).then(()=>{
    console.log('DB Ready To use');
},(err)=>{
    console.log(err);
})