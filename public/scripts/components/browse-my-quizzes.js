$(() => {
  const publicQuizContainer = `<div class="row">`;
  const publicQuizContainerClose = `</div>`;

  //do not touch this reference to my quizzes please
  $("header").on("click", ".myQuiz_btn", () => {
    console.log('clicked')
    // $.get("/dashboard/my-quizzes", (data) =>{

    $.get("/dashboard/my-quizzes").then((data) => {
      // clearQuiz();
      let counter = 0;
      let quizDomElem = publicQuizContainer;
      for (const quizzes of data) {
        if (counter % 3 === 0) {
          quizDomElem += publicQuizContainerClose;
          quizDomElem += publicQuizContainer;

          quizDomElem += `
          <a href="/quizzes/${quizzes.id}">
          <div class="card col-md">
          <div class="card quiz_title_dashboard">${quizzes.name}</div>
          <div class="card question_card_dashboard">q1</div>
          <div class="card question_card_dashboard">q2</div>
          <div class="card question_card_dashboard">q3</div>
          </div>`;
        } else {
          quizDomElem += `
          <a href="/quizzes/${quizzes.id}">
          <div class="card col-md">
          <div class="card quiz_title_dashboard">${quizzes.name}</div>
          <div class="card question_card_dashboard">q1</div>
          <div class="card question_card_dashboard">q2</div>
          <div class="card question_card_dashboard">q3</div>
          </div>`;
        }
        counter++;
      }
      quizDomElem += publicQuizContainerClose;
      console.log(typeof quizDomElem);
      window.views_manager.show("browseMyQuizzes", quizDomElem);
    });
  });
  //add a clear to this object once we navigate away from
});