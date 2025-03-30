import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Agrega el artículo al carrito
    },
    removeItem: (state, action) => {
      // Lógica para eliminar un artículo (si la vas a implementar)
    },
    updateQuantity: (state, action) => {
      // Lógica para actualizar cantidad (si la vas a implementar)
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;


