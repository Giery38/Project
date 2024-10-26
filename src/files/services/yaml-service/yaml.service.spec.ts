import { Test, TestingModule } from '@nestjs/testing';
import { YamlServiceService } from './yaml.service';

describe('YamlServiceService', () => {
  let service: YamlServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YamlServiceService],
    }).compile();

    service = module.get<YamlServiceService>(YamlServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
