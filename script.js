function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function log(message) {
    const logs = document.getElementById("logs");
    logs.innerHTML += message + "<br>";
    logs.scrollTop = logs.scrollHeight;
}

async function runPipeline() {
    const stages = ["code", "build", "test", "deploy"];
    let progress = 0;

    document.getElementById("logs").innerHTML = "";
    document.getElementById("progress-bar").style.width = "0%";

    // Reset stages
    stages.forEach(stage => {
        const el = document.getElementById(stage);
        el.classList.remove("active", "success");
        el.querySelector("span").innerText = "⏳";
    });

    for (let stage of stages) {
        const el = document.getElementById(stage);
        const icon = el.querySelector("span");

        el.classList.add("active");
        icon.innerText = "⚙️";
        log(stage.toUpperCase() + " running...");

        await sleep(1500);

        el.classList.remove("active");
        el.classList.add("success");
        icon.innerText = "✅";

        progress += 25;
        document.getElementById("progress-bar").style.width =
            progress + "%";

        log(stage.toUpperCase() + " completed.");
    }

    log("🚀 Deployment Successful!");
}
