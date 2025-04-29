function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const texto = input.value.trim();

    if (texto === "") return;

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = " " + texto;

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "red";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    document.getElementById("lista").appendChild(li);

    input.value = "";
}