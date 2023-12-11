const vision_11 = document.getElementById("vision-11");
if (vision_11) {
  vision_11.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button2 = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button2.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = vision_11.querySelector(".modal-title");
    const modalBodyInput = vision_11.querySelector(".modal-body input");

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });
}
