const nodemailer = require('nodemailer')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 7700

app.use(express.json())
app.use(cors())

app.post('/form', async (req, res) => {

  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'redisk.sherstnev@mail.ru',
      pass: 'DZzPpG3DAN9GyJWvuCYc',
    },
  })

  await transporter.sendMail({
    from: '"Rediska Helper" <redisk.sherstnev@mail.ru>',
    to: 'sherstnev.denis.v@gmail.com',
    subject: 'Получена новая заявка с сайта Веб-студии',
    text: `Новое обращение от ${req.body.name} От: ${req.body.email} Текст: ${req.body.text}`,
    html: `<h1>Новое обращение от ${req.body.name} </h1> <br> <h2> От: ${req.body.email} </h2> <br> <h2> Текст: </h2> <br> <h4> ${req.body.text} </h4>`,
  })
  res.send('ok');
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})
