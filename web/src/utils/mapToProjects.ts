import type { Project } from "@/types/types";
const STRAPI_URL = import.meta.env.STRAPI_URL;

export const extractProjectData = (json: any): Project[] => {
  // Check if json is null or undefined before proceeding
  if (!json) return [];

  return json.map((projectData: any) => {
    const attributes = projectData?.attributes;

    // Provide default values or checks for potentially null properties
    const project: Project = {
      id: projectData?.id ?? "",
      title: attributes?.Name ?? "No Title",
      description:
        attributes?.Description?.map((desc: { children: { text: any }[] }) =>
          desc.children.map((child: { text: any }) => child.text).join(""),
        ).join("\n") ?? "No Description",
      images:
        attributes?.Images?.data?.map(
          (img: {
            attributes: {
              formats: {
                small?: { url: string };
                medium?: { url: string };
                large?: { url: string };
              };
            };
          }) =>
            STRAPI_URL +
            (img.attributes.formats.small?.url ??
              img.attributes.formats.medium?.url ??
              img.attributes.formats.large?.url ??
              ""), // Fallback URL
        ) ?? [],
      technologies:
        attributes?.technologies?.data?.map(
          (tech: { attributes: { Name: string } }) => tech.attributes.Name,
        ) ?? [],
      demoLink: attributes?.Demo?.[0]?.href ?? "",
      viewDemoLink: attributes?.Demo?.[0]?.href ?? "",
      members:
        attributes?.project_team?.data?.attributes?.members?.map(
          (member: { role: string | null; name: string }) => ({
            role: member.role ?? null,
            name: member.name,
          }),
        ) ?? [],
      teamImg: {
        src:
          STRAPI_URL +
          (attributes?.project_team?.data.attributes?.img?.data?.attributes
            ?.formats?.small?.url ??
            attributes?.project_team?.data.attributes?.img?.data?.attributes
              ?.formats?.medium?.url ??
            attributes?.project_team?.data.attributes?.img?.data?.attributes
              ?.formats?.large?.url ??
            ""), // Fallback URL
        alt:
          attributes?.project_team?.data.attributes?.img?.data?.attributes
            ?.alternativeText ?? "",
      },
    };
    return project;
  });
};
