const { multipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject } = require('../util/mongoose');
const Movie = require('../models/movies');
class Movies{
    async index(req, res, next) {
        try {
            const data = await Movie.find({});
            res.json(data);
        } catch (err) {
            next(err);
        }
    }
    add(req, res,next) {
        
    }   
    update(req, res,next) {
        res.send('Update Movie');
    }

    
}

module.exports = new Movies();
