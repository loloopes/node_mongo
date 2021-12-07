Tests made by Trybe Team!

First online CRUD API deployed by heroku with Atlas+MongoDB.

Accessible to everyone. 

https://serene-plateau-03643.herokuapp.com/products 
|- get '/' should return all products in db
|- post '/' should create a product and return product created. 
|  Quantity    should be a number > 0 & name should be a string 
|   with length   >= 5
|- get '/:id' should return a product for a given valid id
|- put '/:id' should update a product for a given valid id and return updated
|  product.
|- delete '/:id' should delete a product for a given valid id