import "./AnswerForm.css";

const AnswerForm = ({ VET }) => {
  return (
    <div className={`${VET === "0" ? 'hide' : 'show'} answerForm`}>
      {VET === "0" ? (
        ""
      ) : (
        <p className="result">
          Para alcançar seu objetivo ingira{" "}
          <strong>{Math.floor(VET)}</strong>kcal.
        </p>
      )}
    </div>
  );
};

export default AnswerForm;
