import mongoose from "mongoose"


 const Connection = async (username,password) =>{
    const URL = `mongodb://${username}:${password}@ac-dmenxsw-shard-00-00.xvgqzhn.mongodb.net:27017,ac-dmenxsw-shard-00-01.xvgqzhn.mongodb.net:27017,ac-dmenxsw-shard-00-02.xvgqzhn.mongodb.net:27017/?ssl=true&replicaSet=atlas-w7dx9n-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
     await mongoose.connect(URL, { useNewUrlParser: true});
     console.log('database connected succesfully');
    }catch(error){
     console.log('error while connecting db', error);
    }
}

export default Connection;