/**
 * @name POST
 * @author Moaaz Ahmed
 * @summary This file will be containing all the handle methods for posting data using post method.
 * @description As you can see in the file we are using axios for posting data.
 * @access private
 *
 * @function useFetchApiPost This is the main function for for re-use outside of the file to send or post some data.
 * @readonly Please don't make any changes to this file.
 */

import http from '@services/http-service';
import { PostApiResponse } from '@apis/types';
import { AxiosRequestConfig } from 'axios';

export async function useFetchApiPost(url: string, config: AxiosRequestConfig): Promise<PostApiResponse> {
  const response = { data: undefined, error: undefined };

  try {
    const { data } = await http.post(url, config?.data, config);
    response.data = data;
  } catch (err) {
    response.error = err;
  }

  return response;
}
