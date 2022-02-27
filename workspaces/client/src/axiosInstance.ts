import axios from 'axios';
import { baseURL } from './app.constants';

export default axios.create({
  baseURL: baseURL
});