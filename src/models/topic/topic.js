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
    *show({ payload: { id } }, { call, put }) {
        const { data } = yield call(topicService.show, id);
        console.info(data, 22222222222);
        yield put({
           type:'detail',
           payload: {
             detail: data
           }
        });
    }
  },

  reducers: {
    save(state, { payload: { list, total, limit } }) {
      return { ...state, list, total, limit };
    },
    detail(state, { payload: { detail }}) {
      return { ...state, detail };
    }
  },
};
