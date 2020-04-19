pipeline {
   agent any
	
	
        tools {
          // Install the Maven version configured as "M3" and add it to the path.
          maven "Maven 3.6.3"
          }
    environment {
        PROJECT_ID = 'extreme-citadel-271521'//'654482500446'
        CLUSTER_NAME = 'swe645'
        LOCATION = 'us-east1-c'
        CREDENTIALS_ID = 'gke'
    }
    stages {
        /*stage("Checkout code") {
            steps {

            }
        }*/
        stage("Build image") {
            steps {
                script {

                    checkout scm
                    myapp = docker.build("eyaron94/swe645_frontend:${env.BUILD_ID}")
                }
            }
        }
        stage("Push image") {
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
		          sh 'kubectl set image deployments/swe645-frontend swe645-2=eyaron94/swe645_frontend:latest'
             }
        }
    }
}
