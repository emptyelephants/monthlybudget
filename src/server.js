// eslint-disable-next-line import/no-extraneous-dependencies
import { Server, Model } from 'miragejs';
// fake server mockup using miragejs

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },
    seeds(mock) {
      mock.create('user', {
        name: 'Miguel',
        budgetLog: [{
          entryTitle: 'Payroll',
          cost: 1000,
          doesReoccur: false,
          budgetDate: 1578556800000,
        },
        {
          entryTitle: 'Burger',
          cost: -10,
          doesReoccur: false,
          budgetDate: 1580284800000,
        },
        {
          entryTitle: 'Gas',
          cost: -20,
          doesReoccur: false,
          budgetDate: 1580803200000,
        },
        {
          entryTitle: 'Jimmy Owed',
          cost: 200,
          doesReoccur: false,
          budgetDate: 1582444800000,
        },
        {
          entryTitle: 'Feb Burger',
          cost: -240,
          doesReoccur: false,
          budgetDate: 1582444800000,
        }],
      });
    },
    routes() {
      this.namespace = 'api';
      this.get('/users', (schema) => schema.users.all());
    },
  });

  return server;
}
