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
for(let i = 0; i < 100; i++){
    Movie.create({
        name: `Movie ${i}`,
        slug: `Movie ${i}`,
        original_name: `Movie ${i}`,
        thumb_url: `https://picsum.photos/200/300?random=${i}`,
        poster_url: `https://picsum.photos/200/300?random=${i}`,
        category: `Hành Động`,
        modified: Date.now()
    });
}