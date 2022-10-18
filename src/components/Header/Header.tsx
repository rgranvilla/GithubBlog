import logo from '../../assets/logo.svg';
import leftEffect from '../../assets/left-effect.svg';
import rightEffect from '../../assets/right-effect.svg';
import { Wrapper } from './Header.styles';

function Header() {
  return (
    <Wrapper>
      <div className="left">
        <img src={leftEffect} alt="" />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <img src={rightEffect} alt="" />
      </div>
    </Wrapper>
  );
}

export { Header };
