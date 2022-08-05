import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [ProfileResolver, ProfileService],
  imports: [UserModule]
})
export class ProfileModule { }
