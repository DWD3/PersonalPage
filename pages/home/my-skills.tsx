import SkillCard from '../../components/skill-card'
import reactIconImage from '../../public/react-icon.png'
import backendIconImage from '../../public/backend-icon.png'
import gitIconImage from '../../public/git-icon.png'
import otherIconImage from '../../public/other-icon.png'
import cloudIconImage from '../../public/cloud-icon.png'


export default function MySkills(){
    return (
      <>
        <div>
          <h3 className="text-3xl mt-20">My skills</h3>
          <p className="text-lg p-5">
            These are the technologies that I am using / have used.
          </p>
        </div>
        <div className="lg:flex justify-center gap-28">
          <SkillCard
            imageData={reactIconImage}
            title={"Frontend"}
            items={["React (Redux, Next.js)", "TypeScript", "Tailwind","Cypress"]}
          />
          <SkillCard
            imageData={backendIconImage}
            title={"Backend"}
            items={["Java(Spring,JUnit)","Node(express)","Python(Django/Flask)","PostgresSQL","MongoDB"]}
          />
          <SkillCard
            imageData={cloudIconImage}
            title={"Cloud And DevOps"}
            items={["AWS","GCP","Auzre DevOps","Docker"]}
          />
          <SkillCard
            imageData={gitIconImage}
            title={"Productivity"}
            items={["Git","Jira","VS Code","IntelliJ / PyCharm"]}
          />
          <SkillCard
            imageData={otherIconImage}
            title={"Others"}
            items={["Unity3D","OpenCV","GAN Machine Learning"]}
          />
        </div>
      </>
    );
}