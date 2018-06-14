import request from '../../utils/request';

//获取话题列表或者详情
export function fetch(params) {
	return request(`/api/topic`, {
		method: 'POST',
		body:  JSON.stringify(params),
	});
}

//获取话题详情
export function show(id) {
	return request(`/api/topic/${id}`, {
		method:'GET',
	});
}

//移除话题
export function remove(id) {
	return request(`/api/topic/${id}`, {
		method:'DELETE',
	});
}

//创建话题
export function create(values) {
	return request(`/api/topic/create`, {
		method:"POST",
		body: JSON.stringify(values),
	});
}

//更新话题
export function patch(id, values) {
	return request(`/api/topic/${id}`, {
		method:"PATCH",
		body: JSON.stringify(values),
	});
}