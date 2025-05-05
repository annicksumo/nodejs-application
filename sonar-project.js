const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.198.239.165:9000/',
  options: {
    'sonar.projectKey': 'NodeJsLandmarkTechnologies',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectVersion': '1.0',
    'sonar.sources': '.',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.login': '6d36ea0d6bbc7e4ab52e71f6c62c63305e2a21ed'
  },
}, () => {});

