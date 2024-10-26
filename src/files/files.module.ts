import { Module } from '@nestjs/common';
import { YamlServiceService } from './services/yaml-service/yaml.service';

@Module({
  providers: [YamlServiceService],
  exports: [YamlServiceService]
})
export class FilesModule {}
