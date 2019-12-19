import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kihai-masculino/88/D18-4359-088/D18-4359-088_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />
        <strong>Tenis legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kihai-masculino/88/D18-4359-088/D18-4359-088_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />
        <strong>Tenis legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kihai-masculino/88/D18-4359-088/D18-4359-088_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />
        <strong>Tenis legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kihai-masculino/88/D18-4359-088/D18-4359-088_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />
        <strong>Tenis legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kihai-masculino/88/D18-4359-088/D18-4359-088_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />
        <strong>Tenis legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kihai-masculino/88/D18-4359-088/D18-4359-088_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />
        <strong>Tenis legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
