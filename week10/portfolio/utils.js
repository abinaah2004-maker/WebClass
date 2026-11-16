/* Small helper functions used by the portfolio gallery. */

window.PortfolioGalleryUtils = {
  filterPortfolioProjects(projects, technology) {
    if (technology === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(technology)
    );
  },

  getPortfolioTechnologies(projects) {
    const technologies = projects.flatMap(
      (project) => project.technologies
    );

    return ["All", ...new Set(technologies)];
  }
};
