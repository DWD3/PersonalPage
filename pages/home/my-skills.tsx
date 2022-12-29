import SkillCard from '../../components/skill-card'
import reactIconImage from '../../public/React-icon.png'
import backendIconImage from '../../public/backend-icon.png'
import gitIconImage from '../../public/git-icon.png'
import otherIconImage from '../../public/other-icon.png'

export default function MySkills(){
    return (
      <>
        <div>
          <h3 className="text-3xl mt-10">My skills</h3>
          <p className="text-lg p-5">
            These are the technologies that I am using/used.
          </p>
        </div>
        <div className="flex justify-center">
          <SkillCard
            imageData={reactIconImage}
            title={"Frontend"}
            items={["React", "TypeScript", "Redux"]}
          />
          <SkillCard
            imageData={backendIconImage}
            title={"Backend"}
            items={[]}
          />
          <SkillCard
            imageData={gitIconImage}
            title={"Productivity"}
            items={[]}
          />

          <SkillCard
            imageData={otherIconImage}
            title={"Other"}
            items={[]}
          />
        </div>
      </>
    );
}