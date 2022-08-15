const router = require('express').Router();
const { Category, Product } = require('../../models');

// FIND ALL CATEGORIES AND RELEVANT PRODUCTS
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      { model: Product }
    ]
     }).then((categories) => {
      res.json(categories)
     })
     .catch(err => {
      res.status(500).json({error: 'There was an error, try again later.'})
     })
});


// FIND A CATEGORY AND ITS PRODUCTS BY ID 
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [
      { model: Product }
    ]
  }).then(category => res.json(category))
  .catch(err => {
    res.status(500).json({error: 'There was an error, try again later.'})
   })
});

// CREATE NEW CATEGORY
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then(category => {
    res.json(category)
  })
  .catch(err => {
    res.status(500).json({error: 'There was an error, try again later.'})
   })
});

// UPDATE CATEGORY BY ID
router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name
  }, { where: { id: req.params.id }}).then(category => {
    res.json('UPDATED!')
  })
  .catch(err => {
    res.status(500).json({error: 'There was an error, try again later.'})
   })
});


// DELETE CATEGROY BY ID
router.delete('/:id', (req, res) => {
Category.destroy({
    where: { id: req.params.id }
  }).then(deleted => {
    res.json('DELETED!')
  })
});

module.exports = router;
