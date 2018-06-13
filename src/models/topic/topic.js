import * as topicService from '../../services/topic/topic';
export default {

  namespace: 'topic',

  state: {
    list: [],
    limit: 10,
    total: 0,
    detail:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/topic') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { params } }, { call, put }) {
      const { data } = yield call(topicService.fetch, { params });
      yield put({ 
        type: 'save', 
        payload: {  
          list:  data.list, 
          total: data.total, 
          limit: data.limit 
        }
      });
    },
  },

  reducers: {
    save(state, { payload: { list, total, limit } }) {
      return { ...state, list, total, limit };
    },
  },
};
