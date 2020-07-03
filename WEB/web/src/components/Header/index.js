import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
function Header() {
  return (
      <S.Container>
          <S.Left>
              <img src={logo} alt="Logo"/>
          </S.Left>
          <S.Right>
              <a href="#">INÍCIO</a>
              < span className="divider" />
              <a href="#">NOVA TAREFA</a>
              < span className="divider" />

              <a href="#">SINC CELULAR</a>
              < span className="divider" />

              <a href="#" id="notification">
                  <img src={bell} alt="Notificação" />
                  <span>5</span>
              </a>



          </S.Right>
      </S.Container>
  )
}

export default Header;
