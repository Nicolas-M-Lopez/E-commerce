class ProductManager{
    constructor(){
        this.products = []     
    }

    getProducts(){
        console.log(this.products)
    }

    getProductById(id){
      const productExistente = this.products.find(product => product.id === id)
      if(productExistente){
        console.log(productExistente)
      }else{
        console.error('Not found')
      }
    }

    addProduct({title,description,price,thumbnail,stock}){
        const productExistente = this.products.find(product => product.title === title)
        if(productExistente){
          console.error('Este producto ya se encuentra cargado')
        } else {
      let id
      if (this.products.length === 0) {
        id = 0
      } else {
        let lastProduct = this.products[this.products.length-1]
        id = lastProduct.id + 1
      }
      let product = {id,title,description,price,thumbnail,stock}
      this.products.push(product)  
    }
}
}

let product = new ProductManager()
product.addProduct({title:'Audi R8', description:'Esta nueva gama de audi es deportiva', price:80000, thumbnail:'sin imagen', stock:10}) 
product.addProduct({title:'Audi R7', description:'Esta nueva gama de audi es d', price:8000, thumbnail:'sin imagen', stock:1}) 
product.addProduct({title:'Audi R6', description:'Esta nueva gama de audi es d', price:800, thumbnail:'sin imagen', stock:15}) 
product.addProduct({title:'Audi R6', description:'Esta nueva gama de audi es d', price:800, thumbnail:'sin imagen', stock:15}) 
product.addProduct({title:'Audi R5', description:'Esta nueva gama de audi es d', price:800, thumbnail:'sin imagen', stock:15}) 
product.getProducts()
product.getProductById(2)
product.getProductById(7)