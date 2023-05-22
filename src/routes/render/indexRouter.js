import { Router } from 'express';
import session from 'express-session';
import { Favorite, Book, User } from '../../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const allBooks = await Book.findAll();
  const initState = { allBooks };
  res.render('Layout', initState);
});

router.get('/reg', (req, res) => {
  res.render('Layout');
});

router.get('/auth', (req, res) => {
  res.render('Layout');
});

router.get('/addBook', (req, res) => {
  res.render('Layout');
});

router.get('/addFavorite', (req, res) => {
  res.render('Layout');
});

router.get('/favorites', async (req, res) => {
  const favorites = await Favorite.findAll({
    where: { user_id: req.session.user.id },
    include: [Book, User],
  });
  const initState = { favorites };
  res.render('Layout', initState);
});

export default router;
