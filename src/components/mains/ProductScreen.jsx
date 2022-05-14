import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductScreen() {
  const { state } = useLocation(); // pega o id do produto direcionado

  return (
    <h1>Tela do produto</h1>
  );
}
