import { Test, TestingModule } from '@nestjs/testing';
import { CtrlsController } from './users.controller';

describe('CtrlsController', () => {
  let controller: CtrlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtrlsController],
    }).compile();

    controller = module.get<CtrlsController>(CtrlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
