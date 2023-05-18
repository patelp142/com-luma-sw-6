package com.softwaretestingboard.magento.pages;

import com.softwaretestingboard.magento.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PantPage extends Utility {
    private static final Logger log = LogManager.getLogger(PantPage.class.getName());

    public PantPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "(//div[@aria-label='32'])[1]")
    WebElement pantSize;

    @CacheLookup
    @FindBy(xpath = "(//div[@option-label='Black'])[1]")
    WebElement pantColour;

    @CacheLookup
    @FindBy(xpath = "(//span[text()='Add to Cart'])[1]")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']")
    WebElement getTextAddedToShopingCart;

    @CacheLookup
    @FindBy(xpath = "//a[text()='shopping cart']")
    WebElement shoppingCartLink;

    public void mouseHoverAndClickOnPantSize() {
        log.info("Mouse hover and click on Pant size" + pantSize.toString());
        mouseHoverToElementAndClick(pantSize);
    }

    public void mouseHoverAndClickOnBlackColour() {
        log.info("Mouse hover and click on Black colour" + pantColour.toString());
        mouseHoverToElementAndClick(pantColour);
    }

    public void mouseHoverAndClickOnAddToCart() {
        log.info("Mouse hover and click on Add to cart" + addToCart.toString());
        mouseHoverToElementAndClick(addToCart);
    }

    public String verifyProductAddedToCartSuccessfully() {
        log.info("Verify product added to cart successfully" + getTextAddedToShopingCart.toString());
        return getTextFromElement(getTextAddedToShopingCart);
    }

    public void clickOnShoppingCart() {
        log.info("Click on shopping cart" + shoppingCartLink.toString());
        clickOnElement(shoppingCartLink);
    }
}
