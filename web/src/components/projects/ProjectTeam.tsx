interface Team {
  role?: string;
  name: string;
}

interface ProjectTeamProps {
  team: Team[];
  teamImg?: {
    src: string;
    alt: string;
  } | null;
}

const ProjectTeam = ({ team, teamImg }: ProjectTeamProps) => {
  return (
    <div className="flex flex-col md:flex-row my-8">
      <div className="basis-1/2 p-4">
        <h4>Team Leadership</h4>
        <hr className="border-t-2 border-gray-500 my-4 w-[1.25rem]" />
        <ul className="list-inside list-disc">
          {team.map((teamMember, index) => (
            <li key={index} className="mb-2">
              {teamMember.role && (
                <>
                  <strong>{teamMember.role}</strong>
                  <span className="font-normal"> - </span>
                </>
              )}
              {teamMember.name}
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
