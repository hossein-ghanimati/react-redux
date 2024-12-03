import { Middleware } from 'redux'

const logger: Middleware = store => next => action => {
  next(action);
}

export default logger;
