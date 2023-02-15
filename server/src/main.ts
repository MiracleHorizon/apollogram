import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT ?? 6000
  const app = await NestFactory.create(AppModule)

  await app.listen(port)
}

bootstrap().then(() => {
  console.log('Server OK')
})
