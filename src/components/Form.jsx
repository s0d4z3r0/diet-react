import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [objective, setObjective] = useState("");

  const [TMB, setTMB] = useState("");
  const [GET, setGET] = useState("");
  const [VET, setVET] = useState("");

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
    } else if (lifestyle === "") {
      alert("Selecione o Nível de Atividade.");
      return;
    } else if (objective === "") {
      alert("Selecione seu Objetivo.");
      return;
    }

    // Definir GET e VET dependendo o gender (Refazer para definir instantaneamente)
    if (gender === "M") {
      setTMB(
        66 +
          13.8 * parseFloat(weight) +
          5.0 * parseInt(height) -
          6.8 * parseInt(age)
      );
      setGET(parseFloat(TMB) * parseFloat(lifestyle));
      setVET(
        objective <= 500
          ? parseInt(GET) - parseInt(objective)
          : parseInt(GET) + parseInt(objective)
      );
    } else {
      setTMB(
        655 +
          9.6 * parseFloat(weight) +
          1.9 * parseInt(height) -
          4.7 * parseInt(age)
      );
      setGET(parseFloat(TMB) * parseFloat(lifestyle));
      setVET(
        objective <= 500
          ? parseInt(GET) - parseInt(objective)
          : parseInt(GET) + parseInt(objective)
      );
    }

    /*
    setTMB(
      gender === "M"
        ? 66 + 13.8 * weight + 5.0 * height - 6.8 * age
        : 655 + 9.6 * weight + 1.9 * height - 4.7 * age
    );

    setGET(parseInt(TMB) * parseFloat(lifestyle));

    switch (objective) {
      case "500":
        setVET(parseInt(GET) - 500);
        break;
      case "0":
        setVET(parseInt(GET));
        break;
      case "501":
        setVET(parseInt(GET) + 500);
        break;
      default:
        break;
    }
    */

    // Reset states
    console.log(age, gender, weight, height, lifestyle, objective);
    console.log(`TMB = ${parseInt(TMB)}`);
    console.log(`GET = ${parseInt(GET)}`);
    console.log(`VET = ${parseInt(VET)}`);
    setAge("");
    setGender("");
    setWeight("");
    setHeight("");
    setLifestyle("");
    setObjective("");
  };

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
            onChange={(e) => setLifestyle(e.target.value)}
            value={lifestyle}
          >
            <option value=""></option>
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
          <select
            onChange={(e) => setObjective(e.target.value)}
            value={objective}
          >
            <option value=""></option>
            <option value="501">Ganhar peso</option>
            <option value="0">Manter</option>
            <option value="500">Emagrecer</option>
          </select>
        </label>
        <button type="submit">CALCULAR</button>
      </form>
      {Math.floor(TMB)}
      <p>{Math.floor(GET)}</p>
      <p>{Math.floor(VET)}</p>
    </div>
  );
};

export default Form;
