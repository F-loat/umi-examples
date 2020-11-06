import React, { useEffect } from 'react';
import { useModel } from 'umi';

export default () => {
  const { loading, data, run, create, update, remove } = useModel('user.index');

  useEffect(() => {
    run();
  }, []);

  return (
    <>
      <ul style={{margin: '12px'}}>
        {data.map((i: string) => (
          <li key={i} style={{margin: '8px'}}>
            <span style={{marginRight: '12px'}}>{i}</span>
            <button onClick={() => remove(i)}>删除</button>
            <input
              placeholder="请输入"
              disabled={loading}
              style={{marginLeft: '8px'}}
              onBlur={e => update(i, e.target.value)}
            />
          </li>
        ))}
        <button onClick={create}>
          {loading ? '加载中...' : '新增'}
        </button>
      </ul>
    </>
  );
}
