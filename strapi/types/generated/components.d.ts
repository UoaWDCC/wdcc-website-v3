import type { Schema, Attribute } from "@strapi/strapi";

export interface AuthorAuthor extends Schema.Component {
  collectionName: "components_author_authors";
  info: {
    displayName: "Author";
    description: "";
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: "components_link_links";
  info: {
    displayName: "Link";
    description: "";
  };
  attributes: {
    value: Attribute.String;
    href: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "author.author": AuthorAuthor;
      "link.link": LinkLink;
    }
  }
}
