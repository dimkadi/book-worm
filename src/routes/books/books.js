import express from 'express';
import {
  Book, Comment, User, Favorite,
} from '../../../db/models';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const oneBook = await Book.findOne({
    where: {
      id: req.params.id,
    },
  });
  const allComments = await Comment.findAll({
    where: {
      book_id: req.params.id,
    },
    include: User,
  });
  let favoriteOneBook = await Favorite.findOne({
    where: {
      book_id: req.params.id,
    },
  });
  if (favoriteOneBook !== null) {
    favoriteOneBook = true;
  } else {
    favoriteOneBook = false;
  }
  const initState = { oneBook, allComments, favoriteOneBook };
  res.render('Layout', initState);
});

router.post('/:id/newcomment', async (req, res) => {
  await Comment.create(req.body);
  const allComments = await Comment.findAll({
    where: {
      book_id: req.params.id,
    },
    include: User,
  });
  res.json(allComments);
});

export default router;
