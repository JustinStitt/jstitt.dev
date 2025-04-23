export const load = async ({ params }) => {
  console.log("in +page.server.js!");
  return {
    foo: { x: 1, y: 2 },
  };
};
