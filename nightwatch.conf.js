module.exports = {
  "src_folders" : ["tests"],

  page_objects_path: [
      'pages'],



  "test_settings" : {


    "default" : {
      "webdriver" : {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver",
        "port": 9515
      },
      "selenium_port": 4444,
      "launch_url": "https://www.plushcare.com/",
      "selenium_host": "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }

    }
  }
}