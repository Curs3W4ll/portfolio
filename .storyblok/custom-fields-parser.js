export default (key, field) => {
  switch (field.field_type) {
    case "storyblok-tags":
      return {
        [key]: {
          properties: {
            value: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          required: ["value"],
          type: "object",
        },
      };
    default:
      return {};
  }
};
