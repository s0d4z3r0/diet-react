import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>
          <span>Idade:</span>
          <input type="text" />
        </label>
        <label>
          <span>Sexo:</span>
          <select>
            <option value="" ></option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </label>
        <label>
          <span>Peso:</span>
          <input type="text" placeholder="Peso em kg (Ex: 65.5)"/>
        </label>
        <label>
          <span>Altura:</span>
          <input type="text" placeholder="Altura em cm (ex: 170)"/>
        </label>
        <label>
          <span>Nível de Atividade:</span>
          <select name="" id="">
            <option value="" ></option>
            <option value="1.2">
              Sedentário (sem exercício/esporte algum)
            </option>
            <option value="1.375">
              Pouco ativo (exercício/esporte leve 1-3 dias/semana)
            </option>
            <option value="1.55">
              Moderadamente ativo (exercício/esporte moderado 3-5 dias/semana)
            </option>
            <option value="1.725">
              Muito ativo (exercício/esporte pesado 6-7 dias/semana)
            </option>
            <option value="1.9">
              Extremamente ativo (exercício/esporte muito pesado e trabalho
              físico diariamente ou treino 2x ao dia)
            </option>
          </select>
        </label>
        <label>
          <span>Objetivo:</span>
          <select>
            <option value="" ></option>
            <option value="500">Emagrecer</option>
            <option value="0">Manter</option>
            <option value="501">Ganhar peso</option>
          </select>
        </label>
        <button>CALCULAR</button>
      </form>
    </div>
  );
};

export default Form;
