import { Test, TestingModule } from '@nestjs/testing';
import { CommandExecutor } from './command-executor';

describe('CommandExecutor', () => {
  let provider: CommandExecutor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandExecutor],
    }).compile();

    provider = module.get<CommandExecutor>(CommandExecutor);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
