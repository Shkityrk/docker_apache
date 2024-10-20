pipeline {
    agent { docker { image 'docker:19.03.12' } }

     environment {
            BACKEND_ENV_CONTENT = credentials('b8366472-fb81-4116-8fac-dc05974e7229')
            FRONTEND_ENV_CONTENT = credentials('e6b9d420-2bac-4292-bdb8-4d44246cafd2')
            HOSTS_CONTENT = credentials('ebed41e1-8211-4f00-9ca5-0cb791af1fec')
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
