import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";


@Controller('auth')
export class AuthGatewayController {
    constructor(@Inject('AUTH_SERVICE') private readonly client: ClientKafka) { }

    @Post('login')
    async login(@Body() credentials: any) {
        return this.client.send('auth.login', credentials)
    }

    @Post('register')
    async register(@Body() userData: any) {
        return this.client.send('auth.register', userData);
    }
}