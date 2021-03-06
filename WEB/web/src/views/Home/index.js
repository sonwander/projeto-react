import React, {useState, useEffect} from 'react';
import * as S from './styles';
import api from '../../services/api';
//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActivated, setFilterActivated] = useState('all');
  const [tasks, setTasks] = useState([]);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActivated}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
    })
  }

  useEffect(() => {
    loadTasks();
  },[filterActivated])


  return (
  <S.Container>
  <Header/>
    <S.FilterArea>
      <button type="button" onClick={() => setFilterActivated("all")}>
      <FilterCard title="Todos" activated={filterActivated == 'all'}/>
      </button>
      <button type="button" onClick={() => setFilterActivated("today")}>
      <FilterCard title="Hoje" activated={filterActivated == 'today'}/>
      </button>
      <button type="button" onClick={() => setFilterActivated("week")}>
      <FilterCard title="Semana" activated={filterActivated == 'week'}/>
      </button>
      <button type="button" onClick={() => setFilterActivated("month")}>
      <FilterCard title="Mês" activated={filterActivated == 'month'}/>
      </button>
      <button type="button" onClick={() => setFilterActivated("year")}>
      <FilterCard title="Ano" activated={filterActivated == 'year'} />
      </button>

    </S.FilterArea>
    <S.Title>
      <h2>Tarefas</h2>
    </S.Title>
    <S.Content>
      {
        tasks.map(t => (
        <TaskCard type={t.type} title={t.title} when={t.when}/>
        ))
      }
      
      

    </S.Content>
  <Footer/>
  </S.Container>
  )
}

export default Home;
