import * as categoryService from '../../services/topic/category';
export default {

  namespace: 'category',

  state: {
    list:[],
    total:null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/topic/category') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const { data } = yield call(categoryService.fetch, { page });
      yield put({ type: 'save', payload: { list:data.list, total:data.total }});
    },
  },

  reducers: {
    save(state, { payload: { list, total } }) {
      return { ...state, list, total };
    },
  },
};
