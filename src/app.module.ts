import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { OsModule } from './os/os.module';

@Module({
  imports: [FilesModule, OsModule],
})
export class AppModule {}
