package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.BagsPage;
import com.softwaretestingboard.magento.pages.HomePage;
import com.softwaretestingboard.magento.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class GearTestSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on Gear menu$")
    public void iMouseHoverOnGearMenu() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().mouseHoverToGearMenu();
    }

    @And("^I click on Bags tab$")
    public void iClickOnBagsTab() {
        new HomePage().clickOnBag();
    }

    @And("^I click on Overnight Duffle$")
    public void iClickOnOvernightDuffle() {
        new BagsPage().clickOnOvernightDuffelBag();
    }

    @Then("^I should see product name Overnight Duffle on that product page$")
    public void iShouldSeeProductNameOvernightDuffleOnThatProductPage() {
        String expectedText = "Overnight Duffle";
        String actualText = new BagsPage().verifyTextOverNigtDuffelBag();
        Assert.assertEquals(expectedText, actualText, "Not Displayed");
    }

    @And("^I change Qty to (\\d+)$")
    public void iChangeQtyTo(int arg0) {
        new BagsPage().chageQtyOfBag();
    }

    @And("^I click on Add to Cart$")
    public void iClickOnAddToCart() {
        new BagsPage().clickOnAddToCartProduct();
    }

    @Then("^I should see You added Overnight Duffle to your shopping cart\\.$")
    public void iShouldSeeYouAddedOvernightDuffleToYourShoppingCart() {
        String expectedText = "You added Overnight Duffle to your shopping cart.";
        String actualText = new BagsPage().verifyTextAddedToShoppingCartSuccessfully();
        Assert.assertEquals(expectedText, actualText, "Not Displayed");
    }

    @And("^I click on Shopping cart link into that message$")
    public void iClickOnShoppingCartLinkIntoThatMessage() {
        new BagsPage().clickOnShoppingCartLink();
    }

    @Then("^I should see product name Overnight Duffle$")
    public void iShouldSeeProductNameOvernightDuffle() {
        String expectedText = "Overnight Duffle";
        String actualText = new ShoppingCartPage().verifyTextBagName();
        Assert.assertEquals(expectedText, actualText, "Not Displayed");
    }

    @And("^I should see Qty is (\\d+)$")
    public void iShouldSeeQtyIs(int arg0) {
        String expectedText = "3";
        String actualText = new ShoppingCartPage().verifyQtyOfProduct();
        Assert.assertEquals(expectedText, actualText, "Not Displayed");
    }

    @And("^I should see price is \\$(\\d+)\\.(\\d+)$")
    public void iShouldSeePriceIs$(int arg0, int arg1) {
        String expectedText = "$135.00";
        String actualText = new ShoppingCartPage().verifyProductPrice();
        Assert.assertEquals(expectedText, actualText, "Not Displayed");
    }
    @And("^I change Qty (\\d+)$")
    public void iChangeQty(int arg0) {
        new ShoppingCartPage().changeQtyOfProduct();
    }

    @And("^I click on Update Shopping cart$")
    public void iClickOnUpdateShoppingCart() {
        new ShoppingCartPage().updateShoppingCart();
    }

    @Then("^I should see price \\$(\\d+)\\.(\\d+)$")
    public void iShouldSeePrice$(int arg0, int arg1) throws InterruptedException {
        Thread.sleep(2000);
        String expectedText = "$225.00";
        String actualText = new ShoppingCartPage().verifyUpdatedProductPrice();
        Assert.assertEquals(expectedText, actualText, "Not Displayed");
    }

}
