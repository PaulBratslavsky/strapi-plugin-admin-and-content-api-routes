module.exports = {
  routes: [
    {
      method: "GET",
      path: "/public",
      handler: "public.exampleAction",
      config: {
        policies: [],
      },
    }
  ]
}