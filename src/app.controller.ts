import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  convertToHex,
  OKXSmartAccountSDK,
  remoteSigner,
} from 'account-abstraction-wallet-sdk';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
