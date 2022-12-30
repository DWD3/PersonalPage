import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SocialLink from "../../components/social-link";


export default function MainIntro(){
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-800">
          Jingcheng Wang (Jin)
        </h2>
        <h3 className=" text-3xl p-2">Software Engineer</h3>
        <div className="text-xl pt-5">
          <p>
            Hi there, I am a full stack software engineer who is currently
            working at{" "}
            <a
              href="https://eresearch.unimelb.edu.au/"
              target="_blank"
              className="text-blue-700"
              rel="noreferrer"
            >
              Melbourne eResearch Group (MeG)
            </a>{" "}
            within the University of Melbourne. At MeG, I am currently working
            across the stack on a sophisticated workforce planning simulation
            software called{" "}
            <a
              target="_blank"
              className="text-blue-700"
              rel="noreferrer"
              href="https://www.dst.defence.gov.au/research-facility/next-generation-workforce-planning-capability/current-projects"
            >
              Athena Lite
            </a>{" "}
            for the Australian Defence Force.
          </p>
          <br />
          <p>
            I started working for the University in 2018. I have previously
            worked in various different labs on{" "}
            <span className="font-semibold">Software Development</span> and{" "}
            <span className="font-semibold">Data Analysis</span> roles,
            including :{" "}
            <a
              href="https://cis.unimelb.edu.au/hci"
              target="_blank"
              className="text-blue-700"
              rel="noreferrer"
            >
              HCI Group
            </a>
            ,{" "}
            <a
              href="https://psychologicalsciences.unimelb.edu.au/chdh"
              target="_blank"
              className="text-blue-700"
              rel="noreferrer"
            >
              Complex Human Data Hub
            </a>
            , and{" "}
            <a
              href="https://thud.msd.unimelb.edu.au/"
              target="_blank"
              className="text-blue-700"
              rel="noreferrer"
            >
              THUD Lab
            </a>
            .
          </p>
          <br />
          <p>
            Please Refer to my Linkedin down below for my full professional
            experience.
          </p>
        </div>
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