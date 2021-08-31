const puppeteer = require("puppeteer");

function look_For_Titles(channel) {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
    await page.waitForSelector(".ytd-searchbox");
    await page.click(".ytd-searchbox");
    await page.type(".ytd-searchbox", youtuber);
    await page.click("#search-icon-legacy");
    await page.waitForSelector(".ytd-channel-renderer");
    await page.click(".ytd-channel-renderer #avatar #img");
    await page.waitForSelector("#tabsContent > tp-yt-paper-tab:nth-child(4)");
    /* PARA CANALES DONDE SALTA EL POP UP DE UNIRSE AL CANAL, ACTIVA ESTO */ /* PARA CANALES DONDE SALTA EL POP UP DE UNIRSE AL CANAL, ACTIVA ESTO */
    /*await page.click("#accept-button");*/
    await page.click("#tabsContent > tp-yt-paper-tab:nth-child(4)");
    await page.waitForSelector("ytd-grid-renderer");
    const titulos = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#contents > ytd-grid-renderer #video-title"
      );
      const titles = [];

      for (let element of elements) {
        titles.push(element.innerText);
      }
      return titles;
    });

    console.log(titulos);
  })();
}

look_For_Titles("coderhood");
