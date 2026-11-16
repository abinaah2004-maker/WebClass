/* Reusable components for the Monday React lesson. */

(function () {
  const h = React.createElement;

  function StudentCard({ name, id, major }) {
    const initials = String(name || "Student")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

    return h(
      "article",
      { className: "student-card" },
      h("div", { className: "avatar" }, initials),
      h(
        "div",
        null,
        h("p", { className: "tag" }, "STUDENT COMPONENT"),
        h("h3", null, name || "Student name"),
        h("p", null, "Student ID: ", id || "Not entered"),
        h("p", null, "Major: ", major || "Not entered")
      )
    );
  }

  function KnowledgeQuestion({
    question,
    index,
    selected,
    onSelect,
    showFeedback
  }) {
    const isCorrect = selected === question.a;

    return h(
      "fieldset",
      { className: "quiz-card" },
      h("legend", null, index + 1 + ". " + question.q),
      h(
        "div",
        { className: "quiz-options" },
        question.o.map((choice, choiceIndex) =>
          h(
            "label",
            { className: "option", key: choice },
            h("input", {
              type: "radio",
              name: "question-" + index,
              value: choiceIndex,
              checked: selected === choiceIndex,
              onChange: () => onSelect(choiceIndex)
            }),
            h("span", null, choice)
          )
        )
      ),
      showFeedback &&
        h(
          "p",
          { className: isCorrect ? "feedback good" : "feedback retry" },
          isCorrect ? "Correct. " : "Not quite. ",
          question.why
        )
    );
  }

  window.Week11MondayComponents = {
    StudentCard,
    KnowledgeQuestion
  };
})();
