import { useState } from 'react';
import Image from 'next/image';

function Join({ onSubmit }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(phoneNumber);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '390px',
        height: '840px',
        margin: '0 auto', // 브라우저 가운데 정렬
      }}
    >
      <nav>
        <span>DAYTINY</span>
      </nav>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* 이용 약관 */}
      {/* 더보기 버튼 */}
    </div>
  );
}

export default Join;
