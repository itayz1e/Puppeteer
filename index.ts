import puppeteer, { Browser, Page } from "puppeteer";
import * as fs from "fs/promises";

(async () => {
  const googleImageUrl = `https://www.google.com/search?client=firefox-b-d&sca_esv=564039451&sxsrf=AB5stBijTO8K-5JESmS55PlixhoKCI9yuw:1694291783167&q=vodka&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiHoobfsJ6BAxUj2QIHHeUDBcgQ0pQJegQIDBAB`;

  const browser: Browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: "./tmp",
  });

  const page: Page = await browser.newPage();

  const searchQuery = await page.evaluate(() =>
    prompt("Enter a search query:")
  );

  if (!searchQuery) {
    console.log("Search query not provided. Exiting.");
    await browser.close();
    return;
  }

  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    searchQuery
  )}`;

  await page.goto(googleSearchUrl);

  try {
    await page.waitForSelector("div.GKS7s", { visible: true });
    const imagesDiv = await page.$("div.GKS7s");
    if (imagesDiv) {
      await Promise.all([
        imagesDiv.click(),
        page.waitForNavigation({ waitUntil: "domcontentloaded" }),
      ]);
    } else {
      console.error("No div with class 'GKS7s' found.");
    }

    const imageData: any[] = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll("img.rg_i"));
      return images.slice(0, 3).map((image) => {
        return {
          imgSrc: image.getAttribute("src"),
        };
      });
    });

    for (let i = 0; i < imageData.length; i++) {
      const imageUrl = imageData[i].imgSrc;
      await page.goto(imageUrl);
      await page.screenshot({ path: `screenshot_${i + 1}.png` });
    }

    console.log(imageData);

    try {
      await fs.writeFile("dataOfImages.json", JSON.stringify(imageData));
      console.log("Data saved to dataOfImages.json");
    } catch (err) {
      console.error("Error saving data:", err);
    }

    await page.evaluate(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
    });

    console.log("Script completed.");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await browser.close();
  }
})();
