import _ from 'lodash';

export function getDeploymentRegion(){
    return  _.get(process.env,"_DEPLOY_REGION","Singapore");
}