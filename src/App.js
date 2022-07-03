import './App.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from './services/api'

function App() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!email || !subject || !message) {
      return toast.error('Preencha o e-mail, o assunto e a mensagem')
    }

    try {
      setLoading(true)
      const { data } = await api.post('/api/email', {
        email,
        subject,
        message,
      })

      setLoading(false)
      toast.success('E-mail enviado com sucesso.')

    } catch (err) {      
      setLoading(false)
      toast.error(
        err.response && err.response.data.message
        ? err.respon.data.message
        : err.message
        )
    }
  }

  return (
    <div className="App">
      <ToastContainer position="bottom-center" limit={1} />
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <h1>Enviar E-mail</h1>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" 
              spellcheck="false"
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <div>
            <label></label>
            <button type="submit" disabled={loading}>
              {
                loading ? 'Enviando...' : 'Enviar'
              }
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
