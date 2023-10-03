import "./Form.css";

const Form = ({handleSubmit,
  windowSize,
  setAge,
  age,
  setGender,
  gender,
  setWeight,
  weight,
  setHeight,
  height,
  setLifestyleOption,
  lifestyleOption,
  setObjectiveOption,
  objectiveOption}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Idade:</span>
          <input
            type="number"
            placeholder={windowSize >= 450 ? 'Idade em anos' : ''}
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>
        <label>
          <span>Sexo:</span>
          <select onChange={(e) => setGender(e.target.value)} value={gender}>
            {windowSize >= 450 ? (<option value="" disabled>Selecione seu sexo</option>) : (<option value="" disabled></option>)}
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </label>
        <label>
          <span>Peso:</span>
          <input
            type="number"
            placeholder={windowSize >= 450 ? 'Peso em kg (Ex: 65.5)' : ''}
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            maxLength="4"
          />
        </label>
        <label>
          <span>Altura:</span>
          <input
            type="number"
            placeholder={windowSize >= 450 ? 'Altura em cm (ex: 170)' : ''}
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
        </label>
        <label>
          <span>Nível de Atividade:</span>
          <select
            onChange={(e) => setLifestyleOption(e.target.value)}
            value={lifestyleOption}
          >
            {windowSize >= 450 ? (<option value="" disabled>Selecione seu nível de atividade</option>) : (<option value="" disabled></option>)}
            <option value="SE">Sedentário (sem exercício/esporte algum)</option>
            <option value="PA">
              Pouco ativo (exercício/esporte leve 1-3 dias/semana)
            </option>
            <option value="A">
              Moderadamente ativo (exercício/esporte moderado 3-5 dias/semana)
            </option>
            <option value="MA">
              Muito ativo (exercício/esporte pesado 6-7 dias/semana)
            </option>
            <option value="EA">
              Extremamente ativo (exercício/esporte muito pesado e trabalho
              físico diariamente ou treino 2x ao dia)
            </option>
          </select>
        </label>
        <label>
          <span>Objetivo:</span>
          <select
            onChange={(e) => setObjectiveOption(e.target.value)}
            value={objectiveOption}
          >
            {windowSize >= 450 ? (<option value="" disabled>Selecione seu objetivo</option>) : (<option value="" disabled></option>)}
            <option value="E">Emagrecer</option>
            <option value="M">Manter</option>
            <option value="G">Ganhar peso</option>
          </select>
        </label>
        <button type="submit">CALCULAR</button>
      </form>
    </div>
  );
};

export default Form;
