def environment
def role
pipeline {
    agent {
      label "master"
    }
    stages {
        stage ('Select'){
            steps {
                environment = input( id: 'userInput', message: 'Select deployment environment', parameters: [ ['$class': 'ChoiceParameterDefinition', choices: 'stage\nproduction', description: '', name: ''] ])
                role = input( id: 'userInput', message: 'Select deployment role', parameters: [ ['$class': 'ChoiceParameterDefinition', choices: 'cn.wish.jenkins\nother', description: '', name: ''] ])
            }
        }
        stage('Deploy') {
            steps {
                echo "Apply latest state for ${role} in ${environment}"
                # sh "sudo salt --no-color --state-output=changes -C \"G@role:${role} and G@environment:${environment}\" state.highstate"
            }
        }
    }
}

