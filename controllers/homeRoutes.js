const router = require('express').Router();
const sequilize = require('sequilize');
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: [
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username', 'github']
        }
      },
      {
        model: User,
        attributes: ['username', 'github']
      }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});
router.get('/post/:id', async (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username', 'github']
        }
      },
      {
        model: User,
        attributes: ['username', 'github']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'Not able to find post with this id.' });
      return;
    }
    const post = dbPostData.get({ plain: true });
    res.render('single-post', {
      post,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
