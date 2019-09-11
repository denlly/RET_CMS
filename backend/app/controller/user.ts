import { Controller } from 'egg';

export default class UserController extends Controller {
    public async getCurrentUser() {
        const { ctx, service } = this;
        ctx.body = await service.user.getCurrentUser();
    }
}
