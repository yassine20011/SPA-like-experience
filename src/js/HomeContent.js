export function HomeContent() {
    document.addEventListener("DOMContentLoaded", async () => {
        document.title = "CyberSafe | Home";
        await fetch("./snippets/home.html")
            .then((response) => response.text())
            .then((data) => {
                let content = document.getElementById("content");
                content.innerHTML = data;
            });
    });
}