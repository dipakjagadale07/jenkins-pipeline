node {
     def app
     stage('clone repository') {
      checkout scm
      echo 'Repository cloned successfully...'
     }
     stage('Build docker Image'){
      app = docker.build("node-jenkins-test")
      echo 'Build successfull...'
     }
     /* stage('Test Image'){
       app.inside {
         echo 'echo "TEST PASSED"'
       }
     } */
     stage('Push Image'){
       docker.withRegistry('https://registry.hub.docker.com', 'docker') {
       //    app.push("${env.BUILD_NUMBER}")
       app.push("latest")
       echo 'Image pushed....'
       }
     }
}
