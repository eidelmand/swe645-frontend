pipeline {
   agent any
    environment {
        PROJECT_ID = 'extreme-citadel-271521'
        CLUSTER_NAME = 'swe645'
        LOCATION = 'us-east1-c'
        CREDENTIALS_ID = 'gke'
    }
    stages {
        stage("Build frontend"){
          steps{
            myapp = docker.build("eyaron94/swe645_frontend:${end.BUILD_ID}")
          }
        }
        stage("Push images") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            myapp.push("latest")
                            //myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
        stage('Deploy to GKE') {
            steps{
		    sh 'gcloud config set project extreme-citadel-271521'
		    sh 'gcloud container clusters get-credentials swe645 --zone us-east1-c'

        sh 'kubectl set image deployments/swe645-frontend swe645-frontend=eyaron94/swe645_frontend:latest'

      }
        }
    }
}
