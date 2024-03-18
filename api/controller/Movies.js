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
    async getMovies(req, res, next) {
        try{
            const data = await Movie.find({});
            res.status(200).json(data);
        }
        catch(err){
            next(err);
        }
    }
    async getOneFilm(req, res, next) {
        try {
          const movie = await Movie.findOne({ slug: req.params.slug });
          if (!movie) {
            return res.status(404).json({ message: "Phim không có" });
          } else {
            res.status(200).json(movie);
          }
        } catch (error) {
          next(error);
        }
      }
   

    
}

module.exports = new Movies();
