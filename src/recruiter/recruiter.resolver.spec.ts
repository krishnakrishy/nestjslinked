import { Test, TestingModule } from '@nestjs/testing';
import { RecruiterResolver } from './recruiter.resolver';
import { RecruiterService } from './recruiter.service';

describe('RecruiterResolver', () => {
  let resolver: RecruiterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecruiterResolver, RecruiterService],
    }).compile();

    resolver = module.get<RecruiterResolver>(RecruiterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
