// template_8zttbmj
// service_dvhh98w
// vyCv0toT_w8iaKlPu

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_dvhh98w",
      "template_8zttbmj",
      event.target,
      "vyCv0toT_w8iaKlPu"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at robinnem@outlook.com"
      );
    });
}
