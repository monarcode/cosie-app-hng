import { apiClient } from './api-client';

import { GetSingeProductResponse } from '~/types/product';
import { GetProductsResponse } from '~/types/products';

const APPID = '1O0UUZ2PD9ELHIL';
const ORGID = '6e2e03e8ec274b8cb5005db00c42c93b';
const APIKEY = '8a56e116da4a4b89aeb7dfae1f87e11220240709112635930004';

const queryString = `Appid=${APPID}&organization_id=${ORGID}&Apikey=${APIKEY}`;

const getProducts = async () => {
  try {
    const req = await apiClient
      .get(`products?page=1&size=10&${queryString}`)
      .json<GetProductsResponse>();
    return req;
  } catch (error) {
    console.log(error);
  }
};

const getProductDetails = async (id: string | string[] | undefined) => {
  try {
    const req = await apiClient
      .get(`products/${id}?${queryString}`)
      .json<GetSingeProductResponse>();
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const PRODUCTS_SERVICE = { getProducts, getProductDetails };
