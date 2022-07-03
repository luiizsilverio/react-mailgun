# REACT-MAILGUN

## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto
Aplicação de envio de e-mail utilizando o serviço gratuito [MAILGUN](https://www.mailgun.com).<br />
Possui um back-end desenvolvido em __Node.js__, com uma única rota POST /api/email, que faz o envio de e-mail por meio da biblioteca __Mailgun-js__.<br />
Também possui uma aplicação front-end em React, com um formulário de e-mail simples e acesso à API por meio da biblioteca __Axios__.<br />
Desenvolvido durante a Live [Send Email Tutorial 2022 [React & Node & Mailgun](https://www.youtube.com/watch?v=xYuW_XDvYyQ), do professor Basir.<br />

## :hammer_and_wrench: Tecnologias
* __Back-end__
  * __Node.js__
  * __Cors__
  * __Mailgun-js__
  * __Dotenv__
* __Front-end__
  * __React__
  * __Axios__
  * __React-Toastify__

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/react-mailgun/blob/main/public/tela.png)


## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/luiizsilverio/react-mailgun
```

### __Back-end__
Na pasta backend, renomeie o arquivo _.env-example_ para _.env._<br/>
Informe o Domain e a API Key do Mailgun no _.env_<br/>
```bash
# Instale as dependências
$ npm install

# Para iniciar a aplicação na porta 4000
$ npm start
```
### __Front-end__
```bash
# Instale as dependências
$ npm install

# Para iniciar a aplicação na porta 3000
$ npm start
```


## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)

