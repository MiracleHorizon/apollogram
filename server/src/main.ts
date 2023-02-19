import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  const port = process.env.PORT ?? 6000

  app.use(cookieParser())
  app.enableCors({
    credentials: true,
    origin: process.env.CLIENT_API,
    exposedHeaders: ['Access-Control-Allow-Origin']
  })

  await app.listen(port)
}

bootstrap().then(() => {
  console.log('Server OK')
})
