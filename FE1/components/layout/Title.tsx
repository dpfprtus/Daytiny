import logo from '../../public/assets/icons/logo.svg';
import Image from 'next/image';

function Title() {
  return (
    <>
      <Image src={logo} alt="Daytiny Logo" />
    </>
  );
}

export default Title;
