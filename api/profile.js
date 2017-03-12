
const axios = require('axios');

var instance = axios.create({
  baseURL: 'https://profile-web-experience-api.cloud.seek.com.au'
});
instance.defaults.headers.common['Authorization'] = 'SWS wFoyR4KypKMlsOgz849a1QHWnEY4tuYQM6zdHI%2FInwPsDnLvgjb4GqGixaiif9FkiHkj%2BUp2zX%2BzdwyN5E25V%2FRMA%2BPIL787627hYuVU6QGSAZwB6jc7KqFTXiZ6DHQV587%2BZJON08negHUVxUTn6%2FukvOt%2BvlImOBSDu5pjJVzhwN%2Bx7FQcaSszvPTHLJedY7vwaJuycu7sXucwXUvmXbrJv9dqRM4IePLeQUF%2FIp2owmpLqCPG1O5MKUaFVWbqY21BkKhZuzKQOrA1Un6Qf54vCF1hkX1bw8bPD7obwHLuzqXse88r5WffuFuI03QlfH87uM0M6GmW4jD2RtDnsqphliTJmdyFIBjzgAHCZ0BJgIBaLGcnMjmVCBpzPBVMJvk9zFilAQA1LLVB6TzJMQ%3D%3D';

module.exports = {
  get: instance.get('/').then(response => response.data)
}
