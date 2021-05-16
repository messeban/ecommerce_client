import React from 'react';
import './Products.css';

import ContainerCards from '../../components/UI/ContainerCards/ContainerCards';
import Product from '../../components/Product/Product';
import { Button } from '../../components/Button/Button';

function Products() {
    return (
        <ContainerCards>
            <div>
                <Button>Hello</Button>
                <Button>Hello</Button>
                <Button>Hello</Button>
            </div>
            <Product name="Test1" price='25' description='test'/>
            <Product name="Test1" price='25' description='test'/>
            <Product name="Test1" price='25' description='test'/>
            <Product name="Test1" price='25' description='test'/>
            <Product name="Test1" price='25' description='test'/>
        </ContainerCards>
    )
}

export default Products
