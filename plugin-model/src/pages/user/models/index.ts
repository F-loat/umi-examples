import { request, useRequest } from 'umi';

export default () => {
  const model = useRequest('/api/users', {
    initialData: [],
    formatResult(res) {
      return res.users || [];
    }
  });

  const create = () => {
    return request('/api/users', {
      method: 'POST'
    }).then(model.refresh);
  };

  const update = (id: string, value: string) => {
    return request(`/api/users/${id}`, {
      method: 'PATCH',
      data: { value }
    }).then(model.refresh);
  };

  const remove = (id: string) => {
    return request(`/api/users/${id}`, {
      method: 'DELETE'
    }).then(model.refresh);
  };

  return { ...model, create, update, remove };
}
