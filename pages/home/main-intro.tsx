import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ClickableLink from "../../components/clickable-link";
import SocialLink from "../../components/social-link";


export default function MainIntro(){
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-800">
          Jingcheng Wang (Jin)
        </h2>
        <h3 className=" text-3xl py-6">Software Engineer</h3>
        <div className="text-xl">
          <p>
            Hi there, I am a full stack software engineer who is currently
            working at{" "}
            <ClickableLink
              link="https://eresearch.unimelb.edu.au/"
              text="Melbourne eResearch Group (MeG)"
            />{" "}
            within the University of Melbourne. At MeG, I am currently working
            across the stack on a sophisticated workforce planning simulation
            software called{" "}
            <ClickableLink
              link="https://www.dst.defence.gov.au/research-facility/next-generation-workforce-planning-capability/current-projects"
              text="Athena Lite"
            />{" "}
            for the Australian Defence Force.
          </p>
          <br />
          <p>
            I started working for the University in 2018. I have previously
            worked in various different labs on{" "}
            <span className="font-semibold">Software Development</span> and{" "}
            <span className="font-semibold">Data Analysis</span> roles,
            including :{" "}
            <ClickableLink
              link="https://cis.unimelb.edu.au/hci"
              text="HCI Group"
            />
            ,{" "}
            <ClickableLink
              link="https://psychologicalsciences.unimelb.edu.au/chdh"
              text="Complex Human Data Hub"
            />
            , and{" "}
            <ClickableLink
              link="https://thud.msd.unimelb.edu.au/"
              text="THUD Lab"
            />
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