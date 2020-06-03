def getRoles() {
    return ["a", "b", "c"]
}
pipeline {
    agent {
      label "master"
    }
    stages {
        stage("Gather Deployment Parameters") {
            steps {
                timeout(time: 30, unit: 'SECONDS') {
                    script {
                        // Show the select input modal
                       def INPUT_PARAMS = input message: 'Please Provide Parameters', ok: 'Next',
                                        parameters: [
                                        choice(name: 'environment', choices: ['stage','prod'].join('\n'), description: 'Please select the Environment'),
                                        choice(name: 'role', choices: getRoles().join('\n'), description: 'Please select the role')]
                        env.ENVIRONMENT = INPUT_PARAMS.environment
                        env.ROLE = INPUT_PARAMS.role
                    }
                }
            }
        }
        stage("Deploy") {
            steps {
                echo "Apply latest state for ${env.role} in ${env.ENVIRONMENT}"
                // # sh "sudo salt --no-color --state-output=changes -C \"G@role:${role} and G@environment:${environment}\" state.highstate"
            }
        }
    }
}

