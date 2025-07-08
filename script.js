  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");

    // Cria mensagem de sucesso
    const successMessage = document.createElement("div");
    successMessage.className = "success-message mt-4 text-center rounded";
    successMessage.textContent = "Mensagem enviada com sucesso!";
    form.appendChild(successMessage);

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede envio padrão do formulário

      let valid = true;

      // Limpa erros anteriores
      inputs.forEach((input) => {
        input.classList.remove("input-error");
      });

      // Validação básica: se o campo está vazio
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          input.classList.add("input-error");
          valid = false;
        }
      });

      if (valid) {
        // Exibe mensagem de sucesso
        successMessage.style.display = "block";

        // Limpa os campos após 1 segundo
        setTimeout(() => {
          form.reset();
          successMessage.style.display = "none";
        }, 3000);
      }
    });
  });
