const counterNum = document.querySelectorAll(".count_number");
const speed = 5;

counterNum.forEach((curElement) =>{
    const updateNumber = () => {
        const targetNumber = parseInt(curElement.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElement.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);
        if (initialNum < targetNumber) {
            curElement.innerText = `${initialNum + incrementNumber }+ `;
            setTimeout(updateNumber, 90)
        }


    };
    updateNumber();
});





const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 10,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide', config).mount()