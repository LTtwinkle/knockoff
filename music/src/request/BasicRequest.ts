import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

// 声明模块
declare module 'axios' {
  interface AxiosStatic {
    appPost: (url:string, data?: any, config?: AxiosRequestConfig) => AxiosPromise<any>;
  }
}

// 适配服务器基础路由
let ServiveUrl;
if(process.env.APP_SERVICE_URL) {
  ServiveUrl = `${process.env.APP_SERVICE_URL}`;
} else {
  ServiveUrl = `${window.location.host}`
}
ServiveUrl = ServiveUrl.startsWith('http') ? ServiveUrl : `${window.location.protocol}//${ServiveUrl}`;

// 适配不同的生产环境
if(process.env.NODE_ENV == 'production') {
  if(process.env.APP_SERVICE_URL) {
    axios.defaults.baseURL = `${ServiveUrl}`;
  } else {
    axios.defaults.baseURL = '/';
  }
} else {
  axios.defaults.baseURL = `${ServiveUrl}`;
}

// 定义 axios 的 post 方法
axios.appPost = (url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<any> => {
  const resToken = '';
  return axios({
    url: `${url}`,
    method: 'post',
    data,
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// 集中处理 axios 的返回数据
axios.interceptors.response.use((response: AxiosResponse) => {
  if(response.data?.code == 'UNEXCEPT') {
    console.log('err');
  }
  return response;
})

export default axios;