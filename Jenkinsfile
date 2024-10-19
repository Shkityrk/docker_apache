pipeline {
    agent { docker { image 'docker:19.03.12' } }

     environment {
            BACKEND_ENV_CONTENT = credentials('21ae7c95-8d44-4f45-9178-327c8a5f7a45')
            FRONTEND_ENV_CONTENT = credentials('ae062bed-94f0-4bd2-a7a4-84298806603a')
            HOSTS_CONTENT = credentials('5f208c1b-0e07-4e88-a5da-79e19fc5d8f9')
        }


    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Shkityrk/docker_nginx', branch: 'main'
            }
        }

        stage('Create .env and .hosts files in different directories') {
            steps {
                script {
                    writeFile file: 'backend/.env', text: BACKEND_ENV_CONTENT
                    writeFile file: 'frontend/.env', text: FRONTEND_ENV_CONTENT
                    writeFile file: 'backend/.hosts', text: HOSTS_CONTENT
                }
            }
        }

        stage('Build') {

            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d'
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
