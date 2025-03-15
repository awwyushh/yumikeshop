import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { MessagePattern } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';


@Controller()
export class AuthServiceController {

  private users: { email: string; password: string }[] = [];

  @MessagePattern('auth.register')
  async register(data: { email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    this.users.push({ email: data.email, password: hashedPassword });

    return { message: 'User registered successfully' };
  }

  @MessagePattern('auth.login')
  async login(data: { email: string; password: string }) {
    const user = this.users.find(u => u.email === data.email);
    if (!user) return { message: 'User not found' };

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) return { message: 'Invalid credentials' };

    return { message: 'Login successful' };
  }

}
