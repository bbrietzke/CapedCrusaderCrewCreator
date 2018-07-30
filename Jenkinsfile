pipeline {
  agent any

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
