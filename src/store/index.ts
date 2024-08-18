// index.ts
import Vuex from 'vuex';
import weather from './modules/weather';

export default new Vuex.Store({
  modules: {
    weather,
  },
});