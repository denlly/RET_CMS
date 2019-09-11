import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const { ctx, service } = this;
        ctx.body = await service.test.sayHi('egg');
    }
}
