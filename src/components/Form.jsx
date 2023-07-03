import AnswerForm from './AnswerForm.jsx'

import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [lifestyleOption, setLifestyleOption] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [objectiveOption, setObjectiveOption] = useState("");
  const [objective, setObjective] = useState("");

  const [TMB, setTMB] = useState(0);  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações
    if (age <= 0 || age === "") {
      alert("Digite sua Idade.");
      return;
    } else if (gender === "") {
      alert("Selecione o Sexo.");
      return;
    } else if (weight <= 0 || weight === "" || weight.toString().length > 5) {
      alert("Digite um Peso (em kg) válido.");
      return;
    } else if (height <= 0 || height === "" || height.toString().length > 3) {
      alert("Digite uma Altura (em cm) válida.");
      return;
    } else if (lifestyleOption === "") {
      alert("Selecione o Nível de Atividade.");
      return;
    } else if (objectiveOption === "") {
      alert("Selecione seu Objetivo.");
      return;
    }

    // Nível de Atividade
    switch (lifestyleOption) {
      case "SE":
        setLifestyle(1.4);
        break;
      case "PA":
        setLifestyle(1.5);
        break;
      case "A":
        setLifestyle(1.6);
        break;
      case "MA":
        setLifestyle(1.7);
        break;
      case "EA":
        setLifestyle(1.9);
        break;
      default:
        break;
    }

    // Objetivo
    switch (objectiveOption) {
      case "E":
        setObjective(-500);
        break;
      case "M":
        setObjective(0);
        break;
      case "G":
        setObjective(500);
        break;
      default:
        break;
    }

    // Definir TMB
    setTMB(
      gender === "M"
        ? 66 + 13.8 * weight + 5.0 * height - 6.8 * age
        : 655 + 9.6 * weight + 1.9 * height - 4.7 * age
    );

    // Reset states
    setAge("");
    setGender("");
    setWeight("");
    setHeight("");
    setLifestyleOption("");
    setObjectiveOption("");
  };
  // Definir Taxa Metabólica
  const TM = TMB

  // Definir GET
  const GET = TMB * lifestyle

  // Definir VET
  const VET = GET + objective

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Idade:</span>
          <input
            type="number"
            placeholder="Idade em anos"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>
        <label>
          <span>Sexo:</span>
          <select onChange={(e) => setGender(e.target.value)} value={gender}>
            <option value=""></option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </label>
        <label>
          <span>Peso:</span>
          <input
            type="number"
            placeholder="Peso em kg (Ex: 65.5)"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            maxLength="4"
          />
        </label>
        <label>
          <span>Altura:</span>
          <input
            type="number"
            placeholder="Altura em cm (ex: 170)"
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
            <option value=""></option>
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
            <option value=""></option>
            <option value="E">Emagrecer</option>
            <option value="M">Manter</option>
            <option value="G">Ganhar peso</option>
          </select>
        </label>
        <button type="submit">CALCULAR</button>
      </form>
      <AnswerForm TB={TM} GET={GET} VET={VET} objectiveOption={objectiveOption}/>
    </div>
  );
};

export default Form;
