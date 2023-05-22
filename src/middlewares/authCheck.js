export default function authCheck(req, res, next) {
  if (req.session?.user) {
    next();
  } else {
    res.status(401).json({ message: 'Пользователь не авторизирован' });
  }
}
