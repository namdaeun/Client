import { useEffect, useState } from "react";
import { quoteList } from '../../../constants/quoteList';
import { quote } from "./Quote.style";
import { Theme } from "../../../styles/theme";

const Quote = () => {
  const [curIdx, setCurIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurIdx(prev => (prev + 1) % quoteList.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section css={[Theme.fonts.quote, quote]} key={curIdx}>{quoteList[curIdx]}</section>
  );
};



export default Quote;