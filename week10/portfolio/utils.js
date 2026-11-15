/* Pure portfolio helpers — no React or DOM dependencies. */
window.PortfolioGalleryUtils={
 filterPortfolioProjects(items,technology){return technology==="All"?items:items.filter(project=>project.technologies.includes(technology));},
 getPortfolioTechnologies(items){return ["All",...new Set(items.flatMap(project=>project.technologies))];}
};
