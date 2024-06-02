(function () {
  const loadMoreBtn = document.getElementById("load-more-btn");

  const totalImages = 16;
  const initialLoad = 8;
  let loadedImages = 0;

  function createItemsHtml(start, end) {
    let itemsHtml = "";

    for (let i = start; i <= end; i++) {
      itemsHtml += `
                <div class="section-list__item">
                    <img src="./src/images/photos/${i}.png" alt="Photo ${i}" />
                    <div class="section-list__item-info">
                        <div>
                            <p class="section-list__item-name">Today</p>
                            <div class="section-list__item-info-data">
                                <img class="list-heart-icon" src="./src/images/icons/heart.svg" alt="Heart icon" />
                                <p>128</p>
                                <img class="list-comment-icon" src="./src/images/icons/comment.svg" alt="Comment icon" />
                                <p>31</p>
                            </div>
                        </div>
                        <div>
                            <p class="section-list__item-name">9-08-2016</p>
                            <div class="section-list__item-info-data">
                                <img class="list-heart-icon" src="./src/images/icons/heart.svg" alt="Heart icon" />
                                <p>67</p>
                                <img class="list-comment-icon" src="./src/images/icons/comment.svg" alt="Comment icon" />
                                <p>22</p>
                            </div>
                        </div>
                        <div>
                            <p class="section-list__item-name list-image-upload">Image upload</p>
                            <p>11-04-2016</p>
                        </div>
                    </div>
                </div>
                `;
    }
    return itemsHtml;
  }

  function loadImages(start, end) {
    const itemsHtml = createItemsHtml(start, end);
    document.getElementById("section-list").innerHTML += itemsHtml;
    loadedImages += 8;
  }

  loadImages(1, initialLoad);

  loadMoreBtn.addEventListener("click", function () {
    if (loadedImages < totalImages) {
      loadImages(loadedImages + 1, totalImages);
      if (loadedImages >= totalImages) {
        this.disabled = true;
        this.textContent = "No more items to load";
      }
    }
  });
})();
