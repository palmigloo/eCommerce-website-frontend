import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import token from '../../config.js'
import Reviews from './Components/Reviews/Reviews.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Questions from './Components/Questions/Questions.jsx';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: black;
  grid-template-rows: 6fr 2fr 1fr 2fr;
  grid-gap: 0.25rem;
  text-align-center;
  grid-template-areas:
    "product-details"
    "reviews"
    "questions"
    "related-products";
`;

const PDdiv = styled.div`
  grid-area: product-details;
  border: solid 1px cornflowerblue;
  padding: 5px;
  margin:5px;
`;

const Qdiv = styled.div`
  grid-area: questions;
  border: solid 1px black;
  padding: 5px;
  margin:5px;
`;

const Rdiv = styled.div`
  grid-area: reviews;
  border: solid 1px lightblue;
  padding: 5px;
  margin:5px;
  background: blushlavender

`;

const RPdiv = styled.div`
  grid-area: related-products;
  border: solid 1px maroon;
  padding: 5px;
  margin:5px;
`;



export default function App() {
  const [renderedProduct, setRenderedProduct] = useState({});
  const [localInfo, setLocalInfo] = useState(JSON.parse(localStorage.getItem('cookie')));

  const changeRenderedProduct = (id) => {
    axios.get(`/products/${id}`, { headers: { Authorization: token.TOKEN } })
      .then((data) => { setRenderedProduct(data.data); });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favorites'))) {
      setLocalInfo(JSON.parse(localStorage.getItem('favorites')))
    } else {
      localStorage.setItem('favorites', JSON.stringify({}))
      setLocalInfo(JSON.parse(localStorage.getItem('favorites')))
    }
    axios.get('/products', { headers: { Authorization: token.TOKEN } })
      .then((data) => { setRenderedProduct(data.data[0]); });
  }, []);

  const [revNum, setRevNum] = useState(2);
  const [qNum, setqNum] = useState(2);
  const ref = React.useRef(null);

  const updateFavorites = (styleId) => {
    if (localInfo[styleId]) {
      delete localInfo[styleId];
      localStorage.setItem('favorites', JSON.stringify(localInfo))
      setLocalInfo(JSON.parse(localStorage.getItem('favorites')));
    } else {
      localInfo[styleId] = true;
      localStorage.setItem('favorites', JSON.stringify(localInfo))
      setLocalInfo(JSON.parse(localStorage.getItem('favorites')));
    }
  }

  const handleReviewScrollClick = () => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  };


  return (

    <Container>
      <PDdiv>
        <ProductDetails
          renderedProduct={renderedProduct}
          handleReviewScrollClick={handleReviewScrollClick}
          favoritesInfo ={localInfo}
          updateFavorites={updateFavorites}
        />
      </PDdiv>
      <Rdiv>
        <Reviews refProp={ref} renderedProduct={renderedProduct} setRevNum={setRevNum} revNum={revNum}/>
      </Rdiv>
      <Qdiv>
        <Questions renderedProduct={renderedProduct} setqNum={setqNum} qNum={qNum}/>
      </Qdiv>
      <RPdiv>
        <RelatedProducts
          changeRenderedProduct={changeRenderedProduct}
          productId={renderedProduct.id}
          setRevNum={setRevNum}
          setqNum={setqNum}
        />
      </RPdiv>
    </Container>

  );
}

ReactDOM.render(<App />, document.getElementById('root'));
