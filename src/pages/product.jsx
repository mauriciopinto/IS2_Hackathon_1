import React from "react";
import { RegularForm, FormElement } from "../components/Form";
import { Grid, GridElement } from "../components/Grid";
import NavBar from "../components/NavBar";
import { deleteProduct, getProductDataById, patchProduct } from "../services/product";

class ProductPage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            productName: '',
            productDescription: '',
            productStock: '',
            productPrice: '',
            admin: true,
            edit: false
        }

        this.addToCart = this.addToCart.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.setEditable = this.setEditable.bind(this)

        if (!localStorage.getItem('user')) {
            window.location.href = '/login'
        }
    }

    componentDidMount () {
        getProductDataById (this.props.id)
        .then ((res) => {
            this.setState({
                productName: res.data.name,
                productDescription: res.data.description,
                productStock: res.data.stock,
                productPrice: res.data.price
            })
        })
    }

    setEditable () {
        this.setState ({
            edit: !this.state.edit
        }, () => {
            if (this.state.edit) {
                let name = document.getElementById ("pname")
                let desc = document.getElementById ("pdesc")
                let stock = document.getElementById ("pstock")
                let price = document.getElementById ("pprice")
                name.value = this.state.productName
                desc.value = this.state.productDescription
                stock.value = this.state.productStock
                price.value = this.state.productPrice
            }
        })
    }

    updateProduct (e) {
        e.preventDefault()

        let productData = {
            _id: this.props.id,
            name: e.target[0].value,
            description: e.target[1].value,
            stock: e.target[2].value,
            price: e.target[3].value
        }

        patchProduct (productData)
    }

    addToCart () {
        let cart = JSON.parse(localStorage.getItem('cart')) || []

        let present = false
        for (let p in cart) {
            if (p.productId === this.props.id) {
                p.quantity = p.quantity + 1
                present = true
            }
        }
        if (!present) {
            cart.push ({
                productId: this.props.id,
                productName: this.state.productName,
                quantity: 1
            })
        }

        localStorage.setItem('cart', JSON.stringify (cart))
        let total = parseInt (localStorage.getItem ('total'))
        total = total + 1
        localStorage.setItem ('total', total)
        window.location.href = '/'
    }

    removeProduct () {
        deleteProduct (this.props.id)
        .then ((res) => {
            console.log (res)
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    render () {
        return (
            <Grid rows="10" columns="8">
                <GridElement gridRow="1 / 2" gridColumn="1 / 9" boxStyle={true}>
                    <NavBar />
                </GridElement>
                <GridElement gridRow="3 / 8" gridColumn="3 / 7" boxStyle={true}>
                    <RegularForm editable={this.state.edit} submitText="Actualizar" handleSubmit={this.updateProduct}>
                        <FormElement type="text" value={this.state.productName} name="Producto" placeholder="Nombre del producto" editable={this.state.edit} id="pname"/>
                        <FormElement type="text" value={this.state.productDescription} name="Descripcion" placeholder="Descripcion del producto" editable={this.state.edit} id="pdesc"/>
                        <FormElement type="number" value={this.state.productStock} name="Stock" placeholder="Stock del producto" editable={this.state.edit} id="pstock"/>
                        <FormElement type="text" value={this.state.productPrice} name="Precio" placeholder="Precio del producto" editable={this.state.edit} id="pprice"/>
                    </RegularForm>
                </GridElement>
                {
                    this.state.admin ? <GridElement gridRow="9" gridColumn="4"> <button onClick={this.removeProduct}>Eliminar</button></GridElement> : <></>
                }
                <GridElement gridRow="9" gridColumn="5">
                    <button onClick={this.state.admin ? this.setEditable : this.addToCart}>{this.state.admin ? "Editar" : "Agregar al Carrito"}</button>
                </GridElement>
            </Grid>
        )
    }
}

export default ProductPage;