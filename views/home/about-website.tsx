import ClickableLink from "../../components/clickable-link";
import { FcGoogle } from "react-icons/fc";

export default function AboutWebsite() {
  return (
    <div className="mx-5 lg:mx-0">
      <div>
        <h3 className="text-3xl mt-20">About this website</h3>
        <p className="text-lg p-5">
          This website is built using Next.js(16) and Tailwind. The design of
          the website and also the choice of technogies are inspired by{" "}
          <ClickableLink
            link="https://www.youtube.com/watch?v=k-Pi5ZMxHWY"
            text="this tutorial"
          />
          {"."} The source code is hosted{" "}
          <ClickableLink
            link="https://github.com/DWD3/PersonalPage"
            text="here"
          />{" "}
          on my Github.
        </p>
        <p className="text-lg p-5">
          It is the currently hosted on Google Cloud Platform using Cloud Run.
        </p>
      </div>
    </div>
  );
}
