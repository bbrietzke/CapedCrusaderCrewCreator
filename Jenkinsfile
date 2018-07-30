pipeline {
  agent {
      docker {
          image 'node:10-alpine'
          args '-p 9000:9000 -p 9876:9876 --rm'
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
