import { Environment } from '@app/models/environment.model';
import { versions } from './versions';

const version = `v${versions.version}_${versions.revision}`;

export const environment: Environment = {
  version,
  environment: 'prod',
  production: true,
  dev_server: 'dev_server',
};
