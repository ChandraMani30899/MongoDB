var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27018/taskManager', 
{ useNewUrlParser: true, useUnifiedTopology: true },
function(err){
      if(!err){
          console.log('DB connected!')
      }
});


var TaskSchema =new  mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String},
    Completed:{type:Boolean,default:false}
},{
    timestamps:true
})


var Task = mongoose.model('Task',TaskSchema);


Task.findOne().then(function(data){

     console.log(data);
})