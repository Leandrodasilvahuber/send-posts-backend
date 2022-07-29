import { Router } from 'express'
import JWTProvider from './providers/implementations/JWTProvider'
import createUser from './use-cases/user-create/index'
import login from './use-cases/user-login/index'
import createPost from './use-cases/post-create/index'
import deletePost from './use-cases/post-delete/index'
import listPost from './use-cases/post-list/index'

const jwtProvider = new JWTProvider()

const router = Router()

router.get('/', (request, response) => {
  response.send(
    '<div style="color:grey;text-align:center;"><h2>Exemple Node API</h2></div>')
})

router.get('/posts', jwtProvider.verifyJWT, (request, response, next) => {
  return listPost.handle(request, response, next)
})

router.delete('/post', jwtProvider.verifyJWT, (request, response, next) => {
  return deletePost.handle(request, response, next)
})

router.post('/post', jwtProvider.verifyJWT, (request, response, next) => {
  return createPost.handle(request, response, next)
})

router.post('/login', (request, response, next) => {
  return login.handle(request, response, next)
})

router.post('/users', (request, response, next) => {
  return createUser.handle(request, response, next)
})

router.use(function (error, request, response, next) {
  return response.status(400).send({
    message: error.message || 'Unexpected error.'
  })
})

export { router }
