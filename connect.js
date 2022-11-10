const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

module.exports = {
    selectedDb: {},
    async connect(){
        try {
            const client = await MongoClient.connect("mongodb+srv://guviuser:guviusername@cluster0.gpzojhx.mongodb.net/?retryWrites=true&w=majority");
            this.selectedDb = client.db('guvi');
        } catch(err) {
            console.error(err);
        }
    },
    async connectMongoose(){
        try {
            await mongoose.connect("mongodb+srv://guviuser:guviusername@cluster0.gpzojhx.mongodb.net/?retryWrites=true&w=majority")
            console.log('connection success');
        } catch(err) {
            console.error(err);
        }
    }
}
