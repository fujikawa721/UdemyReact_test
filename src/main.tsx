import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//creadteRootの<App />から呼び出される
//<>と</>はReact特有。複数行を返す時に<div>で囲まなければエラーが出る問題を解消できる。
//別にdivタグでも問題はない。
const App = () => {
  return (
    <>
      <h1>あああ</h1>
      <p>いいい</p>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
