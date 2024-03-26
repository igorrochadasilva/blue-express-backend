import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

export const mailerConfig = {
  transport: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'westley.kemmer66@ethereal.email',
      pass: 'MkPT9GzxRuypkrbRDc',
    },
  },
  defaults: {
    from: '"igor" <westley.kemmer66@ethereal.email>',
  },
  template: {
    dir: __dirname + '/templates',
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
