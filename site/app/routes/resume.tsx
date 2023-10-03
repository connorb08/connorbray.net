export async function loader() {
    return await fetch("https://content.connorbray.net/resume.pdf");
}
