import React from "react";
import Urunler from "../components/Urunler";
function UrunBilgiler() {
  return (
    <div>
      <Urunler isim="ayakkabı" fiyat={9100} />
      <hr />
      <Urunler isim="pantolon" fiyat={2400} />
    </div>
  );
}

export default UrunBilgiler;
