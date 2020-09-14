import React, { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface Params {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<Params>();

  useEffect(() => {}, []);
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/64722377?s=460&u=e6f71cb5fdfe19f7730c15e363e642817e97db50&v=4"
            alt="eu"
          />
          <div>
            <strong>Rocketseat</strong>
            <p>Descrição</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues abertas </span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>fdfsdfs</strong>
            <p>dsdfsdds</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
