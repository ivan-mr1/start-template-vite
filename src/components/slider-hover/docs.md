```
<div class="portfolio__slider slider">
  <div class="slider__scroll-wrapper">
    <div class="slider__scroll-zone slider__scroll-zone--left"></div>
    <div class="slider__scroll-zone slider__scroll-zone--right"></div>
  </div>
  <div class="slider__wrapper">
    <div class="slider__slide slider__slide--1">
      <img
        src="assets/img/slider/1.webp"
        alt="slide"
        width="400"
        height="534"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--2">
      <img
        src="assets/img/slider/2.webp"
        alt="slide"
        width="220"
        height="220"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--3">
      <img
        src="assets/img/slider/3.webp"
        alt="slide"
        width="280"
        height="374"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--4">
      <img
        src="assets/img/slider/4.webp"
        alt="slide"
        width="400"
        height="534"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--5">
      <img
        src="assets/img/slider/5.webp"
        alt="slide"
        width="280"
        height="374"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--6">
      <img
        src="assets/img/slider/6.webp"
        alt="slide"
        width="220"
        height="220"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--7">
      <img
        src="assets/img/slider/7.webp"
        alt="slide"
        width="280"
        height="374"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--8">
      <img
        src="assets/img/slider/8.webp"
        alt="slide"
        width="400"
        height="534"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--9">
      <img
        src="assets/img/slider/9.webp"
        alt="slide"
        width="220"
        height="220"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--10">
      <img
        src="assets/img/slider/10.webp"
        alt="slide"
        width="280"
        height="374"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--11">
      <img
        src="assets/img/slider/11.webp"
        alt="slide"
        width="280"
        height="374"
        loading="lazy"
      />
    </div>
    <div class="slider__slide slider__slide--12">
      <img
        src="assets/img/slider/12.webp"
        alt="slide"
        width="400"
        height="534"
        loading="lazy"
      />
    </div>
  </div>
</div>
```

```
@use '../../styles/helpers/' as *;

.slider {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;

  &__scroll-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    max-width: 1440px;
    height: 100%;
  }

  &__scroll-zone {
    position: absolute;
    z-index: 100;
    top: 0;
    width: 30%;
    height: 100%;
    cursor: ew-resize;
  }

  &__scroll-zone--left {
    left: 0;
  }

  &__scroll-zone--right {
    right: 0;
  }

  &__wrapper {
    overflow-x: auto;
    display: flex;
    align-items: start;
    gap: 20px;
    min-height: 654px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__slide {
    flex: 0 0 auto;

    &--1,
    &--3,
    &--5,
    &--8,
    &--11 {
      padding-top: 121px;
    }

    &--2,
    &--6,
    &--9 {
      padding-top: 217px;
    }
  }
}

@media (pointer: coarse) {
  .slider__scroll-wrapper,
  .slider__scroll-zone {
    display: none;
  }
}
```

```
const sliderPortfolio = () => {
  const slider = document.querySelector('.slider__wrapper');
  const leftZone = document.querySelector('.slider__scroll-zone--left');
  const rightZone = document.querySelector('.slider__scroll-zone--right');

  if (!slider || !leftZone || !rightZone) {
    return;
  }

  const maxSpeed = 15;
  const acceleration = 0.5;
  const deceleration = 0.6;
  let currentSpeed = 0;
  let direction = 0;
  let isHovered = false;

  function animate() {
    if (isHovered && currentSpeed < maxSpeed) {
      currentSpeed += acceleration;
    } else if (!isHovered && currentSpeed > 0) {
      currentSpeed -= deceleration;
    } else if (currentSpeed < 0) {
      currentSpeed = 0;
    }

    if (currentSpeed > 0) {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const nextPos = slider.scrollLeft + direction * currentSpeed;

      if (
        (direction < 0 && nextPos <= 0) ||
        (direction > 0 && nextPos >= maxScroll)
      ) {
        stopScrolling();
      } else {
        slider.scrollLeft = nextPos;
      }
    }

    requestAnimationFrame(animate);
  }

  function startScrolling(dir) {
    direction = dir;
    isHovered = true;
  }

  function stopScrolling() {
    isHovered = false;
  }

  leftZone.addEventListener('mouseenter', () => startScrolling(-1));
  rightZone.addEventListener('mouseenter', () => startScrolling(1));
  leftZone.addEventListener('mouseleave', stopScrolling);
  rightZone.addEventListener('mouseleave', stopScrolling);
  slider.addEventListener('mouseleave', stopScrolling);
  window.addEventListener('blur', stopScrolling);

  const middleScroll = (slider.scrollWidth - slider.clientWidth) / 2;
  slider.scrollLeft = middleScroll;

  requestAnimationFrame(animate);
};

export default sliderPortfolio;
```
