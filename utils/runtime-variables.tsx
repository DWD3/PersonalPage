export function getDeploymentRegion() {
  return (
    process.env.$_DEPLOY_REGION || process.env._DEPLOY_REGION || "Singapore"
  );
}
