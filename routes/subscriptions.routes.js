import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => res.send({title: "Get all subscriptions"}));
subscriptionRouter.get('/:id', (req, res) => res.send({title: "Get subscription by Id"}));
subscriptionRouter.post('/', (req, res) => res.send({title: "Create subscription"}));
subscriptionRouter.put('/', (req, res) => res.send({title: "Update subscription by Id"}));
subscriptionRouter.delete('/', (req, res) => res.send({title: "Delete subscription by Id"}));
subscriptionRouter.get('/user/:id', (req, res) => res.send({title: "Get all subscriptions by user"}));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: "Cancel subscription"}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: "Get upcoming renewals"}));

export default subscriptionRouter;