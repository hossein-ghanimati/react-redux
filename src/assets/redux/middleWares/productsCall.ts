import sendApiReq from '@/assets/services/axios/configs/apiReq';
import { StartGetProductsType } from '@/assets/types/redux/productCall.type';
import { Middleware } from 'redux'
import { errorCreator, getProductsCreator } from '../todo/todoActionsCreator';

const productCall: Middleware = store => next => async (action: any | StartGetProductsType) => {
  if (action.type !== "START_GET_PRODUCTS") {
    return next(action);
  }

  try {
    const response = await sendApiReq()(action.url)
    store.dispatch(getProductsCreator(response.data))
  } catch (error) {
    const errorMessage = (error as Error).message
    store.dispatch(errorCreator([errorMessage]))    
  }

  next(action)
  
}

export default productCall;
