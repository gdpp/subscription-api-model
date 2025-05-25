import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res) => res.send({title: 'Get All Users'}))
userRouter.get('/:id', (req, res) => res.send({title: 'Get user by Id'}))
userRouter.post('/', (req, res) => res.send({title: 'Create new user'}))
userRouter.put('/:id', (req, res) => res.send({title: 'Update user by Id'}))
userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user bi Id'}))

export default userRouter