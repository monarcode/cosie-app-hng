import { apiClient } from './api-client';

import { GetSingeProductResponse } from '~/types/product';
import { GetProductsResponse } from '~/types/products';

const APPID = process.env.EXPO_PUBLIC_APP_ID;
const ORGID = process.env.EXPO_PUBLIC_ORG_ID;
const APIKEY = process.env.EXPO_PUBLIC_API_KEYP;

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
