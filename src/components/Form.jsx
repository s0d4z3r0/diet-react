import { useState } from "react";
import "./Form.css";


const Form = () => {
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [lifestyle, setLifestyle] = useState('')
    const [objective, setObjective] = useState('')

    const [TMB, setTMB] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(age <= 0 || age === ''){
            alert('Digite sua Idade.')
            return
        }else if(gender === ''){
            alert('Selecione o Sexo.')
            return
        }else if(weight <= 0 || weight === '' || weight.toString().length > 5 ){
            alert('Digite um Peso (em kg) válido.')
            return
        }else if(height <= 0 || height === '' || height.toString().length > 3 ){
            alert('Digite uma Altura (em cm) válida.')
            return
        }else if(lifestyle === ''){
            alert('Selecione o Nível de Atividade.')
            return
        }else if(objective === ''){
            alert('Selecione seu Objetivo.')
            return
        }


        console.log(age, gender, weight, height, lifestyle, objective)
        setAge('')
        setGender('')
        setWeight('')
        setHeight('')
        setLifestyle('')
        setObjective('')
    }

    
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Idade:</span>
          <input type="number" placeholder="Idade em anos" onChange={e => setAge(e.target.value)} value={age}/>
        </label>
        <label>
          <span>Sexo:</span>
          <select onChange={e => setGender(e.target.value)} value={gender}>
            <option value="" ></option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </label>
        <label>
          <span>Peso:</span>
          <input type="number" placeholder="Peso em kg (Ex: 65.5)" onChange={e => setWeight(e.target.value)} value={weight} maxLength="4"/>
        </label>
        <label>
          <span>Altura:</span>
          <input type="number" placeholder="Altura em cm (ex: 170)" onChange={e => setHeight(e.target.value)} value={height}/>
        </label>
        <label>
          <span>Nível de Atividade:</span>
          <select onChange={e => setLifestyle(e.target.value)} value={lifestyle}>
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
          <select onChange={e => setObjective(e.target.value)} value={objective}>
            <option value="" ></option>
            <option value="500">Emagrecer</option>
            <option value="0">Manter</option>
            <option value="501">Ganhar peso</option>
          </select>
        </label>
        <button type="submit">CALCULAR</button>
      </form>
    </div>
  );
};

export default Form;
