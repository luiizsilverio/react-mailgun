const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mg = require('mailgun-js');

dotenv.config();

const mailgun = () =>
    mg({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    })


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cria a rota de envio de e-mail
app.post('/api/email', (req, res) => {
    const { email, subject, message } = req.body;

    mailgun().messages().send(
        {
            from: 'Luiz Oliveira <luiiz.silverio@gmail.com>',
            to: `${email}`,
            subject: `${subject}`,
            html: `<p>${message}</p>`
        },
        (error, body) => {
            if (error) {
                console.warn(error);
                res.status(500).send({ message: 'Erro no envio de e-mail.' });
            } else {
                console.log(body);
                res.send({ message: 'E-mail enviado com sucesso.' });
            }
        }
    );
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Serviço de envio de e-mail rodando na porta ${port}...`);
})
