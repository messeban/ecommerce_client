import React, {useEffect, useState} from 'react';
import customAxios from '../../util/axios';

import './Products.css';
import Container from '../../components/UI/Container/Container';
import ContainerCards from '../../components/UI/ContainerCards/ContainerCards';
import Product from '../../components/Product/Product';
import { Button } from '../../components/Button/Button';

function Products() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        customAxios.get("/products/").then(
          (result) => {
            console.log(result.data.products);
            setIsLoaded(true);
            setItems(result.data.products);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      }, []);

      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else if (items.length === 0) {
        return (
          <div className='container'>
            <h1>Products</h1>
            <h3>No Products</h3>
          </div>
        );
      } else {


    return (
        <Container>
            <h1 className="title">Products</h1>
                <div className="filter">
                    <h1>Tags:</h1>
                    <Button>Computer</Button>
                    <Button>TV</Button>
                    <Button>Smartphone</Button>
                    <Button>HI-FI</Button>
                </div>
                <div className="filter">
                    <h1>Category:</h1>
                    <Button>Computer</Button>
                    <Button>TV</Button>
                    <Button>Smartphone</Button>
                    <Button>HI-FI</Button>
                </div>
            <ContainerCards>
            {
               items.map((item,index) => (
                    <Product brand={item.brand} id={item.id} name={item.name} price={item.unitPrice} description={item.description} />
                ))
            }
            </ContainerCards>
        </Container>
    )
      }
}

export default Products
