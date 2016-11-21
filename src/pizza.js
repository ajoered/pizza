//Base & ingredient prices
var total = 10;
var pepPrice = 1;
var mushroomPrice = 1;
var greenPeppersPrice = 1;
var whiteSaucePrice = 3;
var glutenFreeCrustPrice = 5;

//Remove initial ingredients
$('.price ul li').remove();

//Remove crust & white sauce
$('.crust').toggleClass('crust-gluten-free')
$('.btn-crust').toggleClass('active')
$('.sauce').toggleClass('sauce-white')
$('.btn-sauce').toggleClass('active')

//Charge initial ingredients
if($('.btn-pepperonni').hasClass('active')) {
    $('.price ul').append('<li>$1 pepperonni</li>');
    total += pepPrice
  }

if($('.btn-mushrooms').hasClass('active')) {
	$('.price ul').append('<li>$1 mushroom</li>')
	total += mushroomPrice
  }

if($('.btn-green-peppers').hasClass('active')) {
	$('.price ul').append('<li>$1 green peppers</li>');
	total += greenPeppersPrice
  }

//Load total price
$('strong').text('$' + total);

//On Click Buttons
$(".btn-pepperonni").on('click', function(){
	$('.pep').fadeToggle(700);
	$('.btn-pepperonni').toggleClass('active');
	if($('.btn-pepperonni').hasClass('active')) {
    	$('.price ul').append('<li>$1 pepperonni</li>');
    	total += pepPrice;
	}   
	else {
		$("li:contains('$1 pepperonni')").remove();
		total -= pepPrice;
	};
	$('strong').text('$' + total);
});

$(".btn-mushrooms").on('click', function(){
	$('.mushroom').fadeToggle(700);
	$('.btn-mushrooms').toggleClass('active');
	if($('.btn-mushrooms').hasClass('active')) {
    	$('.price ul').append('<li>$1 mushroom</li>');
    	total += mushroomPrice;
	}   
	else {
		$("li:contains('$1 mushroom')").remove();
		total -= mushroomPrice;
	};
	$('strong').text('$' + total);
});

$(".btn-green-peppers").on('click', function(){
	$('.green-pepper').fadeToggle(700);
	$('.btn-green-peppers').toggleClass('active');
	if($('.btn-green-peppers').hasClass('active')) {
    	$('.price ul').append('<li>$1 green peppers</li>');
    	total += mushroomPrice;
	}   
	else {
		$("li:contains('$1 green peppers')").remove();
		total -= greenPeppersPrice;
	};
	$('strong').text('$' + total);
});

$(".btn-crust").on('click', function(){
	$('.crust').toggleClass('crust-gluten-free');
	$('.btn-crust').toggleClass('active')
	if($('.crust').hasClass('crust-gluten-free')) {
    	$('.price ul').append('<li>$'+ glutenFreeCrustPrice +' gluten-free crust</li>');
    	total += glutenFreeCrustPrice;
	}   
	else {
		$("li:contains('gluten-free crust')").remove();
		total -= glutenFreeCrustPrice;
	};
	$('strong').text('$' + total);
});

$(".btn-sauce").on('click', function(){
	$('.sauce').toggleClass('sauce-white');
	$('.btn-sauce').toggleClass('active')
	if($('.sauce').hasClass('sauce-white')) {
    	$('.price ul').append('<li>$3 white sauce</li>');
    	total += whiteSaucePrice;
	}   
	else {
		$("li:contains('$3 white sauce')").remove();
		total -= whiteSaucePrice;
	};
	$('strong').text('$' + total);
});





// $('.price li:nth-child(1)').on('click', function(){
//   var price = $('.price li:nth-child(1)').val();
//   $('#reference').before(title);
// });