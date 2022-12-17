require('source-map-support/register');
const express = require('express');
const serverlessExpress = require('@vendia/serverless-express');

// import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { createLogger } from '../../utils/logger';
// import * as middy from 'middy'
// import { cors } from 'middy/middlewares'
import { CreateTodoRequest } from '../../requests/CreateTodoRequest';
import { getUserId } from '../utils';
import { createTodo } from '../../businessLogic/todos';

const app = express();
const logger = createLogger('createTodo');


app.post('/todos', async (req, res) => {
  const { event, context } = serverlessExpress.getCurrentInvoke();

  logger.info(`CreateTodo event info => ${JSON.stringify(event)}`);
  logger.info(`CreateTodo context info => ${JSON.stringify(context)}`);

  const userId = getUserId(event);

  const newTodo: CreateTodoRequest = JSON.parse(event.body);
  const item = await createTodo(newTodo, userId);

  res.json({
    item,
  });

});

exports.handler = serverlessExpress({app});




// export const handler = middy(
//   async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     const newTodo: CreateTodoRequest = JSON.parse(event.body)
//     // TODO: Implement creating a new TODO item

//     return undefined
// )

// handler.use(
//   cors({
//     credentials: true
//   })
// )
