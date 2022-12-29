import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SocialLink from "../../components/social-link";


export default function MainIntro(){
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-800">
          Jingcheng Wang (Jin)
        </h2>
        <h3 className=" text-2xl p-2">Software Engineer</h3>
        <p className="text-md pt-5">
          Hi there, I am a full stack software engineer who is currently working
          at{" "}
          <a
            href="https://eresearch.unimelb.edu.au/"
            target="_blank"
            className="text-blue-700"
            rel="noreferrer"
          >
            Melbourne eResearch Group
          </a>{" "}
          within the University of Melbourne.{" "}
        </p>
      </div>
      <div className="text-5xl flex justify-center">
        <SocialLink
          href="https://www.linkedin.com/in/jingcheng-wang-958240123/"
          icon={AiFillLinkedin}
        />
        <SocialLink href="https://github.com/DWD3" icon={AiFillGithub} />
      </div>
    </>
  );
}