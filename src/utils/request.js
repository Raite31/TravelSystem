import axios from 'axios'
import {Message, MessageBox, Notification} from 'element-ui'
import routers from "../router/index";

// 创建axios实例
const service = axios.create({
    baseURL: 'localhost:3000'
})