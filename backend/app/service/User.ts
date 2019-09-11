import { Service } from 'egg';

export default class UserService extends Service {
    public async getCurrentUser() {
        return Promise.resolve({ email: 'fan91163@gmail.com', id: 1 });
    }
}
