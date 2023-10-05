import { useEffect, useState } from "react";
import AnswerForm from "./components/AnswerForm";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
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

  // Definir GET
  const GET = TMB * lifestyle;

  // Definir VET
  const VET = GET + objective;

  // Definir tamanho da tela
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Monitorar o tamanho da tela
  useEffect(() => {
    const changeSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", changeSize);

    return () => window.removeEventListener("resize", changeSize);
  });
  return (
    <>
      <div className="diet_bg_layer">
        <div className="diet">
          <div className="title">
            <h1>Calculadora Calórica</h1>
          </div>

          <div className="main_form">
            <Form
              handleSubmit={handleSubmit}
              windowSize={windowSize}
              setAge={setAge}
              age={age}
              setGender={setGender}
              gender={gender}
              setWeight={setWeight}
              weight={weight}
              setHeight={setHeight}
              height={height}
              setLifestyleOption={setLifestyleOption}
              lifestyleOption={lifestyleOption}
              setObjectiveOption={setObjectiveOption}
              objectiveOption={objectiveOption}
            />
          </div>

          <div className="main_result">
            <AnswerForm VET={VET} />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
