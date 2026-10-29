import express from 'express'

const app = express()
const PORTA = 3000

app.get('/cardioia', (_req, res) => {
   res.status(200).json({
      ok: true,
      servico: 'cardioia-api',
      agora: new Date().toISOString(),
   })
})

app.listen(PORTA, () => {
   console.log(`API do CardioIA em http://localhost:${PORTA}`)
})