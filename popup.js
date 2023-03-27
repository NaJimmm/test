var iframe = document.getElementById("myiframe");

document.getElementById("reload").addEventListener("click", function() {
  
  // const puppeteer = require('puppeteer');
  // (async () => {
  //   // 启动无头浏览器
  //   const browser = await puppeteer.launch();
  
  //   // 打开一个页面
  //   const page = await browser.newPage();
  
  //   // 访问 Cloudflare 网站，并等待验证通过
  //   await page.goto('https://freegpt.one/');
  //   await page.waitForNavigation();
  
  //   // 关闭浏览器
  //   await browser.close();
  // })();
  iframe.contentWindow.location.reload();

    
});


