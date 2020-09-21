$(() => {
  const $quizForm = $(`
  <div class="quiz_body">
  <div class="card question_body">
    <div>
      <h1 class="question_number">1</h1>
    </div>
    <div>
      <h1 class="question_string">
        What library is used for parsing, validating, manipulating, and
        formatting dates?
      </h1>
    </div>
    <div class="quiz_body_footer">
      <div>
        <a href="#" class="back"><i class="fas fa-angle-double-left"></i> </a>
      </div>
      <div>
        <h2 class="question_counter">1/10</h2>
      </div>
    </div>
  </div>
  <form class="answer_form right_bg">
    <div class="btn btn-outline-light option1-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option1"
        name="radioGroup"
      />
      <label class="answerLabel">Answer 1</label>
    </div>
    <div class="btn btn-outline-light option2-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option2"
        name="radioGroup"
      />
      <label class="answerLabel">Answer 2</label>
    </div>
    <div class="btn btn-outline-light option3-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option3"
        name="radioGroup"
      />
      <label class="answerLabel">Answer 3</label>
    </div>
    <div class="btn btn-outline-light option4-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option4"
        name="radioGroup"
      />
      <label class="answerLabel">Answer 4</label>
    </div>
  </form>
</div>
  `);

  window.$quizForm = $quizForm;

  $quizForm.submit(function (e) {});
});
