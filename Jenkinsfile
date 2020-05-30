def environment
def role
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
                                        choice(name: 'ENVIRONMENT', choices: ['dev','qa'].join('\n'), description: 'Please select the Environment'),
                                        choice(name: 'IMAGE_TAG', choices: ["aa", "bb"].join('\n'), description: 'Available Docker Images')]
                        env.ENVIRONMENT = INPUT_PARAMS.ENVIRONMENT
                        env.IMAGE_TAG = INPUT_PARAMS.IMAGE_TAG
                    }
                }
            }
        }
        // stage('Select deployment environment') {
        //     env.environment = input {
        //         message "Select deployment environment"
        //         submitter "azhang"
        //         parameters {
        //             string(name: 'environment', defaultValue: 'stage', description: 'which environment to deploy?')
        //         }
        //     }
        //     steps {
        //         echo "You are about deploy to ${env.environment}"
        //     }
        // }
        stage("Select role and deploy") {
            // env.role = input {
            //     message "Select deployment role"
            //     submitter "azhang"
            //     parameters {
            //         string(name: 'role', defaultValue: 'cn.wish.jenkins', description: 'which role to deploy?')
            //     }
            // }
            steps {
                echo "Apply latest state for ${env.ENVIRONMENT} in ${env.IMAGE_TAG}"
                // # sh "sudo salt --no-color --state-output=changes -C \"G@role:${role} and G@environment:${environment}\" state.highstate"
            }
        }
    }
}

