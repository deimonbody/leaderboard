import axios, { CreateAxiosDefaults } from 'axios';
import { BASE_URL, GET_USERS_API_PATH, POST_USER_API_PATH } from '../common/urls';

const axiosConfig = {
  baseURL: BASE_URL,
} as CreateAxiosDefaults<any>;

const instance = axios.create(axiosConfig);

instance.interceptors.response.use((res) => res, async (err) => {
  const { method } = err.config;
  const { status } = err.response;
  if (status === 500) {
    if (method === 'get') {
      const result = await instance.get(GET_USERS_API_PATH);
      return result;
    }
    if (method === 'post') {
      const responseData = JSON.parse(err.response.config.data);
      const result = await instance.post(POST_USER_API_PATH, {
        'username': responseData.username,
      });
      return result;
    }
  }
});

export default instance;
