import type { Project } from "@/types/types";
const STRAPI_URL = import.meta.env.STRAPI_URL;

export const extractProjectData = (json: any): Project[] => {
  return json.map((projectData: any) => {
    const attributes = projectData.attributes;

    const project: Project = {
      id: projectData.id,
      title: attributes.Name,
      description: attributes.Description.map(
        (desc: { children: { text: any }[] }) =>
          desc.children.map((child: { text: any }) => child.text).join(""),
      ).join("\n"),
      images: attributes.Images.data.map(
        (img: { attributes: { formats: { small: { url: string } } } }) =>
          STRAPI_URL + img.attributes.formats.small.url,
      ),
      technologies: attributes.technologies.data.map(
        (tech: { attributes: { Name: string } }) => tech.attributes.Name,
      ),
      demoLink: attributes.Demo[0].href,
      viewDemoLink: attributes.Demo[0].href,
    };
    return project;
  });
};
