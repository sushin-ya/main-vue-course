import { createStore } from 'vuex';

import coachesModule from './modules/coaches.js';

const store = createStore({
  modules: {
    coaches: coachesModule
  }
});

export default store;
