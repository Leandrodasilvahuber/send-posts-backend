import { Router } from 'express'
import { JWTProvider } from './providers/implementations/JWTProvider'
import { createUserController } from './useCases/createUser/index'
import { loginController } from './useCases/login/index'
// import { createPostController } from "./useCases/createPost/index"

const jwtProvider = new JWTProvider()

const router = Router()

router.get('/', (request, response) => {
  response.send('<h1>Aluminium API started</h1>')
})

router.post('/posts', jwtProvider.verifyJWT, (request, response) => {
  response.send('<h1>Aluminium API started</h1>')
})

router.get('/posts', jwtProvider.verifyJWT, (request, response) => {
  response.send('<h1>Not Implemeted</h1>')
})

/*
router.post('/login', (request, response, next) => {
  return loginController.handle(request, response)
})

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})
*/

export { router }
