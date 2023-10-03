import "./AnswerForm.css";

const AnswerForm = ({ VET }) => {
  return (
    <div className={`${VET === "0" ? "hide" : "show"} answerForm`}>
      {VET === "0" ? (
        ""
      ) : (
        <div className="result">
          <p>Para alcançar seu objetivo você deve ingerir:</p>
          <p>{Math.floor(VET)}kcal.</p>
        </div>
      )}
    </div>
  );
};

export default AnswerForm;
