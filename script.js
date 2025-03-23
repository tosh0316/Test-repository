// ページがスクロールした時にヘッダーやセクションをフェードインさせる
document.addEventListener("scroll", function() {
    const scrollY = window.scrollY;

    // ヘッダーのフェードイン
    const header = document.querySelector("header");
    if (scrollY > 50) {
        header.style.opacity = 0.9;
        header.style.transition = "opacity 0.3s ease";
    } else {
        header.style.opacity = 1;
    }

    // セクションのフェードイン（下から表示）
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        if (scrollY + window.innerHeight > section.offsetTop + 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.5s ease";
        }
    });
});

// 商品画像をクリックして拡大する機能
const productImages = document.querySelectorAll(".products img");

productImages.forEach((image) => {
    image.addEventListener("click", function() {
        // 拡大表示
        const fullImage = document.createElement("img");
        fullImage.src = image.src;
        fullImage.style.position = "fixed";
        fullImage.style.top = "50%";
        fullImage.style.left = "50%";
        fullImage.style.transform = "translate(-50%, -50%)";
        fullImage.style.maxWidth = "90%";
        fullImage.style.maxHeight = "90%";
        fullImage.style.zIndex = "1000";
        fullImage.style.border = "5px solid #fff";
        fullImage.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";

        // 背景を暗くする
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = "999";
        
        // 拡大画像とオーバーレイをページに追加
        document.body.appendChild(overlay);
        document.body.appendChild(fullImage);

        // 画像クリックで拡大表示を閉じる
        overlay.addEventListener("click", function() {
            document.body.removeChild(fullImage);
            document.body.removeChild(overlay);
        });
    });
});

// スクロールしてページトップに戻るボタン
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑ Top";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "30px";
backToTopBtn.style.right = "30px";
backToTopBtn.style.padding = "15px 25px";
backToTopBtn.style.fontSize = "18px";
backToTopBtn.style.backgroundColor = "#333";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.opacity = "0";
backToTopBtn.style.transition = "opacity 0.3s ease";

document.body.appendChild(backToTopBtn);

// スクロール時にボタンを表示
document.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.opacity = "1";
    } else {
        backToTopBtn.style.opacity = "0";
    }
});

// ボタンをクリックしてページトップに戻る
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
