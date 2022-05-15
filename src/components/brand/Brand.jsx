import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img alt="photos" src={google} />
    </div>
    <div>
      <img alt="photos" src={slack} />
    </div>
    <div>
      <img alt="photos" src={atlassian} />
    </div>
    <div>
      <img alt="photos" src={dropbox} />
    </div>
    <div>
      <img alt="photos" src={shopify} />
    </div>
  </div>
);

export default Brand;
