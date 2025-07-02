pipeline {
    agent any
    environment {
        // Set the directory where the Dockerfile is located
        DOCKERFILE_PATH = 'jira-app-v2/frontend'
        IMAGE_NAME = 'jira-frontend-app'
        HOST_PORT = '5173'  // Exposed port from the Dockerfile
    }
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile
                    sh """
                        docker build -t ${IMAGE_NAME} -f ${DOCKERFILE_PATH}/Dockerfile ${DOCKERFILE_PATH}
                    """
                }
            }
        }

        stage('Stop Existing Containers on Host Port 5173') {
            steps {
                script {
                    // Check if any container is already using the host port 5173
                    def containerId = sh(script: "docker ps -q --filter 'publish=${HOST_PORT}'", returnStdout: true).trim()
                    if (containerId) {
                        echo "Found container using port ${HOST_PORT}. Stopping the existing container."
                        // Stop the existing container using port 5173
                        sh "docker stop ${containerId}"
                        // Optionally, you can remove the stopped container
                        sh "docker rm ${containerId}"
                    } else {
                        echo "No container is using host port ${HOST_PORT}. Proceeding with container startup..."
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container on the specified host port (5173)
                    def containerId = sh(script: "docker run -d -p ${HOST_PORT}:${HOST_PORT} ${IMAGE_NAME}", returnStdout: true).trim()
                  
                    // Print the logs to check the container status
                    sh "docker logs ${containerId}"
                }
            }
        }
    }

    post {
        always {
            // The container will stay running, so no need to stop or remove it.
            echo "Container will remain running on port ${HOST_PORT}"
        }
    }
}
