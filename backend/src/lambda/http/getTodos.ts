import 'source-map-support/register';

const express = require('express');
const serverlessExpress = require('@vendia/serverless-express');
const { getCurrentInvoke } = require('@vendia/serverless-express');
const app = express();

import { createLogger } from '../../utils/logger';
import { getTodosForUser } from '../../businessLogic/todos';
import { getUserId } from '../utils';

const logger = createLogger('getTodos');

app.get('/todos', async (req, res) => {
  const { event, context } = getCurrentInvoke();

  logger.info(`GetTodos info about event ==> ${JSON.stringify(event)}`);
  logger.info(`GetTodos info about context ==> ${JSON.stringify(context)}`);

  const userId = getUserId(event);
  const todos = await getTodosForUser(userId);

  res.json({
    todos: todos,
  });

});

exports.handler = serverlessExpress({ app });