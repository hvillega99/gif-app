pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/hvillega99/gif-app', branch: 'master')
      }
    }

    stage('log') {
      parallel {
        stage('log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('testing') {
          steps {
            sh 'npm i && npm run test'
          }
        }

      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}