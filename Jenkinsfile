pipeline {
    agent { docker { image 'docker:19.03.12' } }

    environment {
        // Укажите необходимые переменные окружения
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'freddiy_jey', url: 'git@github.com:Shkityrk/docker_nginx.git', branch: 'main'
            }
        }

        stage('Build') {

            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
