pipeline {
  agent {
      docker {
          image 'node:10-alpine'
          args '-p 3000:3000 -p 9876:9876'
      }
  }

  stages {
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Unit Tests') {
      steps {
        sh 'npm run unit'
      }
    }
  }
}
