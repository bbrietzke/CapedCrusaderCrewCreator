pipeline {
  agent any

  stages {
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm run unit'
      }
    }
  }
}
