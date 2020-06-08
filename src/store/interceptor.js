import axios from 'axios';
export default function execute() {
    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token) {
            config.headers.Authorization = "Bearer " +localStorage.getItem('token');
        }
        // console.log(config);
        return config;
    }, function(err) {
        return Promise.reject(err)
    });
}