import movieModel from "../models/movieModel.mjs";
const addMovie = async (req, res) => {
    try {
        let data = req.body;
        let movie = await movieModel.create(data);
        return res.status(201).send({ message: 'ok', data: movie })
    } catch (error) {
        if (error.message.includes('validation')) {
            return res.status(400).send({ message: "failed", error: error.message })
        } else if (error.message.includes('duplicate')) {
            return res.status(400).send({ message: "failed", error: error.message })
        } else {
            return res.status(500).send({ message: "failed", error: error.message })
        }
    }
}
const allMovies = async (req, res) => {
    try {
        let { minRating, maxRating, title } = req.query;
        let query = { isDeleted: false };
        if (minRating !== undefined || maxRating !== undefined) {
            query.rating = {};
            if (minRating !== undefined) {
                minRating = Number(minRating)
                query.rating.$gte = minRating;
            }
            if (maxRating !== undefined) {
                maxRating = Number(maxRating);
                query.rating.$lte = maxRating;
            }
        }
        if (title !== undefined) {
            query.title = title;
        }
        let movies = await movieModel.find(query);
        return res.status(200).send({ message: 'ok', total: movies.length, data: movies })
    } catch (error) {
        return res.status(500).send({ message: "failed", error: error.message })
    }
}
const findMovie = async (req, res) => {
    try {
        let { id } = req.params;
        let movie = await movieModel.findById(id);
        return res.status(200).send({ message: 'ok', data: movie })
    } catch (error) {
        return res.status(500).send({ message: "failed", error: error.message })
    }
}
export { allMovies, addMovie, findMovie }