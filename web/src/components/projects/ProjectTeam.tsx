import type { Project } from "@/types/types";

interface ProjectTeamProps {
  team: Project["members"];
  teamImg?: Project["teamImg"];
}

const ProjectTeam = ({ team, teamImg }: ProjectTeamProps) => {
  return (
    <div className="flex flex-col md:flex-row my-8">
      <div className="basis-1/2 p-4">
        <h4>Team Leadership</h4>
        <hr className="border-t-2 border-gray-500 my-4 w-[1.25rem]" />
        <ul className="list-inside list-disc">
          {team.map((member, index) => (
            <li key={index} className="mb-2">
              {member.role && (
                <>
                  <strong>{member.role}</strong>
                  <span className="font-normal"> - </span>
                </>
              )}
              {member.name}
            </li>
          ))}
        </ul>
      </div>
      {teamImg && (
        <div className="basis-1/2 flex items-center justify-center">
          <img src={teamImg.src} alt={teamImg.alt} className="rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ProjectTeam;
