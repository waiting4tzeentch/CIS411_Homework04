(function() {
	var app = angular.module('store-directives', []);

	app.directive('productDescription', function(){
		return{
			restrict: 'E',
			templateUrl:"product-description.html"
		};
	});

	// product reviews
	app.directive("productReviews", function() {
		return {
			restrict: 'E',
			templateUrl: "product-reviews.html"
		};
	});

	// product specs
	app.directive("productSpecs", function() {
		return {
			restrict:"A",
			templateUrl: "product-specs.html"
		};
	});

	// product tabs
	app.directive('productTabs', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function() {
				this.tab = 1;
				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				}; // end checkTab

				this.setTab = function(activeTab) {
					this.tab = activeTab;
				}; // end activeTab
			},
			controllerAs: 'tab'
		}; // end productTabs function
	});


	// product gallery
	app.directive('productGallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function() {
				this.current = 0;
				this.setCurrent = function(imageNumber) {
  				this.current = imageNumber || 0;
  			};
  		},
  		controllerAs: "gallery"
  	};
  });


})();