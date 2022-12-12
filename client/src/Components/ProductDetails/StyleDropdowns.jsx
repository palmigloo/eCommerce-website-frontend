import React from 'react';
// import RelatedProducts from './RelatedProducts.jsx';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart as hollowHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 50%, 50%;
  grid-template-rows: 75%, 50%;
  z-index: 1;
  width: 35vw;
  height: 8vw;
`;

const SizeDropdownContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  z-index: 2;
  border: solid 1px cornflowerblue;
  max-height: 40px;
  width: 95%
`;

const SizeDropdownHeader = styled.div`
  z-index: 5;
  width: 100%
`;

const SizeDropdownListContainer = styled.div`
  z-index: 5;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  max-height: 90px;
  width: 100%;
`;

const SizeDropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SizeListItem = styled.li`
`;

const QtyDropdownContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  z-index: 2;
  border: solid 1px cornflowerblue;
  max-height: 40px;
  width: 100%;
  padding-bottom: 10%;
`;

const QtyDropdownHeader = styled.div`
  z-index: 5;
  max-width: 90%;
`;

const QtyDropdownListContainer = styled.div`
  z-index: 5;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  max-height: 90px;
  max-width: 90%;
`;

const QtyDropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const QtyListItem = styled.li`
`;

const AddCartContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
  border: solid 1px cornflowerblue;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 95%
`;

const AddCartButton = styled.button`
  cursor: pointer;

`;

const FavContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  border: solid 1px cornflowerblue;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

const FavButton =styled.button`

`;



export default function StyleDropdowns ({selectedStyle, favoritesInfo, updateFavorites}) {
  const [sizeOpen, setSizeOpen] = React.useState(false);
  const [sizeOption, setSizeOption] = React.useState('Select Size');
  const [sizeList, setSizeList] = React.useState([]);
  const [qtyOpen, setQtyOpen] = React.useState(false);
  const [QtyOption, setQtyOption] = React.useState('-');
  const [qtyList, setQtyList] = React.useState([]);
  const [favorite, setFavorite] = React.useState(false);

  React.useEffect(() => {
    if (selectedStyle && selectedStyle.skus) {
      setSizeList(Object.keys(selectedStyle.skus)
      .filter((sizeId) => selectedStyle.skus[sizeId].quantity>0)
      .map((sizeId) => {return {sizeId: sizeId, quantity: selectedStyle.skus[sizeId].quantity, size: selectedStyle.skus[sizeId].size}}))
      setSizeOption('Select Size');
      setSizeOpen(false);
      setQtyOption('-');
      setQtyOpen(false);
      setQtyList([]);
      if (favoritesInfo) {
        if (favoritesInfo[selectedStyle.style_id]) {
          setFavorite(true);
        } else {
          setFavorite(false);
        }
      }
    }
  },  [selectedStyle])

  const loadQty = (quantity) => {
    var list = [];
    for (var i = 1; i <= quantity; i++) {
      list.push(i.toString());
      if (i === 15) {
        break;
      }
    }
    setQtyList(list);
  }

  const addCartSubmit = (e) => {
    // console.log('added to cart');
    if (sizeOption.length > 2) {
      setSizeOpen(true);
      setSizeOption('Please Select Size');
    }
  }
  return (
    <StyleContainer>
      <SizeDropdownContainer>
        <SizeDropdownHeader onClick={() => setSizeOpen(!sizeOpen)} >
          {sizeOption}
        </SizeDropdownHeader>
        {sizeOpen && (
          <SizeDropdownListContainer>
          <SizeDropdownList>
            {sizeList.map((sizeObj) => <SizeListItem key={sizeObj.sizeId} onClick={() => {setSizeOption(sizeObj.size); setSizeOpen(!sizeOpen); loadQty(sizeObj.quantity); setQtyOption('1')}}>{sizeObj.size}</SizeListItem>)}
          </SizeDropdownList>
        </SizeDropdownListContainer>
        )}

      </SizeDropdownContainer>
      <QtyDropdownContainer>
        <QtyDropdownHeader onClick={() => { if(qtyList.length > 0) {setQtyOpen(!qtyOpen)} }}>
          {QtyOption}
        </QtyDropdownHeader>
        {qtyOpen && (
          <QtyDropdownListContainer>
            <QtyDropdownList>
              {qtyList.map((qty) => <QtyListItem key={qty} onClick={() => {setQtyOption(qty); setQtyOpen(!qtyOpen) }}>{qty}</QtyListItem>)}
            </QtyDropdownList>
          </QtyDropdownListContainer>
        )}

      </QtyDropdownContainer>
      <AddCartContainer>
        <AddCartButton type="submit" onClick={() => addCartSubmit()}>Add to Cart</AddCartButton>
      </AddCartContainer>
      <FavContainer>
        <FavButton onClick={() => {updateFavorites(selectedStyle.style_id); setFavorite(!favorite)}}>{favorite?(<FontAwesomeIcon icon={faHeart} />):(<FontAwesomeIcon icon={hollowHeart} />)}</FavButton>
      </FavContainer>
    </StyleContainer>
  )
}
