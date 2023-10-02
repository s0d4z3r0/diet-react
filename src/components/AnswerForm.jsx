import "./AnswerForm.css";

const AnswerForm = ({ VET }) => {
  return (
    <div className={`${VET === "0" ? 'hide' : 'show'} answerForm`}>
      {VET === "0" ? (
        ""
      ) : (
        <p className="result">
          Para alcançar seu objetivo você deve ingerir aproximadamante: {" "}
          <span><strong>{Math.floor(VET)}</strong>kcal.</span>
        </p>
      )}
    </div>
  );
};

export default AnswerForm;
