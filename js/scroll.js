
    const imgWrapper = document.querySelector(".imgwrapper");
    let pageToFetch = 1;
    let fetching = false;

    let totalImagesLoaded = 0; // 로드된 이미지의 총 개수를 추적하는 변수
    const maxImages = 10; // 최대 이미지 로드 개수

    async function fetchImages(page) {
    // 이미 최대 개수에 도달했다면 추가 로드하지 않음
    if (totalImagesLoaded >= maxImages) {
    window.removeEventListener('scroll', handleScroll);
    return;
}

    if (fetching) return;
    fetching = true;

    try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
    if (!response.ok) {
    throw new Error('네트워크 응답에 문제가 있습니다.');
}

    const images = await response.json();
    makeImageList(images);
    totalImagesLoaded += images.length; // 로드된 이미지의 개수를 업데이트

    // 최대 개수에 도달했다면 스크롤 이벤트 리스너를 제거
    if (totalImagesLoaded >= maxImages) {
    window.removeEventListener('scroll', handleScroll);
}

    fetching = false;
} catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다:', error);
    fetching = false;
}
}

    function makeImageList(images) {
    let imageRow = document.createElement('div');
    imageRow.className = 'image_row'; // 이 클래스 이름은 기존에 있던 클래스 이름으로 대체해야 합니다.

    images.forEach((image, index) => {
    if (index > 0 && index % 3 === 0) {
    imgWrapper.appendChild(imageRow);
    imageRow = document.createElement('div');
    imageRow.className = 'image_row';
}

    const img = document.createElement('img');
    img.src = image.download_url;
    img.alt = 'Image loaded from picsum.photos';
    imageRow.appendChild(img);
});

    imgWrapper.appendChild(imageRow); // 마지막 라인을 추가합니다.
}

    const showMoreBtn = document.querySelector(".more_but button");
    showMoreBtn.addEventListener('click', () => {
    window.addEventListener('scroll', handleScroll);
    showMoreBtn.style.display = 'none';
    fetchImages(pageToFetch++);
});

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !fetching) {
        fetchImages(pageToFetch++);
    }
}
