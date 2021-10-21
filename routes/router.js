const express = require('express')
const app = express.Router()
const model = require('../model/model')

app.get('/', async (req,res)=>{
    const data = await model.find()
    res.render('index', {contacts: data})
})

  app.get('/update/:id', async (req,res)=>{
      const data = await model.findById(req.params.id)
      res.render('update', {contact: data})
  })








  // data manuplation routes

app.post('/', (req,res,next)=>{
        req.contact = new model()
        next()
}, saveAndRedirect('index'))

app.put('/:id', async (req,res,next )=>{
         req.contact = await model.findById(req.params.id)
    next() 
},saveAndRedirect())

app.delete('/:id', async (req,res)=>{
    await model.findByIdAndDelete(req.params.id)
    res.redirect('/')
})




  //save and redirect



  function saveAndRedirect (path) {
    return async (req,res) =>{
        let contact = req.contact
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.contact = req.body.contact

        try {
            contact = contact.save()
            res.redirect(`/`)
        }

        catch(err){
            console.log(err)
            res.render(path)
        }
    }
  }



module.exports = app;



