const handleSubmit = async (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // @ts-ignore
    body: new URLSearchParams(formData).toString(),
  });

  window.location.assign(`${window.location}success`);
};
