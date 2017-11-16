var Product = function(name, price){
	this.name = name;
	this.price = price;
}

var product = [];

product.push(new Product("sumsung J5",3999));
product.push(new Product("sumsung J7",4999,2,1));
product.push(new Product("Apple iPhone 6 32GB Space Gray",10999));
product.push(new Product("Apple iPhone 5s 16GB Space Gray",7777));
product.push(new Product("Apple iPhone 7 32GB Gold",17999));
product.push(new Product("Apple iPhone 7 Plus 128GB Gold",25999));
product.push(new Product("Samsung Galaxy S8 64GB Midnight Black",22999));
product.push(new Product("Samsung Galaxy A5 2017 Duos SM-A520 Black",11999));
product.push(new Product("Samsung Galaxy S8 Plus 64GB Maple Gold",26999));
product.push(new Product("Xiaomi Mi6 6/64GB Black",12499));

$("#searchForm").on("input",function(){
        console.clear();
        $('#catalog').html('');
    	let value = $(this).val();
    	for(var i = 0; i < product.length; i++){
    		if(product[i].name.indexOf(value) > -1 && value != ''){
    			$('<p></p>').appendTo("#catalog").text(product[i].name);
    		}
    	};

    });