export default {
  //"publicPath": "/static/",
  "proxy": {
    "/api": {
      "target": "http://api.www.makcent.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },

}