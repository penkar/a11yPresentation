import React from "react";
import "./App.css";

import {
  Assets,
  BadFormatting,
  BadFormatting2,
  Colors,
  GoodFormatting,
  SemanticHTML,
  TaxForms,
} from "./pages";
import { References } from "./pages/references";
import { Layout } from "./layout";

import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  { path: "/", element: <Assets /> },
  {
    path: "/semantichtml",
    element: (
      <div className="page1">
        <SemanticHTML />
      </div>
    ),
  },
  {
    path: "/taxforms",
    element: (
      <Layout title="Tax Forms - Cycorp">
        <TaxForms />
      </Layout>
    ),
  },
  {
    path: "/badformatting",
    element: (
      <Layout title="Bad Formatting - ShippingEasy">
        <BadFormatting />
      </Layout>
    ),
  },
  {
    path: "/badformatting2",
    element: (
      <Layout title="Bad Formatting2 - ShippingEasy">
        <BadFormatting2 />
      </Layout>
    ),
  },
  {
    path: "/goodformatting",
    element: (
      <Layout title="Good Formatting - ShippingEasy">
        <GoodFormatting />
      </Layout>
    ),
  },
  {
    path: "/colors",
    element: (
      <Layout title="Tax Forms">
        <Colors />
      </Layout>
    ),
  },
  {
    path: "/references",
    element: (
      <Layout title="Outside References">
        <References />
      </Layout>
    ),
  },
]);

export default App;
