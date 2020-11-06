import { request, useRequest } from 'umi';
import { Modal, message } from 'antd';

export default () => {
  const model = useRequest('/api/users', {
    manual: true,
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
    Modal.confirm({
      title: '删除项目',
      content: `确定删除 ${id}？`,
      async onOk() {
        await request(`/api/users/${id}`, {
          method: 'DELETE'
        });
        model.refresh();
        message.success('删除成功');
      },
    });
  };

  return { ...model, create, update, remove };
}
