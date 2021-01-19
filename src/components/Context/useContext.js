import React from 'react'

const ProductCatNameContext = React.createContext()
const ProductCatNameProvider = ProductCatNameContext.Provider
const ProductCatNameConsumer = ProductCatNameContext.Consumer

export {ProductCatNameProvider,ProductCatNameConsumer}