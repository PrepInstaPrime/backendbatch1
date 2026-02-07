import express from 'express'
import { addMovie, allMovies, findMovie } from './controllers/movieController.mjs';
import { addCast, allCasts, findCast } from './controllers/castController.mjs';
const router= express.Router();
router.get('/api',(req,res)=>{
    return res.status(200).send({message:"ok"})
})
router.get('/movies',allMovies);
router.get('movies/:id',findMovie);
router.get('/casts',allCasts);
router.get('/casts/:id',findCast);
router.post('/addmovie',addMovie);
router.post('/addcast',addCast);
export default router;