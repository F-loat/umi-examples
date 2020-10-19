import { Random } from 'mockjs';

const users = [Random.name()];

export default {
  'GET /api/users': { users },
  'POST /api/users': (req: any, res: any) => {
    users.push(Random.name());
    res.end('ok');
  },
  'PATCH /api/users/:id': (req: any, res: any) => {
    const { id } = req.params;
    const index = users.findIndex(i => i === id);
    users[index] = req.body.value;
    res.end('ok');
  },
  'DELETE /api/users/:id': (req: any, res: any) => {
    const { id } = req.params;
    const index = users.findIndex(i => i === id);
    users.splice(index, 1);
    res.end('ok');
  },
}
