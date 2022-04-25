import React from "react";
import Cards from './Cards';
import india from "../../Assets/india.jpg";
import aus from "../../Assets/aus.jpg";
import jap from "../../Assets/jap.jpg";
import us from "../../Assets/us.jpg";

export default function OneCard() {
  return (
    <div>
      <Cards url={india} header="INDIA" mail="india@india.com" />
      <Cards url={aus} header="AUSTRALIA" mail="aus@aus.com" />
      <Cards url={jap} header="JAPAN" mail="japan@japan.com" />
      <Cards url={us} header="USA" mail="usa@usa.com" />
    </div>
  );
}
