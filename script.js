// const Menu = document.getElementById("menu");
// const info = document.getElementById("info");
// const volunteerInput = document.getElementById("mce-MMERGE8");
// const checkbox = document.querySelectorAll('input[type="checkbox"]');
// let openSide = false;

// Menu.addEventListener("click", () => {
//   const liMenu = document.getElementsByClassName("main-li");
//   openSide = !openSide;
//   console.log(openSide);
//   if (openSide) {
//     Array.from(liMenu).forEach((li) => {
//       li.classList.add("slide");
//     });
//   } else {
//     Array.from(liMenu).forEach((li) => {
//       li.classList.remove("slide");
//     });
//   }
// });

// Array.from(checkbox).forEach((check) => {
//   check.addEventListener("change", () => {
//     if (check.checked) {
//       if (check.value === "1") {
//         info.innerHTML = `<p>
//            Mobilization - This involves reaching out to people through one-on-one strategy and other physical means.
//             </p>`;
//       } else if (check.value === "8") {
//         info.innerHTML = `<p>
//            Polling Unit Agent - Help to man one of the 47 polling units in Ward D Bariga LCDA that's closest to your location..
//             </p>`;
//       } else if (check.value === "16") {
//         info.innerHTML = `<p>
//            Graphic Design - Help to design campaign materials for publicity and marketing...
//             </p>`;
//       } else if (check.value === "2") {
//         info.innerHTML = `<p>
//             Logistics - Help to ensure campaign materials are disbursed or placed where they ought to be. Logistics team will be responsible for the general leg work..
//              </p>`;
//       } else if (check.value === "4") {
//         info.innerHTML = `<p>
//            Social Media - This team will be responsible for online campaign by designing and executing a workable strategy...
//              </p>`;
//       }
//     }
//   });
// });

var paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  console.log(`${document.getElementById("phoneNumber").value}`);
  e.preventDefault();
  var handler = PaystackPop.setup({
    key: "pk_live_900b1ddac841d5483a7c3ef0c65792407951fa83", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: 20000 * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
    metadata: {
      custom_fields: [
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: `${document.getElementById("phoneNumber").value}`,
        },
      ],
    },
    ref: `${document.getElementById("first-name").value}.${
      document.getElementById("last-name").value
    }.${new Date().getDate() + Math.floor(Math.random() * 10000)}`, // Replace with a reference you generated
    callback: function (response) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert(
        "Payment complete! please check your email. Reference: " + reference
      );
      // Make an AJAX call to your server with the reference to verify the transaction
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });
  handler.openIframe();
}
