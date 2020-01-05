import { User } from './models/User';

const user = new User({ name: 'Adam', age: 23 });

user.events.on('change', () => {
  console.log('change');
});

user.events.trigger('change');
