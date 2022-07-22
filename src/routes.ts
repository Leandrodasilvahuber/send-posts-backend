import { Router } from 'express'
import JWTProvider from './providers/implementations/JWTProvider'
import createUserController from './use-cases/create-user/index'
import loginController from './use-cases/login/index'
// import { createPostController } from './useCases/createPost/index'

const jwtProvider = new JWTProvider()

const router = Router()

router.get('/', (request, response) => {
  response.send('<h1>Aluminium API started</h1>')
})

router.post('/posts', jwtProvider.verifyJWT, (request, response, next) => {
  response.send('<h1>Aluminium API started</h1>')
})

router.get('/posts', jwtProvider.verifyJWT, (request, response, next) => {
  response.send('<h1>Not Implemeted</h1>')
})

router.post('/login', (request, response, next) => {
  return loginController.handle(request, response, next)
})

router.post('/users', (request, response, next) => {
  return createUserController.handle(request, response, next)
})

router.use(function (error, request, response, next) {
  return response.status(400).send({
    message: error.message || 'Unexpected error.'
  })
})

export { router }
