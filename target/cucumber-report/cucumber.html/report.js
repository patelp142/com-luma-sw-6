$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GearTest.feature");
formatter.feature({
  "line": 1,
  "name": "Gear Page Test",
  "description": "",
  "id": "gear-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5713180100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should add product to cart successfully",
  "description": "",
  "id": "gear-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Bags tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see product name Overnight Duffle on that product page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I change Qty to 3",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see You added Overnight Duffle to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see product name Overnight Duffle",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see Qty is 3",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see price is $135.00",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I change Qty 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Update Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 136301400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 2203088700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnBagsTab()"
});
formatter.result({
  "duration": 1311775500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnOvernightDuffle()"
});
formatter.result({
  "duration": 1300729700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffleOnThatProductPage()"
});
formatter.result({
  "duration": 47626500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.iChangeQtyTo(int)"
});
formatter.result({
  "duration": 295997800,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 91546500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "duration": 2024918300,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 2517854500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 50112500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "GearTestSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "duration": 77014600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "GearTestSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "duration": 620268600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.iChangeQty(int)"
});
formatter.result({
  "duration": 225292600,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnUpdateShoppingCart()"
});
formatter.result({
  "duration": 114240800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "GearTestSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "duration": 4599961000,
  "status": "passed"
});
formatter.after({
  "duration": 810302100,
  "status": "passed"
});
formatter.uri("MenTest.feature");
formatter.feature({
  "line": 1,
  "name": "Men Page Test",
  "description": "",
  "id": "men-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3794780900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Add Product to Cart Successfully",
  "description": "",
  "id": "men-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover Men menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Bottoms menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Pant menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on product name Cronus Yoga Pant and click on size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on Cronus Yoga Pant and click on colour Black",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on Cronus Yoga Pant and click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message You added Cronus Yoga Pant to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see that product name Cronus Yoga Pant",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see product size is 32",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see product colour Black",
  "keyword": "And "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverMenMenu()"
});
formatter.result({
  "duration": 2170782900,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnBottomsMenu()"
});
formatter.result({
  "duration": 155236100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iClickOnPantMenu()"
});
formatter.result({
  "duration": 1493365600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 65
    }
  ],
  "location": "MenTestSteps.iMouseHoverOnProductNameCronusYogaPantAndClickOnSize(int)"
});
formatter.result({
  "duration": 245673000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnCronusYogaPantAndClickOnColourBlack()"
});
formatter.result({
  "duration": 182286300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnCronusYogaPantAndClickOnAddToCartButton()"
});
formatter.result({
  "duration": 178005900,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeMessageYouAddedCronusYogaPantToYourShoppingCart()"
});
formatter.result({
  "duration": 1977724500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 4005742500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 25957400,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeThatProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 51069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 29
    }
  ],
  "location": "MenTestSteps.iShouldSeeProductSizeIs(int)"
});
formatter.result({
  "duration": 43507200,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeProductColourBlack()"
});
formatter.result({
  "duration": 39732300,
  "status": "passed"
});
formatter.after({
  "duration": 739672400,
  "status": "passed"
});
formatter.uri("WomenTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Page Test",
  "description": "",
  "id": "women-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3255511900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "User should Sort by Product Name Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Imouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Sort By filter Product Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2147142300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.imouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 140651100,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1519982700,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iSelectSortByFilterProductName()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldSeeProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 1669877900,
  "status": "passed"
});
formatter.after({
  "duration": 725672600,
  "status": "passed"
});
formatter.before({
  "duration": 3068732800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "User should Sort by Price Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Imouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Select Sort By filter Price",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see products price display in Low to High",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2152714200,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.imouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 152432300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1489998300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iSelectSortByFilterPrice()"
});
formatter.result({
  "duration": 15800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldSeeProductsPriceDisplayInLowToHigh()"
});
formatter.result({
  "duration": 3522121000,
  "status": "passed"
});
formatter.after({
  "duration": 781849300,
  "status": "passed"
});
});