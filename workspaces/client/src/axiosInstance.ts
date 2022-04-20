import axios from 'axios';
import { baseURL } from './app.constants';

axios.defaults.withCredentials = true
export default axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});