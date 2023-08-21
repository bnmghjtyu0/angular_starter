import { Environment } from '@models/environment.model';
import { versions } from './versions';

const version = `v${versions.version}_${versions.revision}`;

export const environment: Environment = {
  version,
  environment: 'dev',
  production: false,
  dev_server: 'https://10.20.30.120',
  mock_server: 'http://localhost:3000',
};
