import axios from '@/axios'

export default {
  state: {
      orders: [],
      order: null,
  },
  getters: {
      orders: state => state.orders,
      order: state => state.order,
  },
  mutations: {
      SET_ORDERS: (state, orders) => {
          state.orders = orders
          
      },
      SET_ORDER: (state, order) => {
        state.order = order
        
    }
  },
  actions: {
      getOrders: async ({commit}) => {
        const res = await axios.get('orders')
          commit('SET_ORDERS', res.data)
      },
      getOrderById: async ({commit}, id) => {
      const res = await axios.get('order/' +id)
      commit('SET_ORDER', res.data)
      }
  }
}
