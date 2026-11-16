/* Reusable React components for the Week 10 project gallery. */

(function () {
  const h = React.createElement;

  function PortfolioFilterBar({ categories, selected, onSelect }) {
    return h(
      "div",
      {
        className: "portfolio-react-filters",
        role: "group",
        "aria-label": "Filter portfolio projects"
      },
      categories.map((category) =>
        h(
          "button",
          {
            type: "button",
            key: category,
            "aria-controls": "portfolio-project-deck",
            "aria-pressed": selected === category,
            onClick: () => onSelect(category)
          },
          category === "All" ? "All projects" : category
        )
      )
    );
  }

  function PortfolioProjectArtwork({ project }) {
    const projects = window.PortfolioProjectData;
    const projectNumber = projects.indexOf(project) + 1;
    const number = String(projectNumber).padStart(2, "0");

    const symbols = {
      "book-search": "↗",
      "memory-match": "◆",
      "study-planner": "✓",
      "expense-tracker": "₩"
    };

    return h(
      "div",
      {
        className: "portfolio-project-art art-" + project.id,
        "aria-hidden": "true"
      },
      h("span", null, number + " / " + project.category.toUpperCase()),
      h("b", null, project.mark),
      h("i", null, symbols[project.id] || "< />")
    );
  }

  function PortfolioProjectCard({
    project,
    active,
    slot,
    onSelect,
    onDetails
  }) {
    return h(
      "article",
      {
        className: "portfolio-react-card",
        "data-slot": slot,
        "aria-hidden": !active,
        onClick: (event) => {
          if (!active) {
            event.preventDefault();
            onSelect();
          }
        }
      },
      h(PortfolioProjectArtwork, { project }),
      h(
        "div",
        { className: "portfolio-project-body" },
        h(
          "div",
          { className: "portfolio-project-meta" },
          h("span", null, project.category),
          h("span", null, "SELECTED WORK")
        ),
        h("h3", null, project.title),
        h("p", null, project.description),
        h(
          "ul",
          {
            className: "portfolio-project-tags",
            "aria-label": project.title + " technologies"
          },
          project.technologies.map((technology) =>
            h("li", { key: technology }, technology)
          )
        ),
        h(
          "div",
          { className: "portfolio-project-links" },
          h(
            "a",
            {
              href: project.demoUrl,
              tabIndex: active ? 0 : -1
            },
            "Open project ",
            h("span", { "aria-hidden": "true" }, "↗")
          ),
          h(
            "a",
            {
              href: project.githubUrl,
              target: "_blank",
              rel: "noreferrer",
              tabIndex: active ? 0 : -1
            },
            "Source ",
            h("span", { "aria-hidden": "true" }, "↗")
          ),
          h(
            "button",
            {
              type: "button",
              tabIndex: active ? 0 : -1,
              onClick: (event) =>
                onDetails(project, event.currentTarget)
            },
            "Details +"
          )
        )
      )
    );
  }

  function PortfolioProjectList({
    projects,
    current,
    onSelect,
    onDetails,
    deckRef,
    onKeyDown,
    onPointerDown,
    onPointerCancel,
    onPointerUp
  }) {
    if (projects.length === 0) {
      return h(
        "p",
        { className: "portfolio-empty", role: "status" },
        "No projects in this category yet."
      );
    }

    return h(
      "div",
      {
        className: "portfolio-project-deck",
        id: "portfolio-project-deck",
        ref: deckRef,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": "Selected portfolio projects",
        tabIndex: 0,
        onKeyDown,
        onPointerDown,
        onPointerCancel,
        onPointerUp
      },
      projects.map((project, index) => {
        let slot = (index - current + projects.length) % projects.length;

        if (slot === projects.length - 1 && slot !== 0) {
          slot = -1;
        } else if (slot > 1) {
          slot = 2;
        }

        return h(PortfolioProjectCard, {
          key: project.id,
          project,
          active: index === current,
          slot,
          onSelect: () => onSelect(index),
          onDetails
        });
      })
    );
  }

  function PortfolioProjectDetails({ project, triggerRef, onClose }) {
    const dialogRef = React.useRef(null);

    React.useEffect(() => {
      const dialog = dialogRef.current;

      if (project && dialog && !dialog.open) {
        dialog.showModal();
        dialog.querySelector("button")?.focus();
      }

      if (!project && dialog && dialog.open) {
        dialog.close();
      }
    }, [project]);

    return h(
      "dialog",
      {
        className: "portfolio-project-dialog",
        ref: dialogRef,
        "aria-labelledby": "portfolio-dialog-title",
        onClose: () => {
          onClose();

          if (triggerRef.current) {
            triggerRef.current.focus();
          }
        },
        onClick: (event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current.close();
          }
        }
      },
      h(
        "div",
        { className: "portfolio-dialog-heading" },
        h("p", { className: "eyebrow" }, "PROJECT DETAILS"),
        h(
          "button",
          {
            type: "button",
            onClick: () => dialogRef.current.close()
          },
          "Close ×"
        )
      ),
      h(
        "p",
        { className: "eyebrow" },
        project?.category || "SELECTED WORK"
      ),
      h("h2", { id: "portfolio-dialog-title" }, project?.title || "Project details"),
      h("p", null, project?.description),
      h("h3", null, "What this project includes"),
      h(
        "ul",
        null,
        (project?.features || []).map((feature) =>
          h("li", { key: feature }, feature)
        )
      ),
      h(
        "div",
        { className: "portfolio-dialog-actions" },
        project &&
          h(
            "a",
            { className: "button", href: project.demoUrl },
            "Open project ↗"
          ),
        project &&
          project.githubUrl &&
          h(
            "a",
            {
              className: "text-link",
              href: project.githubUrl,
              target: "_blank",
              rel: "noreferrer"
            },
            "View source ↗"
          )
      )
    );
  }

  window.PortfolioReactComponents = {
    PortfolioFilterBar,
    PortfolioProjectArtwork,
    PortfolioProjectCard,
    PortfolioProjectList,
    PortfolioProjectDetails
  };
})();
