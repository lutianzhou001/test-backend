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
  async sendUOP(dto: string) {
    // begin to get the uop via sdk
    // now we create an instance which contains: a rpcProvider(publicClient), a signer(in this case, it is a walletClientSigner), the name and version of the smart account, and the index of it)
    const okxSmartContractAccountSDK = new OKXSmartAccountSDK({
      bundlerClientUrl: 'https://beta.okex.org',
      paymasterClientUrl: 'https://beta.okex.org',
      mainnetClientUrl:
        'https://eth-mainnet.g.alchemy.com/v2/DB0JapVSxzovPY3RaQSydinyWXPlpzi-',
      rpcUrl:
        'https://arb-mainnet.g.alchemy.com/v2/47SxM1HQgXWeKVL9rYVS6A4LZ8B_Ktk0',
    });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
