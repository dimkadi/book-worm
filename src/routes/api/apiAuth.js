/* eslint-disable max-len */
import express from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../../../db/models';

const router = express.Router();

router.post('/reg', async (req, res) => {
  const {
    username, phone, email, password,
  } = req.body;

  if (!email || !password || !username || !phone) return res.json({ status: 400, message: 'email, phone or password not valid' });
  const hashPassword = await hash(password, 5);

  try {
    const newUser = await User.create({
      username, phone, email, password: hashPassword,
    });
    req.session.user = {
      id: newUser.id, username: newUser.username, phone: newUser.phone, email: newUser.email,
    };
    return res.status(200).json({
      id: newUser.id, username: newUser.username, phone: newUser.phone, email: newUser.email,
    });
  } catch (err) {
    return console.error(err);
  }
});

router.post('/auth', async (req, res) => {
  const { phone, email, password } = req.body;

  if (!phone || !email || !password) return res.status(400).json({ message: 'email, phone or password not valid' });
  try {
    const userFromDb = await User.findOne({ where: { email } });
    if (!userFromDb) return res.status(400).json({ message: 'email not found' });
    const isValid = await compare(password, userFromDb.password);

    if (!isValid) return res.status(400).json({ message: 'email or password is invalid' });

    req.session.user = {
      id: userFromDb.id, username: userFromDb.username, phone: userFromDb.phone, email: userFromDb.email,
    };
    return res.status(200).json({
      id: userFromDb.id, username: userFromDb.username, phone: userFromDb.phone, email: userFromDb.email,
    });
  } catch (err) {
    return console.error(err);
  }
});

router.get('/auth/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default router;
