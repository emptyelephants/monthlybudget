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
        budgetExpendatures: [{
          entryTitle: 'Very Good Building LLC Payroll',
          cost: 1000,
          doesReoccur: false,
          budgetDate: 1578384000000,
        },
        {
          entryTitle: 'Burger',
          cost: -10,
          doesReoccur: false,
          budgetDate: 1578988800000,
        },
        {
          entryTitle: 'Gas',
          cost: -20,
          doesReoccur: false,
          budgetDate: 1579852800000,
        },
        {
          entryTitle: 'Feb Burger',
          cost: -20,
          doesReoccur: false,
          budgetDate: 1580889600000,
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
