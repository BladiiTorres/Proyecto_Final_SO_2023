function showCar(carId) {
    const carSpecs = document.getElementById(carId);
    if (carSpecs.style.display === 'none') {
      carSpecs.style.display = 'block';
    } else {
      carSpecs.style.display = 'none';
    }
  }
  