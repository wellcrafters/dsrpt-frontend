export function splitTextIntoSpans(element) {
    const text = element.innerText;
    element.innerHTML = "";

    text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        element.appendChild(span);
    });
}