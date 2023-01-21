import { Tooltip } from "flowbite-react";
import getConfig from "next/config";
import Link from "next/link";

export default function NavBar() {
  const { publicRuntimeConfig } = getConfig();

  const toolTipContent = (
    <div>
      <p>Version: {publicRuntimeConfig.version}</p>
      <p>Last Updated: 21/01/2023</p> {/* TODO remove the hard code */}
      <p>Deployed On: Google Cloud Platform asia-southeast1 (Singapore)</p>{" "}
      {/* TODO remove the hard code */}
    </div>
  );
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <Tooltip content={toolTipContent} placement="right">
          <h1 className=" text-2xl">&lt;/&gt;</h1>
        </Tooltip>

        <ul className="flex items-center">
          <li>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-5 px-2 lg:px-4 py-2 rounded-md text-white"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
