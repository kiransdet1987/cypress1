class ProductPage{

  
    checkOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }


}

export default ProductPage;  // this command makes javascript to expose for all the scripts
