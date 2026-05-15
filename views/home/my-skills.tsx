import SkillCard from "components/skill-card";

export default function MySkills() {
  return (
    <div className="mx-5 lg:mx-0">
      <div>
        <h3 className="text-3xl mt-20">My skills</h3>
        <p className="text-lg p-5">
          These are the technologies that I am using / have used.
        </p>
      </div>
      <div className="lg:flex justify-center gap-28">
        <SkillCard
          imageData="/react-icon.png"
          title={"Frontend"}
          items={[
            "React (Redux, Next.js)",
            "TypeScript",
            "Tailwind",
            "Cypress",
          ]}
        />
        <SkillCard
          imageData="/backend-icon.png"
          title={"Backend"}
          items={[
            "Java(Spring,JUnit)",
            "Node(express)",
            "Python(Django/Flask)",
            "PostgresSQL",
            "MongoDB",
          ]}
        />
        <SkillCard
          imageData="/cloud-icon.png"
          title={"Cloud And DevOps"}
          items={["AWS", "GCP", "Azure DevOps", "Docker"]}
        />
        <SkillCard
          imageData="/git-icon.png"
          title={"Productivity"}
          items={["Git", "Jira", "VS Code", "IntelliJ / PyCharm"]}
        />
        <SkillCard
          imageData="/other-icon.png"
          title={"Others"}
          items={["Unity3D", "OpenCV", "Image Processing"]}
        />
      </div>
    </div>
  );
}
