import request from '../../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/topic/category?page=${page}&limit=5`);
}
