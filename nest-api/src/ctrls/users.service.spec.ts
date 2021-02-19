import { Test, TestingModule } from '@nestjs/testing';
import { CtrlsService } from './users.service';

describe('CtrlsService', () => {
  let provider: CtrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtrlsService],
    }).compile();

    provider = module.get<CtrlsService>(CtrlsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
