import express from 'express';
import { CreateMovie } from './CreateMovie.js'
import { getmovie } from './getmovies.js';
import { getreview } from './getreviews.js';
import { CreateReview } from './CreateReview.js';
import { getmoviebyId } from './getmoviebyId.js'
import { DeleteMovie } from './deletemovie.js';
import { updateMovie } from './updateMovie.js'
const router=express.Router();

router.get('/',getmovie) //http://localhost:5555/movie
router.get('/reviews',getreview) //http://localhost:5555/movie/reviews
router.post('/create',CreateMovie) //http://localhost:5555/movie/create/
router.post('/create/review',CreateReview) //http://localhost:5555/movie/create/review
router.get('/:id',getmoviebyId) //http://localhost:5555/movie/65f15ac6b70d545e3fda9bd2
router.delete('/:id',DeleteMovie) //http://localhost:5555/movie/65f15ac6b70d545e3fda9bd2
router.put('/update/:id',updateMovie) //http://localhost:5555/movie/update/65f15ac6b70d545e3fda9bd2

export default router;