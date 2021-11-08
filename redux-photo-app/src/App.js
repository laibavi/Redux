import productsApi from "api/productsApi";
import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductListApi = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productsApi.getAll(params);
        console.log(response)
        setProductList(response)
      } catch (error) {
        console.log('Failed to fetch product list: ', error)
      }
    }
    getProductListApi()
  }, [])

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
