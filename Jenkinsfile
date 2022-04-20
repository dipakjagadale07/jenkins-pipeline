node {
     def app
     stage('clone repository') {
      checkout scm
     }
     stage('Build docker Image'){
      app = docker.build("node-jenkins-test")
     }
     stage('Test Image'){
       app.inside {
         sh 'echo "TEST PASSED"'
       }
     }
     stage('Push Image'){
       docker.withRegistry('https://registry.hub.docker.com', 'docker') {
       //    app.push("${env.BUILD_NUMBER}")
       app.push("latest")
       }
     }
}
