let fun = () => {
  fetch("/data", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      cityName: document.getElementById("cityId").value,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
