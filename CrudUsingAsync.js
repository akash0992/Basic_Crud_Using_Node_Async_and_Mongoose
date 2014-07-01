/**
 * Created by intelligrape on 1/7/14.
 * @author: deepak vishwakarma
 * contact @ deepak.m.shrma@gmail.com
 */
var mongoose = require('mongoose');
var async = require("async");
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
    // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/test');
var movieSchema = new mongoose.Schema({
    title: { type: String }
    , rating: String
    , releaseYear: Number
    , hasCreditCookie: Boolean
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);

//create movie
var thor = new Movie({
    title: 'Thor'
    , rating: 'PG-13'
    , releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
    , hasCreditCookie: true
});

function inserData(callback){
        thor.save(function(err, thor) {
            if (err) {
                return callback(err);
                return; //It's important to return so that the task callback isn't called twice
            };
            console.log(">>>>>>Inserted successfully<<<<<<");
            callback();
        });
}
function readData(callback){
    // Find all movies.
    Movie.find(function(err, movies) {
        console.log(">>>>>>Read the data from test db<<<<<<");
        if (err) {
            callback(err);
            return; //It's important to return so that the task callback isn't called twice
        };
        console.dir(movies);
        callback();

    });


}
function updateData(callback) {

    //Update the test db
    Movie.update({title: "Thor"},{title: "Thor2"},function(err,result){
        if (err) {
            callback(err);
            return; //It's important to return so that the task callback isn't called twice
        };
        console.log(">>>>>>Updated successfully<<<<<<");
        console.dir(result);
        callback();

    }).exec();
}
function deleteData(callback) {

    Movie.find({ title: "Thor2" }).remove().exec();
    console.log(">>>>>>Deleted successfully<<<<<<");
    callback();
    return;
}
function closeDB(callback) {
    mongoose.disconnect();
    callback();
    return;
}
async.series([
    inserData,
    readData,
    updateData,
    readData,
    deleteData,
    readData,
    closeDB
], function(err) {
    if (err) {
        throw err; //Or pass it on to an outer callback, log it or whatever suits your needs
    }
    console.log('Crud has been done');
});
