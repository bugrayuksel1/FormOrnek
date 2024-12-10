import React from "react";

function Urunler({ isim, fiyat }) {
  return (
    <div>
      <div>
        <div>Ürün Bilgileri:</div>
        <div>Adı:{isim} </div>
        <div>Fiyat: {fiyat}</div>
      </div>
    </div>
  );
}

export default Urunler;
