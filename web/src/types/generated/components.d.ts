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

export interface BlogBlogHeader extends Schema.Component {
  collectionName: "components_blog_blog_headers";
  info: {
    displayName: "BlogHeader";
    description: "";
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlogBlogImage extends Schema.Component {
  collectionName: "components_blog_blog_images";
  info: {
    displayName: "BlogImage";
    description: "";
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    scale: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<100>;
  };
}

export interface BlogBlogText extends Schema.Component {
  collectionName: "components_blog_blog_texts";
  info: {
    displayName: "BlogText";
  };
  attributes: {
    text: Attribute.Text;
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
      "blog.blog-header": BlogBlogHeader;
      "blog.blog-image": BlogBlogImage;
      "blog.blog-text": BlogBlogText;
      "link.link": LinkLink;
    }
  }
}
