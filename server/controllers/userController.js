// const getUser = (req, res, next) => {
//   if (!req.user) {
//     res.status(401).json({ message: 'Not Logged In' })
//   } else {
//     res.status(200).json(req.user);
//   }
// };

// const logout = (req, res) => {
//   req.session.destroy( () => {
//     res.redirect('http://localhost:3000/#/login');
//   });
// }

// module.exports = {
//   getUser,
//   logout
// };