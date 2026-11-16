// The gallery uses state to filter projects and control the carousel.
if (!window.React || !window.ReactDOM) {
  const mount = document.getElementById("react-project-gallery");

  if (mount) {
    mount.textContent =
      "The React gallery could not load. Check your connection and refresh the page.";
  }
} else {
  const { useState, useEffect, useRef } = React;

  const projects = window.PortfolioProjectData;
  const {
    filterPortfolioProjects,
    getPortfolioTechnologies
  } = window.PortfolioGalleryUtils;

  const {
    PortfolioFilterBar,
    PortfolioProjectList,
    PortfolioProjectDetails
  } = window.PortfolioReactComponents;

  function PortfolioProjects() {
    const [category, setCategory] = useState("All");
    const [current, setCurrent] = useState(0);
    const [details, setDetails] = useState(null);

    const deckRef = useRef(null);
    const triggerRef = useRef(null);

    const technologies = getPortfolioTechnologies(projects);
    const visibleProjects = filterPortfolioProjects(projects, category);

    // Start at the first card when the filter changes.
    useEffect(() => {
      setCurrent(0);
    }, [category]);

    function chooseProject(index) {
      if (visibleProjects.length === 0) return;

      if (deckRef.current?.contains(document.activeElement)) {
        deckRef.current.focus({ preventScroll: true });
      }

      setCurrent((index + visibleProjects.length) % visibleProjects.length);
    }

    function showDetails(project, button) {
      triggerRef.current = button;
      setDetails(project);
    }

    function handleKeys(event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        chooseProject(current + 1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        chooseProject(current - 1);
      }
    }

    return (
      <div className="portfolio-react-showcase">
        <div className="portfolio-react-toolbar">
          <PortfolioFilterBar
            categories={technologies}
            selected={category}
            onSelect={setCategory}
          />

          <p className="mono" aria-live="polite">
            {visibleProjects.length}{" "}
            {visibleProjects.length === 1 ? "project" : "projects"}
            {" · "}
            {visibleProjects.length ? current + 1 : 0} of {visibleProjects.length}
          </p>
        </div>

        <PortfolioProjectList
          projects={visibleProjects}
          current={current}
          onSelect={chooseProject}
          onDetails={showDetails}
          deckRef={deckRef}
          onKeyDown={handleKeys}
        />

        {visibleProjects.length > 1 && (
          <div className="portfolio-carousel-controls">
            <button
              type="button"
              onClick={() => chooseProject(current - 1)}
              aria-label="Previous project"
            >
              ← Previous
            </button>

            <div
              className="portfolio-carousel-dots"
              role="group"
              aria-label="Choose a project"
            >
              {visibleProjects.map((project, index) => (
                <button
                  type="button"
                  key={project.id}
                  className={index === current ? "active" : ""}
                  aria-label={"Show " + project.title}
                  aria-pressed={index === current}
                  onClick={() => chooseProject(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => chooseProject(current + 1)}
              aria-label="Next project"
            >
              Next →
            </button>
          </div>
        )}

        <div
          className="portfolio-project-index"
          role="group"
          aria-label="Project list"
        >
          {visibleProjects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              aria-controls="portfolio-project-deck"
              aria-pressed={index === current}
              onClick={() => chooseProject(index)}
            >
              <span>{index + 1}</span>
              {project.title}
            </button>
          ))}
        </div>

        <p className="portfolio-react-hint">
          Use the arrow buttons or keyboard arrow keys to explore the projects.
          Open Details to read a short summary.{" "}
          <a href="./tests.html">Run browser checks ↗</a>
        </p>

        <PortfolioProjectDetails
          project={details}
          triggerRef={triggerRef}
          onClose={() => setDetails(null)}
        />
      </div>
    );
  }

  window.PortfolioGalleryChecks = {
    projects,
    filterProjects: filterPortfolioProjects
  };

  ReactDOM.createRoot(
    document.getElementById("react-project-gallery")
  ).render(<PortfolioProjects />);
}
