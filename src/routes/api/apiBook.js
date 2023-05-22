import { Router } from 'express';
import { User, Book, Favorite } from '../../../db/models';
import { Favorites } from '../../components/Favorites';

const router = Router();

router.post('/createBook', async (req, res) => {
  const {
    title, author, photo, rating, user_id, about,
  } = req.body;
  const result = await Book.create({
    title, author, photo, rating, user_id, about,
  });
  res.json(result);
});

router.post('/addFavorite', async (req, res) => {
  const { book_id, user_id } = req.body;
  const oneFav = await Favorite.findOne({ where: { user_id: req.session.user.id, book_id } });
  if (oneFav !== null) {
    await Favorite.destroy({ where: { user_id: req.session.user.id, book_id } });
  } else {
    await Favorite.create({ book_id, user_id });
  }
  res.sendStatus(200);
});

export default router;
