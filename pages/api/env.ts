// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getDeploymentRegion } from "utils/runtime-variables";

type EnvData = {
  region: string | undefined;
  deploymentDate: string | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EnvData>
) {
  const region = getDeploymentRegion();
  res.status(200).json({ region, deploymentDate: "" });
}
