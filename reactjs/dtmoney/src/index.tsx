import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário BPlus',
          type: 'deposit',
          category: 'Desenvolvimento IRIS',
          amount: 1945.00,
          createdAt: new Date('2021-11-05 09:30:00'),
        },
        {
          id: 2,
          title: 'Aluguem',
          type: 'withdraw',
          category: 'Conta fixa',
          amount: 365.00,
          createdAt: new Date('2021-11-10 09:30:00'),
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions',() => {
      return this.schema.all('transaction');
    })

    this.post('/transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

