$(() => {
  const images = document.querySelector('#images');
  let ids = Array.from(Array(10).keys(), n => n + 1)
  const displayImages = (ids) => {
    return ids.map((id) => {
      return `<li>
          <img src='http://api.adorable.io/avatars/${id}' width='250' height='250'>
          </li>`
    }).join('');
  }
  images.innerHTML = displayImages(ids);
  const options = {
    root: document.querySelector('#container'),
    threshold: 1.0
  }
  const callback = (entries) => {
    entries.forEach(entry => {

      if (entry.intersectionRatio > 0) {
        setTimeout(() => {
          console.log('entry', entry);
          ids = [...ids, ...Array.from(Array(10).keys(), n => n + ids.length + 1)];
          //images.append(displayImages(ids));
          console.log(ids.length, ids);
          $('.more-content').html(displayImages(ids));
        }, 1000)
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(document.querySelector('#infinite-scroll-trigger'));
});

