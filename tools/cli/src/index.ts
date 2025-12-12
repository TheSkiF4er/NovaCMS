import 'dotenv/config';
import { Command } from 'commander';

const program = new Command();

program
  .name('novacms')
  .description('NovaCMS CLI')
  .version('1.0.0');

program
  .command('doctor')
  .description('Validate local environment configuration')
  .action(() => {
    const required = ['DATABASE_URL', 'REDIS_URL', 'S3_ENDPOINT'];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      console.error('Missing environment variables:', missing.join(', '));
      process.exit(1);
    }
    console.log('OK. Environment looks sane.');
  });

program.parse(process.argv);
